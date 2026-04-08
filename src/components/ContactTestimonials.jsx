import { BadgeCheck } from 'lucide-react'
import FadeIn from './FadeIn'
import Eyebrow from './Eyebrow'
import { contactTestimonials } from '../data/produkter'

export default function ContactTestimonials() {
  return (
    <FadeIn>
      <section className="section section-alt contact-testimonials-section" aria-labelledby="contact-testimonials-title">
        <div className="container">
          <div className="section-header section-header-centered contact-testimonials-header">
            <Eyebrow icon={BadgeCheck} className="badge badge-spaced">
              Referanser
            </Eyebrow>
            <h2 id="contact-testimonials-title" className="section-title">
              Dette sier våre
              <br /> tidligere kunder
            </h2>
            <p className="section-subtitle section-subtitle-centered">
              Vi har levert utstyr til over 200 kunder siden 2022. Her er noen tilbakemeldinger fra folk vi har fått
              hjelpe.
            </p>
          </div>

          <div className="contact-testimonials-marquee">
            <div className="contact-testimonials-track">
              {[0, 1].map((groupIndex) => (
                <div key={groupIndex} className="contact-testimonials-group" aria-hidden={groupIndex === 1}>
                  {contactTestimonials.map((testimonial) => (
                    <article key={`${groupIndex}-${testimonial.name}`} className="contact-testimonial-card">
                      <p className="contact-testimonial-quote">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                      <div className="contact-testimonial-meta">
                        <strong>{testimonial.name}</strong>
                        <span>{testimonial.details}</span>
                      </div>
                    </article>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </FadeIn>
  )
}
