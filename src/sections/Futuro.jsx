import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import FadeIn from '../components/FadeIn'

const dreams = [
  {
    emoji: '🏍️',
    title: 'Nuestra NMAX & nuestro carro',
    desc: 'La moto para pueblear y el carro para viajar. Los dos ya son realidad.',
    achieved: true,
    accent: 'var(--gold)',
    glow: 'rgba(201,169,110,0.12)',
    border: 'rgba(201,169,110,0.2)',
  },
  {
    emoji: '🏡',
    title: 'Nuestra casita',
    desc: 'Ya tenemos los planos, listos para el primer ladrillo.',
    achieved: false,
    accent: 'var(--fire)',
    glow: 'rgba(232,112,58,0.08)',
    border: 'rgba(232,112,58,0.15)',
  },
  {
    emoji: '🌍',
    title: 'Suiza, México & Bali',
    desc: 'Explorar el mundo: los Alpes, las playas de México y ver elefantes juntos en Bali.',
    achieved: false,
    accent: 'var(--water)',
    glow: 'rgba(58,186,204,0.08)',
    border: 'rgba(58,186,204,0.15)',
  },
  {
    emoji: '👶',
    title: 'Nuestros hijos',
    desc: 'Seguir jugando a elegir sus nombres y algún día verlos crecer.',
    achieved: false,
    accent: 'var(--meet)',
    glow: 'rgba(201,107,138,0.08)',
    border: 'rgba(201,107,138,0.15)',
  },
  {
    emoji: '💍',
    title: 'Caminar hacia el altar',
    desc: 'Casarnos y amarnos para siempre.',
    achieved: false,
    accent: 'var(--meet)',
    glow: 'rgba(201,107,138,0.1)',
    border: 'rgba(201,107,138,0.2)',
  },
]

function DreamCard({ dream, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="flex items-center gap-5 rounded-2xl px-5 py-5 relative overflow-hidden"
      style={{
        background: dream.glow,
        border: `1px solid ${dream.border}`,
      }}
    >
      {/* Icon */}
      <div
        className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center text-3xl"
        style={{
          background: 'rgba(255,255,255,0.04)',
          border: `1px solid ${dream.border}`,
        }}
      >
        {dream.emoji}
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1 flex-wrap">
          <h3
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '19px',
              fontWeight: 500,
              color: 'var(--text)',
              lineHeight: 1.2,
            }}
          >
            {dream.title}
          </h3>
          {dream.achieved && (
            <span
              style={{
                fontSize: '10px',
                fontFamily: 'Lato',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                background: 'rgba(201,169,110,0.1)',
                border: '1px solid rgba(201,169,110,0.25)',
                padding: '2px 7px',
                borderRadius: '100px',
                whiteSpace: 'nowrap',
              }}
            >
              ✓ Logrado
            </span>
          )}
        </div>
        <p
          style={{
            fontFamily: 'Lato, sans-serif',
            fontSize: '13px',
            lineHeight: 1.6,
            color: 'rgba(240,230,211,0.48)',
          }}
        >
          {dream.desc}
        </p>
      </div>
    </motion.div>
  )
}

export default function Futuro() {
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
          Nuestro futuro
        </h2>
        <p
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '22px',
            fontStyle: 'italic',
            fontWeight: 300,
            color: 'rgba(240,230,211,0.45)',
            marginBottom: '32px',
          }}
        >
          Un mosaico de sueños
        </p>
      </FadeIn>

      <div className="flex flex-col gap-3">
        {dreams.map((dream, i) => (
          <DreamCard key={dream.title} dream={dream} index={i} />
        ))}
      </div>
    </section>
  )
}
