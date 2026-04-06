import Eyebrow from './Eyebrow'

export default function SectionIntro({
  eyebrow,
  eyebrowIcon,
  title,
  description,
  align = 'left',
  className = '',
}) {
  const headerClass = [
    'section-intro',
    align === 'center' ? 'section-intro-center' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={headerClass}>
      {eyebrow ? <Eyebrow icon={eyebrowIcon}>{eyebrow}</Eyebrow> : null}
      <h2 className="section-title">{title}</h2>
      {description ? <p className="section-copy">{description}</p> : null}
    </div>
  )
}

