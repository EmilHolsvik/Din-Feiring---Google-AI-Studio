import { Fragment, useEffect, useMemo, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ChevronRight, CircleHelp, Plus, Send, X } from 'lucide-react'
import Eyebrow from './Eyebrow'
import {
  buildInquiryDraft,
  buildInquiryMailto,
  buildInquirySubmissionPayload,
  companyInfo,
  getCalculatorLimitGroup,
  getCalculatorMaxQuantity,
  getInquirySelectableProducts,
  normalizeInquiryItems,
  parseInquiryItems,
} from '../data/produkter'

function createLine(productId = '') {
  return { productId, quantity: 1 }
}

function createInitialItems(prefillItems = []) {
  return prefillItems.length > 0 ? prefillItems.map((item) => ({ ...item })) : [createLine()]
}

function createInitialState(prefillItems = []) {
  return {
    name: '',
    phone: '',
    email: '',
    date: '',
    homeAddress: '',
    deliveryAddress: '',
    guestCount: '',
    fulfillment: 'Henting selv',
    message: '',
    website: '',
    items: createInitialItems(prefillItems),
  }
}

function isValidPhone(value = '') {
  const trimmedValue = value.trim()

  if (!trimmedValue || !/^\+?[0-9\s()-]+$/.test(trimmedValue)) {
    return false
  }

  const digitCount = trimmedValue.replace(/\D/g, '').length
  return digitCount >= 8 && digitCount <= 15
}

function isValidEmail(value = '') {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim())
}

function getTodayDateValue() {
  const now = new Date()
  const localTime = new Date(now.getTime() - now.getTimezoneOffset() * 60_000)
  return localTime.toISOString().slice(0, 10)
}

const FORM_STEPS = [
  { id: 'kontakt', label: 'Kontakt' },
  { id: 'arrangement', label: 'Arrangement' },
  { id: 'utstyr', label: 'Utstyr' },
]

