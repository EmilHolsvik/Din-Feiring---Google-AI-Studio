import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Calculator } from 'lucide-react'
import Eyebrow from './Eyebrow'
import {
  serializeInquiryItems,
  formatCurrency,
  getCalculatorLinePrice,
  getCalculatorLimitGroup,
  getCalculatorMaxQuantity,
  getCalculatorLimitCopy,
  getInquirySelectableProducts,
} from '../data/produkter'

const PERIODER = [
  { id: 'helg', label: 'Helg (fre-søn)' },
  { id: 'dogn', label: 'Døgn (24 timer)' },
  { id: 'uke', label: 'Uke (man-fre)' },
]

export default function Kalkulator({
  titleAs = 'h2',
  titleText = 'Se et prisestimat med en gang',
  subtitleText = 'Velg produkter, antall og periode for å få et raskt overslag. Levering og montering kommer i tillegg ved behov.',
}) {
  const TitleTag = titleAs

  const produktvalg = useMemo(
    () =>
      getInquirySelectableProducts().map((p) => ({
        id: p.id,
        navn: p.navn,
        priser: p.priser,
        kategori: p.kategori,
        kategoriId: p.kategoriId,
      })),
    []
  )

  const getRemainingLimitForLine = (items, index, produktId) => {
    const absoluteMax = getCalculatorMaxQuantity(produktId)
    const limitGroup = getCalculatorLimitGroup(produktId)
    const bruktPaAndreLinjer = items.reduce((sum, item, itemIndex) => {
      if (itemIndex === index || getCalculatorLimitGroup(item.produktId) !== limitGroup) return sum
      return sum + Number(item.antall || 0)
    }, 0)

    return Math.max(0, absoluteMax - bruktPaAndreLinjer)
  }

  const findAvailableProductId = (items, index = null, preferredId = null) => {
    const candidates = preferredId ? [preferredId, ...produktvalg.map((produkt) => produkt.id)] : produktvalg.map((produkt) => produkt.id)
    const uniqueCandidates = [...new Set(candidates)]

    return (
      uniqueCandidates.find((produktId) => getRemainingLimitForLine(items, index, produktId) > 0) ??
      preferredId ??
      produktvalg[0]?.id ??
      ''
    )
  }

  const defaultProdukt = produktvalg.find((p) => p.id === 'stoler')?.id ?? produktvalg[0]?.id ?? ''
  const [valg, setValg] = useState([])

  const clampQuantity = (items, index, produktId, value, { allowEmpty = false } = {}) => {
    if (value === '' && allowEmpty) return ''

    const maxForLine = getRemainingLimitForLine(items, index, produktId)
    if (maxForLine <= 0) return 1

    const numericValue = Math.trunc(Number(value))
    if (!Number.isFinite(numericValue)) {
      return allowEmpty ? '' : 1
    }

    return Math.min(maxForLine, Math.max(1, numericValue))
  }

  const leggTil = () =>
    setValg((current) => {
      const produktId = findAvailableProductId(current, null, defaultProdukt)
      return [...current, { produktId, antall: 1, periode: 'helg' }]
    })
  const fjern = (index) => setValg((current) => current.filter((_, itemIndex) => itemIndex !== index))

  const normaliserAntall = (index) => {
    setValg((current) =>
      current.map((item, itemIndex) =>
        itemIndex === index
          ? { ...item, antall: clampQuantity(current, index, item.produktId, item.antall, { allowEmpty: false }) }
          : item
      )
    )
  }

  const oppdater = (index, felt, verdi) => {
    setValg((current) => {
      if (felt === 'produktId') {
        if (getRemainingLimitForLine(current, index, verdi) <= 0) {
          return current
        }

        return current.map((item, itemIndex) => {
          if (itemIndex !== index) return item

          return {
            ...item,
            produktId: verdi,
            antall: clampQuantity(current, index, verdi, item.antall),
          }
        })
      }

      if (felt === 'antall') {
        return current.map((item, itemIndex) =>
          itemIndex === index ? { ...item, antall: clampQuantity(current, index, item.produktId, verdi, { allowEmpty: true }) } : item
        )
      }

      return current.map((item, itemIndex) => (itemIndex === index ? { ...item, [felt]: verdi } : item))
    })
  }

  const total = valg.reduce((sum, item) => {
    return sum + getCalculatorLinePrice(item.produktId, item.periode, item.antall)
  }, 0)

  const oppsummering = valg
    .map((item) => {
      const produkt = produktvalg.find((produktItem) => produktItem.id === item.produktId)
      if (!produkt) return null

      const periode = PERIODER.find((periodeItem) => periodeItem.id === item.periode)?.label ?? item.periode
      return `${produkt.navn} x ${Number(item.antall) || 1} (${periode.toLowerCase()})`
    })
    .filter(Boolean)

  const contactHref = `/kontakt?items=${serializeInquiryItems(
    valg.map((item) => ({ productId: item.produktId, quantity: Number(item.antall) || 1 }))
  )}`

  return (
    <section
      id="kalkulator"
      className="section section-alt"
      style={{ background: 'var(--section-top)' }}
    >
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <Eyebrow icon={Calculator} className="badge" style={{ marginBottom: '12px', display: 'inline-flex' }}>
            Prisestimat
          </Eyebrow>
          <TitleTag className="heading-elegant" style={{ fontSize: 'clamp(32px, 5vw, 42px)', color: 'var(--primary)', marginBottom: '12px' }}>
            {titleText}
          </TitleTag>
          <p
            style={{
              color: 'var(--text-muted)',
              fontSize: '18px',
              maxWidth: '620px',
              margin: '0 auto',
              fontWeight: 400,
              lineHeight: 1.6,
            }}
          >
            {subtitleText}
          </p>
          <p style={{ marginTop: '14px', color: 'var(--text-muted)', fontSize: '15px', fontWeight: 500 }}>
            Prislisten ligger lenger ned på siden.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px', alignItems: 'start' }}>
          <div className="card" style={{ padding: '32px 40px', background: 'var(--white)' }}>
            <h3 className="heading-elegant" style={{ fontSize: '22px', marginBottom: '20px', color: 'var(--primary)', fontWeight: 700 }}>
              Velg det du vil ha med
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {valg.length === 0 ? (
                <p className="calculator-empty-state">Klikk på «+ Legg til ny linje» nedenfor for å legge til produkter og se et prisestimat.</p>
              ) : null}

              {valg.map((item, index) => (
                <div key={index} className="calculator-line-item">
                  <div className="calculator-line-controls">
                    <div>
                      <label style={labelStyle}>Produkt</label>
                      <select value={item.produktId} onChange={(event) => oppdater(index, 'produktId', event.target.value)} style={selectStyle}>
                        {produktvalg.map((produkt) => {
                          const isSelectable =
                            getRemainingLimitForLine(valg, index, produkt.id) > 0 || produkt.id === item.produktId

                          return (
                            <option key={produkt.id} value={produkt.id} disabled={!isSelectable}>
                              {produkt.navn}
                              {!isSelectable ? ` - maks ${getCalculatorMaxQuantity(produkt.id)} valgt` : ''}
                            </option>
                          )
                        })}
                      </select>
                    </div>

                    <div>
                      <label style={labelStyle}>Antall</label>
                      <input
                        type="number"
                        min="1"
                        step="1"
                        max={getRemainingLimitForLine(valg, index, item.produktId)}
                        value={item.antall}
                        onChange={(event) => oppdater(index, 'antall', event.target.value)}
                        onBlur={() => normaliserAntall(index)}
                        inputMode="numeric"
                        style={inputStyle}
                      />
                    </div>

                    <div>
                      <label style={labelStyle}>Periode</label>
                      <select value={item.periode} onChange={(event) => oppdater(index, 'periode', event.target.value)} style={selectStyle}>
                        {PERIODER.map((periode) => (
                          <option key={periode.id} value={periode.id}>
                            {periode.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <p className="calculator-limit-copy">
                    {getCalculatorLimitCopy(item.produktId)} Du kan velge opptil {getRemainingLimitForLine(valg, index, item.produktId)} stk på
                    denne linjen.
                  </p>

                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginTop: '8px',
                      paddingTop: '12px',
                      borderTop: '1px solid var(--border-dark)',
                    }}
                  >
                    <span style={{ fontWeight: 700, fontSize: '18px', color: 'var(--primary)' }}>
                      {formatCurrency(getCalculatorLinePrice(item.produktId, item.periode, item.antall))}
                    </span>
                    {valg.length > 1 && (
                      <button
                        onClick={() => fjern(index)}
                        style={{
                          background: 'transparent',
                          border: 'none',
                          cursor: 'pointer',
                          color: '#ef4444',
                          fontSize: '14px',
                          fontWeight: 600,
                        }}
                        title="Fjern produkt"
                        type="button"
                      >
                        Fjern
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={leggTil}
              type="button"
              style={{
                width: '100%',
                marginTop: '20px',
                padding: '14px',
                border: '1px dashed var(--primary-muted)',
                borderRadius: '999px',
                background: 'transparent',
                cursor: 'pointer',
                color: 'var(--primary)',
                fontWeight: 700,
                fontSize: '15px',
                transition: 'all 0.2s',
                fontFamily: 'var(--font-main)',
              }}
            >
              + Legg til ny linje
            </button>
          </div>

          {valg.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div
                className="card"
                style={{
                  padding: '34px 26px',
                  textAlign: 'center',
                  background: 'var(--primary)',
                  color: 'var(--white)',
                  border: 'none',
                  borderRadius: 'var(--radius)',
                  boxShadow: 'var(--shadow-md)',
                }}
              >
                <div
                  style={{
                    color: 'rgba(255,255,255,0.8)',
                    fontSize: '14px',
                    fontWeight: 600,
                    letterSpacing: '0.5px',
                    marginBottom: '10px',
                    textTransform: 'uppercase',
                  }}
                >
                  Prisestimat
                </div>
                <output
                  aria-live="polite"
                  style={{
                    fontFamily: 'var(--font-main)',
                    fontSize: 'clamp(40px, 6vw, 54px)',
                    fontWeight: 700,
                    color: 'white',
                    lineHeight: 1,
                  }}
                >
                  {formatCurrency(total)}
                </output>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginTop: '18px', lineHeight: 1.6, fontWeight: 400 }}>
                  Dette er et overslag basert på valgene over. Levering og montering kommer i tillegg ved behov.
                </p>
                <div className="calculator-summary">
                  <strong>Valgene dine</strong>
                  <ul>
                    {oppsummering.map((oppsummeringItem) => (
                      <li key={oppsummeringItem}>{oppsummeringItem}</li>
                    ))}
                  </ul>
                </div>
                <Link
                  to={contactHref}
                  className="btn btn-outline"
                  style={{ width: '100%', maxWidth: '320px', marginTop: '22px', borderColor: 'rgba(255,255,255,0.3)', color: 'white' }}
                >
                  Send disse valgene videre
                </Link>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}

const selectStyle = {
  width: '100%',
  padding: '12px 16px',
  borderRadius: '8px',
  border: '1px solid var(--border-dark)',
  fontSize: '15px',
  fontWeight: 500,
  fontFamily: 'var(--font-main)',
  background: 'white',
  cursor: 'pointer',
  appearance: 'none',
  backgroundImage:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8'%3E%3Cpath d='M0 0l6 8 6-8z' fill='%231e3a5f'/%3E%3C/svg%3E\")",
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 14px center',
  outline: 'none',
  color: 'var(--primary)',
}

const inputStyle = {
  width: '100%',
  padding: '12px 16px',
  borderRadius: '8px',
  border: '1px solid var(--border-dark)',
  fontSize: '15px',
  fontWeight: 500,
  fontFamily: 'var(--font-main)',
  background: 'white',
  outline: 'none',
  color: 'var(--primary)',
}

const labelStyle = {
  display: 'block',
  fontSize: '13px',
  fontWeight: 700,
  color: 'var(--primary-muted)',
  marginBottom: '8px',
}
