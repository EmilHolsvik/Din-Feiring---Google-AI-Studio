import { Fragment } from 'react'
import { Link } from 'react-router-dom'

function renderInlineLinks(links) {
  return links.map((link, index) => {
    let separator = null

    if (index > 0) {
      separator = index === links.length - 1 ? (links.length === 2 ? ' og ' : ', og ') : ', '
    }

    return (
      <Fragment key={link.to}>
        {separator}
        <Link to={link.to} className="faq-answer-link">
          {link.label}
        </Link>
      </Fragment>
    )
  })
}

export default function FaqAnswer({ item }) {
  return (
    <div className="faq-answer">
      <p>{item.answer}</p>
      {item.related?.links?.length ? (
        <p>
          {item.related.prefix}
          {renderInlineLinks(item.related.links)}
          {item.related.suffix ?? '.'}
        </p>
      ) : null}
    </div>
  )
}
