import FadeIn from '../components/FadeIn'

export default function Navidad() {
  return (
    <section className="px-8 py-16" style={{ background: 'var(--bg)' }}>
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
          Parte de tu mundo
        </h2>
        <p
          style={{
            fontFamily: 'Lato, sans-serif',
            fontSize: '11px',
            letterSpacing: '0.22em',
            color: 'rgba(201,169,110,0.45)',
            textTransform: 'uppercase',
            marginBottom: '28px',
          }}
        >
          24 de Diciembre · 2024
        </p>
      </FadeIn>

      <FadeIn delay={0.2}>
        <video
          src="/familia.MOV"
          className="w-full rounded-2xl mb-8"
          controls
          playsInline
          style={{ aspectRatio: '16/9' }}
        />
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
          Fue la primera vez en mi vida que pasaba una Navidad lejos de mi propia familia. Pero
          estando al lado de la tuya me sentí{' '}
          <em style={{ fontFamily: 'Cormorant Garamond', fontSize: '17px', color: 'var(--text)' }}>
            completamente en casa.
          </em>
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
            lineHeight: 1.55,
          }}
        >
          "Me hicieron sentir uno más de ellos, senti que ahora tenia una nueva familia."
        </p>
      </FadeIn>
    </section>
  )
}