export default function QuoteForm({
  eyebrow = 'Be om tilbud',
  eyebrowIcon = Send,
  title = 'Send oss en forespørsel',
  intro,
  presetItems = [],
  compact = false,
  showIntro = true,
  surface = false,
  dense = false,
  onSuccessfulSubmit,
}) {
  const location = useLocation()
  const locationPresetItems = useMemo(() => {
    const searchParams = new URLSearchParams(location.search)
    return parseInquiryItems(searchParams.get('items'))
  }, [location.search])
  const effectivePresetItems = useMemo(
    () => normalizeInquiryItems(locationPresetItems.length > 0 ? locationPresetItems : presetItems),
    [locationPresetItems, presetItems]
  )
  const selectableProducts = useMemo(() => getInquirySelectableProducts(), [])

  const submissionEndpoint = import.meta.env?.VITE_CONTACT_ENDPOINT || 'https://api.web3forms.com/submit'
  const contactAccessKey = import.meta.env?.VITE_CONTACT_ACCESS_KEY
  const [formState, setFormState] = useState(() => createInitialState(effectivePresetItems))
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')
  const [debugMessage, setDebugMessage] = useState('')
  const [step, setStep] = useState(0)
  const isSubmittingRef = useRef(false)
  const submitIntentRef = useRef(false)
  const hasPresetItems = effectivePresetItems.length > 0
  const minimumBookingDate = useMemo(() => getTodayDateValue(), [])

  useEffect(() => {
    setFormState((current) => {
      const hasUserInput =
        current.name ||
        current.phone ||
        current.email ||
        current.date ||
        current.homeAddress ||
        current.deliveryAddress ||
        current.guestCount ||
        current.message ||
        current.items.some((item) => item.quantity !== 1 || Boolean(item.productId))

      return hasUserInput ? current : createInitialState(effectivePresetItems)
    })
  }, [effectivePresetItems])

  const inquiryDraft = useMemo(() => buildInquiryDraft(formState), [formState])

  const resetFeedback = () => {
    isSubmittingRef.current = false
    submitIntentRef.current = false
    setError('')
    setDebugMessage('')
    setStatus('idle')
  }

  const stepIntro =
    intro ??
    'Fyll inn det viktigste først. Resten tar du steg for steg.'
  const hasTopContent = showIntro || hasPresetItems || Boolean(error)

  const handleFieldChange = (event) => {
    const { name, value } = event.target
    resetFeedback()
    setFormState((current) => ({ ...current, [name]: value }))
  }

  const getRemainingLimitForLine = (items, index, productId) => {
    const absoluteMax = getCalculatorMaxQuantity(productId)
    const limitGroup = getCalculatorLimitGroup(productId)
    const usedInOtherLines = items.reduce((sum, item, itemIndex) => {
      if (itemIndex === index || getCalculatorLimitGroup(item.productId) !== limitGroup) return sum
      return sum + Number(item.quantity || 0)
    }, 0)

    return Math.max(0, absoluteMax - usedInOtherLines)
  }

  const clampLineQuantity = (items, index, productId, value, { allowEmpty = false } = {}) => {
    if (value === '' && allowEmpty) return ''

    const maxForLine = getRemainingLimitForLine(items, index, productId)
    if (maxForLine <= 0) return 1

    const numericValue = Math.trunc(Number(value))
    if (!Number.isFinite(numericValue)) {
      return allowEmpty ? '' : 1
    }

    return Math.min(maxForLine, Math.max(1, numericValue))
  }

  const updateLine = (index, field, value) => {
    resetFeedback()

    setFormState((current) => {
      if (field === 'productId') {
        if (!value) {
          return {
            ...current,
            items: current.items.filter((_, itemIndex) => itemIndex !== index),
          }
        }

        if (getRemainingLimitForLine(current.items, index, value) <= 0) {
          return current
        }

        return {
          ...current,
          items: current.items.map((item, itemIndex) =>
            itemIndex === index
              ? { ...item, productId: value, quantity: clampLineQuantity(current.items, index, value, item.quantity) }
              : item
          ),
        }
      }

      if (field === 'quantity') {
        return {
          ...current,
          items: current.items.map((item, itemIndex) =>
            itemIndex === index
              ? { ...item, quantity: clampLineQuantity(current.items, index, item.productId, value, { allowEmpty: true }) }
              : item
          ),
        }
      }

      return {
        ...current,
        items: current.items.map((item, itemIndex) => (itemIndex === index ? { ...item, [field]: value } : item)),
      }
    })
  }

  const normalizeLineQuantity = (index) => {
    resetFeedback()
    setFormState((current) => ({
      ...current,
      items: current.items.map((item, itemIndex) =>
        itemIndex === index
          ? { ...item, quantity: clampLineQuantity(current.items, index, item.productId, item.quantity) }
          : item
      ),
    }))
  }

  const addLine = () => {
    resetFeedback()
    setFormState((current) => {
      if (current.items.some((item) => !item.productId)) {
        return current
      }

      return { ...current, items: [...current.items, createLine()] }
    })
  }

  const removeLine = (index) => {
    resetFeedback()
    setFormState((current) => ({
      ...current,
      items: current.items.filter((_, itemIndex) => itemIndex !== index),
    }))
  }

  const validateStep = (currentStep) => {
    if (currentStep === 0) {
      if (!formState.name.trim()) {
        setError('Fyll inn navn før du går videre.')
        return false
      }

      if (!formState.phone.trim()) {
        setError('Fyll inn telefonnummer før du går videre.')
        return false
      }

      if (!isValidPhone(formState.phone)) {
        setError('Skriv inn et gyldig telefonnummer før du går videre.')
        return false
      }

      if (!formState.email.trim()) {
        setError('Fyll inn e-postadresse før du går videre.')
        return false
      }

      if (!isValidEmail(formState.email)) {
        setError('Skriv inn en gyldig e-postadresse før du går videre.')
        return false
      }
    }

    if (currentStep === 1) {
      if (!formState.homeAddress.trim()) {
        setError('Fyll inn hjemmeadresse før du går videre.')
        return false
      }

      if (formState.date && formState.date < minimumBookingDate) {
        setError('Velg en dato fra i dag eller senere.')
        return false
      }
    }

    return true
  }

  const goToStep = (nextStep) => {
    if (nextStep > step && !validateStep(step)) return
    resetFeedback()
    setStep(nextStep)
  }

  const handleFormKeyDown = (event) => {
    if (event.key !== 'Enter') {
      return
    }

    const target = event.target
    if (!(target instanceof HTMLElement)) {
      return
    }

    const tagName = target.tagName
    const inputType = 'type' in target ? String(target.type || '').toLowerCase() : ''

    if (tagName === 'TEXTAREA' || tagName === 'BUTTON' || inputType === 'submit' || inputType === 'button') {
      return
    }

    event.preventDefault()
  }

  const markSubmitIntent = () => {
    submitIntentRef.current = true
  }

  const markSent = ({ debug = '', notifyParent = true } = {}) => {
    isSubmittingRef.current = false
    submitIntentRef.current = false
    setStep(0)
    setFormState(createInitialState(effectivePresetItems))
    setStatus('sent')
    setError('')
    setDebugMessage(debug)

    if (notifyParent) {
      onSuccessfulSubmit?.()
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const hasExplicitSubmitIntent = submitIntentRef.current
    submitIntentRef.current = false

    if (!hasExplicitSubmitIntent) {
      return
    }

    if (isSubmittingRef.current || status === 'sending' || status === 'sent') {
      return
    }

    if (step < FORM_STEPS.length - 1) {
      goToStep(step + 1)
      return
    }

    if (!validateStep(0) || !validateStep(1)) {
      isSubmittingRef.current = false
      setStatus('idle')
      return
    }

    isSubmittingRef.current = true

    if (formState.website.trim()) {
      markSent({
        debug: 'Skjemaet ble ignorert fordi spamfeltet var utfylt.',
        notifyParent: false,
      })
      return
    }

    const payload = buildInquirySubmissionPayload(formState, {
      accessKey: contactAccessKey,
      source: 'dinfeiring.no',
      timestamp: new Date().toISOString(),
    })

    const clipboardLines = inquiryDraft.message

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(clipboardLines)
      }
    } catch {
      // Clipboard is optional convenience only.
    }

    if (submissionEndpoint && contactAccessKey) {
      try {
        setStatus('sending')
        const response = await fetch(submissionEndpoint, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        })
        const responseBody = await response.json().catch(() => null)

        if (!response.ok) {
          throw new Error(responseBody?.message || responseBody?.msg || 'Send-feil')
        }

        markSent({
          debug: responseBody?.message || 'Web3Forms bekreftet at forespørselen ble sendt.',
        })
        return
      } catch (submissionError) {
        setError(submissionError instanceof Error ? submissionError.message : 'Ukjent sendefeil.')
        setDebugMessage('Automatisk innsending feilet, så vi åpner e-postutkast som reserve.')
        setStatus('fallback')
        isSubmittingRef.current = false
      }
    }

    window.location.href = buildInquiryMailto(formState)
    setStatus(submissionEndpoint && contactAccessKey ? 'fallback' : 'ready')
    setError('')
    isSubmittingRef.current = false
  }

  const submitLabel = submissionEndpoint && contactAccessKey
    ? status === 'sending'
      ? 'Sender...'
      : 'Send forespørsel'
    : 'Åpne e-postutkast'
  const isLastStep = step === FORM_STEPS.length - 1
  const hasEquipmentLines = formState.items.length > 0

  return (
    <div
      className={`quote-form-shell ${compact ? 'quote-form-shell-compact' : ''} ${surface ? 'quote-form-shell-surface' : ''} ${dense ? 'quote-form-shell-dense' : ''}`}
    >
      <form className="quote-form" onSubmit={handleSubmit} onKeyDown={handleFormKeyDown} noValidate>
        <div
          aria-hidden="true"
          style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }}
        >
          <label htmlFor="company-website">Nettside</label>
          <input
            id="company-website"
            name="website"
            type="text"
            value={formState.website}
            onChange={handleFieldChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {hasTopContent ? (
          <div className="quote-form-top">
            {showIntro ? (
              <>
                <Eyebrow icon={eyebrowIcon}>{eyebrow}</Eyebrow>
                <h3 className="section-title compact-title">{title}</h3>
                <p className="section-subtitle compact-copy">{stepIntro}</p>
              </>
            ) : null}
            {hasPresetItems ? (
              <p className="prefill-note">
                Vi har lagt inn produktene fra siden du kom fra. Du kan endre antall eller legge til flere.
              </p>
            ) : null}
            {error ? (
              <div className="form-error" role="alert" aria-live="polite">
                {error}
              </div>
            ) : null}
            {debugMessage ? (
              <p className="mini-copy" role="status" aria-live="polite">
                {debugMessage}
              </p>
            ) : null}
          </div>
        ) : null}

        <div className="form-step-nav" aria-label="Steg i skjema">
          {FORM_STEPS.map((item, index) => (
            <Fragment key={item.id}>
              <button
                type="button"
                className={`form-step-pill ${step === index ? 'form-step-pill-active' : ''}`}
                onClick={() => goToStep(index)}
              >
                <span>{index + 1}</span>
                {item.label}
              </button>
              {index < FORM_STEPS.length - 1 ? (
                <span className="form-step-arrow" aria-hidden="true">
                  <ChevronRight size={16} />
                </span>
              ) : null}
            </Fragment>
          ))}
        </div>

        {step === 0 ? (
          <section className="form-step-panel">
            <div className="form-step-header">
              <h4>Hvordan kan vi nå deg?</h4>
              <p>Navn, telefon og e-post må være riktig utfylt før du kan gå videre.</p>
            </div>

            <div className="form-grid">
              <label className="field">
                <span>Navn</span>
                <input
                  name="name"
                  type="text"
                  value={formState.name}
                  onChange={handleFieldChange}
                  placeholder="Fornavn og etternavn"
                  autoComplete="name"
                  required
                  aria-invalid={!!error && !formState.name.trim()}
                />
              </label>

              <label className="field">
                <span>Telefon</span>
                <input
                  name="phone"
                  type="tel"
                  value={formState.phone}
                  onChange={handleFieldChange}
                  placeholder="+47 405 36 266"
                  autoComplete="tel"
                  inputMode="tel"
                  required
                  pattern="^\+?[0-9\s()-]{8,}$"
                  title="Skriv inn et gyldig telefonnummer."
                  aria-invalid={!!error && (!formState.phone.trim() || !isValidPhone(formState.phone))}
                />
              </label>

              <label className="field">
                <span>E-post</span>
                <input
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleFieldChange}
                  placeholder="navn@epost.no"
                  autoComplete="email"
                  inputMode="email"
                  required
                  aria-invalid={!!error && (!formState.email.trim() || !isValidEmail(formState.email))}
                />
              </label>

              <label className="field">
                <span>Henting eller levering</span>
                <select name="fulfillment" value={formState.fulfillment} onChange={handleFieldChange}>
                  <option>Henting selv</option>
                  <option>Levering ønskes</option>
                  <option>Usikker, ønsker anbefaling</option>
                </select>
              </label>
            </div>
          </section>
        ) : null}

        {step === 1 ? (
          <section className="form-step-panel">
            <div className="form-step-header">
              <h4>Hva gjelder det?</h4>
              <p>Fyll inn det du vet. Du trenger ikke ha alle detaljer klare.</p>
            </div>

            <div className="form-grid">
              <label className="field">
                <span>Dato</span>
                <input
                  name="date"
                  type="date"
                  min={minimumBookingDate}
                  value={formState.date}
                  onChange={handleFieldChange}
                  autoComplete="off"
                />
              </label>

              <label className="field">
                <span>Hjemmeadresse</span>
                <input
                  name="homeAddress"
                  type="text"
                  value={formState.homeAddress}
                  onChange={handleFieldChange}
                  placeholder="Skriv inn hjemmeadressen din"
                  autoComplete="street-address"
                  required
                  aria-invalid={!!error && !formState.homeAddress.trim()}
                />
              </label>

              <label className="field">
                <span>Antall gjester</span>
                <input
                  name="guestCount"
                  type="number"
                  min="1"
                  value={formState.guestCount}
                  onChange={handleFieldChange}
                  placeholder="For eksempel 40"
                  inputMode="numeric"
                />
              </label>

              <label className="field">
                <span className="field-label-row">
                  <span>Leveringsadresse</span>
                  <details className="field-tooltip">
                    <summary aria-label="Mer info om leveringsadresse">
                      <CircleHelp size={14} />
                    </summary>
                    <span className="field-tooltip-content">
                      Du trenger bare å skrive inn dette dersom du ønsker pris på levering til og fra destinasjonen.
                    </span>
                  </details>
                </span>
                <input
                  name="deliveryAddress"
                  type="text"
                  value={formState.deliveryAddress}
                  onChange={handleFieldChange}
                  placeholder="Skriv inn leveringsadressen hvis relevant"
                  autoComplete="street-address"
                />
              </label>
            </div>
          </section>
        ) : null}

        {step === 2 ? (
          <section className="form-step-panel">
            <div className="form-step-header form-step-header-split">
              <div>
                <h4>Hva ønsker du å leie?</h4>
                <p>Velg produkter og skriv gjerne litt mer hvis det er relevant.</p>
              </div>
              {hasEquipmentLines ? (
                <button type="button" className="ghost-button" onClick={addLine}>
                  <Plus size={16} />
                  Legg til produkt
                </button>
              ) : null}
            </div>

            {hasEquipmentLines ? (
              <div className="stack-sm">
                {formState.items.map((item, index) => (
                  <div className="line-item-card line-item-card-clean" key={`${item.productId}-${index}`}>
                    <label className="field">
                      <span>Produkt</span>
                      <select value={item.productId} onChange={(event) => updateLine(index, 'productId', event.target.value)}>
                        <option value="">-- Velg utstyr --</option>
                        {selectableProducts.map((product) => {
                          const isSelectable =
                            getRemainingLimitForLine(formState.items, index, product.id) > 0 || product.id === item.productId

                          return (
                            <option key={product.id} value={product.id} disabled={!isSelectable}>
                              {product.navn}
                            </option>
                          )
                        })}
                      </select>
                    </label>

                    <label className="field quantity-field">
                      <span>Antall</span>
                      <input
                        type="number"
                        min="1"
                        max={getRemainingLimitForLine(formState.items, index, item.productId)}
                        value={item.quantity}
                        inputMode="numeric"
                        onChange={(event) => updateLine(index, 'quantity', event.target.value)}
                        onBlur={() => normalizeLineQuantity(index)}
                      />
                    </label>

                    <button
                      type="button"
                      className="icon-button"
                      onClick={() => removeLine(index)}
                      aria-label="Fjern produktlinje"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="quote-form-empty-state" role="status" aria-live="polite">
                <p>Du trenger ikke velge utstyr med en gang. Send forespørselen likevel, så hjelper vi deg å lande riktig oppsett.</p>
                <button type="button" className="btn btn-secondary btn-small btn-inline quote-form-empty-action" onClick={addLine}>
                  Velg utstyr
                </button>
              </div>
            )}

            <label className="field field-full">
              <span>Tilleggsinfo</span>
              <textarea
                name="message"
                value={formState.message}
                onChange={handleFieldChange}
                rows="4"
                placeholder="Skriv gjerne litt mer om arrangementet, plassen eller annet vi bør vite."
              />
            </label>
          </section>
        ) : null}

        <div className="form-step-actions">
          <div className="form-step-actions-left">
            {step > 0 ? (
              <button type="button" className="btn btn-secondary" onClick={() => goToStep(step - 1)}>
                Tilbake
              </button>
            ) : null}
          </div>

          <div className="form-step-actions-right">
            {!isLastStep ? (
              <button type="button" className="btn btn-primary" onClick={() => goToStep(step + 1)}>
                Neste steg
              </button>
            ) : (
              <button type="submit" className="btn btn-primary" disabled={status === 'sending'} onClick={markSubmitIntent}>
                {submitLabel}
              </button>
            )}
          </div>
        </div>

        {status === 'sent' && !onSuccessfulSubmit ? (
          <p className="status-note" aria-live="polite">
            Forespørselen er sendt. Vi svarer så fort vi kan.
          </p>
        ) : null}

        {status === 'fallback' ? (
          <p className="status-note" aria-live="polite">
            Vi fikk ikke sendt automatisk akkurat nå. E-postutkastet ble åpnet, og teksten ligger også i utklippstavlen.
          </p>
        ) : null}

        {status === 'ready' ? (
          <p className="status-note" aria-live="polite">
            E-postutkastet er klart. Hvis det ikke åpnet seg, kan du sende manuelt til{' '}
            <a href={companyInfo.emailHref}>{companyInfo.email}</a> eller ringe {companyInfo.phoneDisplay}.
          </p>
        ) : null}
      </form>
    </div>
  )
}
