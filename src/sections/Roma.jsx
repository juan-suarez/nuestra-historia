import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import FadeIn from '../components/FadeIn'

export default function Roma() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

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
          Un tornado llamado
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
          Roma
        </p>
      </FadeIn>

      {/* Dos fotos lado a lado — slide in */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: 24 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="grid grid-cols-2 gap-3 mb-8"
      >
        <img src="/roma.JPG" alt="Roma" className="w-full rounded-2xl object-cover" style={{ aspectRatio: '3/4' }} />
        <img src="/RomaYNala.JPG" alt="Nala y Roma" className="w-full rounded-2xl object-cover" style={{ aspectRatio: '3/4' }} />
      </motion.div>

      <FadeIn delay={0.3}>
        <p
          style={{
            fontFamily: 'Lato, sans-serif',
            fontSize: '15px',
            lineHeight: 1.9,
            color: 'rgba(240,230,211,0.72)',
          }}
        >
          Recuerdo esa bolita de pelos inquieta que llego a nuestro hogar, hasta con la arena jugaba.
          y pensabamos que nala no se iba a acostumbrar, pero ahora son las hermanas que mas se quieren
          en este mundo.
        </p>
      </FadeIn>

      <FadeIn delay={0.4}>
        <p
          className="mt-10"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '22px',
            fontStyle: 'italic',
            fontWeight: 300,
            color: 'var(--text)',
            lineHeight: 1.5,
          }}
        >
          "un Hogar con el doble de amor."
        </p>
      </FadeIn>
    </section>
  )
}
