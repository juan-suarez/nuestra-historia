import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'
import FadeIn from '../components/FadeIn'

function EscapeButton() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [scale, setScale] = useState(1)

  const escape = () => {
    const maxX = 100
    const maxY = 40
    setPos({
      x: (Math.random() - 0.5) * maxX * 2,
      y: (Math.random() - 0.5) * maxY * 2,
    })
    setScale(Math.random() * 0.4 + 0.4)
  }

  return (
    <motion.button
      animate={{ x: pos.x, y: pos.y, scale }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onPointerEnter={escape}
      onTouchStart={escape}
      style={{
        background: 'transparent',
        border: '1px solid rgba(240,230,211,0.12)',
        fontFamily: 'Lato, sans-serif',
        fontSize: '13px',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: 'rgba(240,230,211,0.25)',
        cursor: 'default',
        userSelect: 'none',
        padding: '10px 22px',
        borderRadius: '100px',
      }}
    >
      No
    </motion.button>
  )
}

export default function Propuesta() {
  const [accepted, setAccepted] = useState(false)

  const handleYes = () => {
    setAccepted(true)

    const duration = 4000
    const end = Date.now() + duration

    const frame = () => {
      confetti({
        particleCount: 6,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#E8703A', '#C96B8A', '#C9A96E', '#3ABACC', '#F0E6D3'],
      })
      confetti({
        particleCount: 6,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#E8703A', '#C96B8A', '#C9A96E', '#3ABACC', '#F0E6D3'],
      })
      if (Date.now() < end) requestAnimationFrame(frame)
    }

    frame()
  }

  return (
    <section
      className="px-6 py-16 relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, var(--bg) 0%, #0D0D18 100%)',
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      {/* Ambient glows */}
      <div
        className="absolute top-1/4 left-0 w-48 h-48 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(232,112,58,0.1) 0%, transparent 70%)',
          filter: 'blur(30px)',
        }}
      />
      <div
        className="absolute bottom-1/4 right-0 w-48 h-48 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(201,107,138,0.1) 0%, transparent 70%)',
          filter: 'blur(30px)',
        }}
      />

      <div className="px-8 relative z-10">
        <AnimatePresence mode="wait">
          {!accepted ? (
            <motion.div key="proposal" exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}>
              <FadeIn delay={0.1}>
                <h2
                  className="text-center mb-8"
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '38px',
                    fontWeight: 300,
                    color: 'var(--text)',
                    lineHeight: 1.25,
                  }}
                >
                  Compañera
                  <br />
                  <em>de vida</em>
                </h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div
                  className="rounded-3xl p-6 mb-10"
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'Lato, sans-serif',
                      fontSize: '15px',
                      lineHeight: 1.9,
                      color: 'rgba(240,230,211,0.8)',
                    }}
                  >
                    Yurani, no quiero que empecemos de cero. Quiero que{' '}
                    <em
                      style={{
                        fontFamily: 'Cormorant Garamond',
                        fontSize: '17px',
                        color: 'var(--text)',
                      }}
                    >
                      continuemos el viaje.
                    </em>{' '}
                    Quiero que sigamos construyendo cada uno de los sueños que alguna vez hablamos.
                    Quiero que seas mi compañera de vida y la mujer que voy a amar por el resto de
                    mis días.
                  </p>
                  <p
                    className="mt-6 text-right"
                    style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: '16px',
                      fontStyle: 'italic',
                      color: 'rgba(201,169,110,0.7)',
                    }}
                  >
                    — Juan Manuel Suárez Aguirre
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <p
                  className="text-center mb-8"
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '26px',
                    fontStyle: 'italic',
                    fontWeight: 300,
                    color: 'var(--text)',
                  }}
                >
                  ¿Quieres seguir siendo el hogar al que siempre quiero volver?
                </p>
              </FadeIn>

              <FadeIn delay={0.5}>
                <div className="flex items-center justify-center gap-6">
                  {/* SÍ button */}
                  <motion.button
                    onClick={handleYes}
                    whileTap={{ scale: 0.96 }}
                    style={{
                      background: 'linear-gradient(135deg, #E8703A 0%, #C96B8A 100%)',
                      fontFamily: 'Lato, sans-serif',
                      fontSize: '13px',
                      fontWeight: 700,
                      color: '#fff',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      boxShadow: '0 0 24px rgba(232,112,58,0.3)',
                      border: 'none',
                      padding: '12px 32px',
                      borderRadius: '100px',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <motion.span
                      animate={{ opacity: [1, 0.7, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      Sí ✨
                    </motion.span>
                  </motion.button>

                  {/* No — huye */}
                  <EscapeButton />
                </div>
              </FadeIn>
            </motion.div>
          ) : (
            <motion.div
              key="accepted"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-center"
            >
              <motion.div
                className="text-6xl mb-8"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: 2 }}
              >
                ❤️
              </motion.div>
              <h2
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '36px',
                  fontWeight: 400,
                  color: 'var(--text)',
                  lineHeight: 1.3,
                  marginBottom: '24px',
                }}
              >
                Te amo para siempre,
                <br />
                <em>mi compañera de vida.</em>
              </h2>
              <p
                style={{
                  fontFamily: 'Lato, sans-serif',
                  fontSize: '15px',
                  lineHeight: 1.8,
                  color: 'rgba(240,230,211,0.7)',
                }}
              >
                Gracias por continuar este viaje conmigo.
              </p>
              <motion.p
                className="mt-6"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '28px',
                  color: 'var(--meet)',
                }}
              >
                ♡
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
