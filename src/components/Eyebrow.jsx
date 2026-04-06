export default function Eyebrow({
  as: Component = 'span',
  icon: Icon,
  className = '',
  children,
  ...props
}) {
  const eyebrowClassName = className ? className : 'eyebrow'

  return (
    <Component className={eyebrowClassName} {...props}>
      {Icon ? <Icon size={15} strokeWidth={1.9} aria-hidden="true" /> : null}
      <span>{children}</span>
    </Component>
  )
}
