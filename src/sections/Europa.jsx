import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import FadeIn from '../components/FadeIn'

const BASE = import.meta.env.BASE_URL

const slides = [
  { label: 'España', src: `${BASE}espana.JPG` },
  { label: 'Francia', src: `${BASE}francia.JPG` },
  { label: 'Italia · Roma', src: `${BASE}italia.PNG` },
  { label: 'Fontana di Trevi', src: `${BASE}FontanaDeTrevi.PNG` },
]

export default function Europa() {
  const [current, setCurrent] = useState(0)
  const dragStart = useRef(0)

  const handleDragEnd = (_, info) => {
    const threshold = 50
    if (info.offset.x < -threshold && current < slides.length - 1) {
      setCurrent(c => c + 1)
    } else if (info.offset.x > threshold && current > 0) {
      setCurrent(c => c - 1)
    }
  }

  return (
    <section className="px-8 py-16" style={{ background: 'var(--surface)' }}>
      <FadeIn delay={0.1}>
        <h2
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '36px',
            fontWeight: 400,
            color: 'var(--text)',
            lineHeight: 1.2,
            marginBottom: '4px',
          }}
        >
          Promesa en Europa
        </h2>
        <p
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '22px',
            fontStyle: 'italic',
            fontWeight: 300,
            color: 'rgba(240,230,211,0.45)',
            marginBottom: '28px',
          }}
        >
          El agua de los deseos
        </p>
      </FadeIn>

      {/* Carrusel deslizable */}
      <FadeIn delay={0.2}>
        <div className="mb-8 overflow-hidden rounded-3xl" style={{ touchAction: 'pan-y' }}>
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={handleDragEnd}
            style={{ cursor: 'grab' }}
            whileTap={{ cursor: 'grabbing' }}
          >
            <img
              src={slides[current].src}
              alt={slides[current].label}
              className="w-full object-cover select-none"
              style={{ aspectRatio: '3/4', pointerEvents: 'none' }}
            />
          </motion.div>
        </div>
        <div className="flex justify-center gap-2 mb-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === current ? '20px' : '6px',
                height: '6px',
                background: i === current ? 'var(--gold)' : 'rgba(255,255,255,0.12)',
              }}
            />
          ))}
        </div>
        <p
          className="text-center"
          style={{
            fontFamily: 'Lato',
            fontSize: '11px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'rgba(240,230,211,0.3)',
          }}
        >
          {slides[current].label}
        </p>
      </FadeIn>

      <FadeIn delay={0.3}>
        <p
          style={{
            fontFamily: 'Lato, sans-serif',
            fontSize: '15px',
            lineHeight: 1.9,
            color: 'rgba(240,230,211,0.72)',
          }}
        >
          Cumplimos uno de nuestros grandes sueños juntos: Europa. Caminar por España, Francia e
          Italia contigo fue ver los lugares más hermosos del mundo al lado de la persona más
          especial del universo.
        </p>
      </FadeIn>

      <FadeIn delay={0.4}>
        <div className="mt-10 pl-5 pr-2" style={{ borderLeft: '2px solid var(--fire)' }}>
          <p
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '21px',
              fontStyle: 'italic',
              fontWeight: 300,
              color: 'var(--text)',
              lineHeight: 1.6,
            }}
          >
            "Las parejas que beben de la Fontana di Trevi estarán juntas para toda la vida."
          </p>
          <p
            className="mt-3"
            style={{
              fontFamily: 'Lato',
              fontSize: '13px',
              color: 'rgba(240,230,211,0.4)',
            }}
          >
            Esa promesa la sellé en tu cuello con aquel collar de Pandora.
          </p>
        </div>
      </FadeIn>
    </section>
  )
}
