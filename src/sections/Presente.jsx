import FadeIn from '../components/FadeIn'

export default function Presente() {
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
          El presente
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
          Volver a latir
        </p>
      </FadeIn>

      <FadeIn delay={0.2}>
        <img
          src={`${import.meta.env.BASE_URL}presente.JPG`}
          alt="Nosotros hoy"
          className="w-full rounded-2xl mb-8 object-cover"
          style={{ aspectRatio: '4/3' }}
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
          Hoy, tras haber caminado caminos separados por un tiempo, estos meses a tu lado me han
          devuelto la vida. He vuelto a sentir exactamente la misma intensidad, el mismo brillo y
          los mismos nervios que sentía en Leningrado.
        </p>
      </FadeIn>

      <FadeIn delay={0.4}>
        <p
          className="mt-5"
          style={{
            fontFamily: 'Lato, sans-serif',
            fontSize: '15px',
            lineHeight: 1.9,
            color: 'rgba(240,230,211,0.72)',
          }}
        >
          Me siento como un niño enamorado y, lo mejor de todo,{' '}
          <em style={{ fontFamily: 'Cormorant Garamond', fontSize: '17px', color: 'var(--text)' }}>
            me siento correspondido.
          </em>
        </p>
      </FadeIn>

      <FadeIn delay={0.5}>
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
          "Sentir tu confianza, verte cómoda y ver cómo en nuestros mejores momentos buscas cobijo
          en mi amor es mi lugar seguro en el mundo."
        </p>
      </FadeIn>
    </section>
  )
}
