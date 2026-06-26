import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Hero() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <section style={{ background: '#0D0D18' }}>
      {/* Primera vista: solo la foto, pantalla completa */}
      <div className="relative min-h-svh flex flex-col justify-center px-8 py-16">
        {/* Ambient glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse, rgba(232,112,58,0.07) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />

        {/* Foto ocupa toda la vista */}
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img
            src={`${import.meta.env.BASE_URL}nosotros.JPG`}
            alt="Nosotros"
            className="w-full rounded-2xl object-cover"
            style={{ aspectRatio: '3/4' }}
          />
        </motion.div>

      </div>

      {/* Scroll hint pegado al fondo de la primera vista */}
      <motion.div
        className="flex justify-center pb-6 -mt-12 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ color: 'rgba(201,169,110,0.35)' }}
        >
          ↓
        </motion.div>
      </motion.div>

      {/* Segunda vista: títulos aparecen al hacer scroll */}
      <div ref={ref} className="px-8 pb-16">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h1
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '56px',
              fontWeight: 300,
              color: '#F0E6D3',
              letterSpacing: '-0.02em',
              lineHeight: 1,
            }}
          >
            Yurani
          </h1>
          <p
            className="my-3"
            style={{
              fontFamily: 'Lato, sans-serif',
              fontSize: '11px',
              letterSpacing: '0.4em',
              color: 'rgba(201,169,110,0.5)',
              textTransform: 'uppercase',
            }}
          >
            &amp;
          </p>
          <h1
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '56px',
              fontWeight: 300,
              color: '#F0E6D3',
              letterSpacing: '-0.02em',
              lineHeight: 1,
            }}
          >
            Juan
          </h1>
          <motion.p
            className="mt-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              fontFamily: 'Lato, sans-serif',
              fontSize: '12px',
              color: 'rgba(240,230,211,0.3)',
              letterSpacing: '0.12em',
            }}
          >
            Pereira · Colombia · 2022
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
