import FadeIn from '../components/FadeIn'

export default function Nala() {
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
          Nuestra primera hija
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
          Nala
        </p>
      </FadeIn>

      <FadeIn delay={0.2}>
        <img
          src={`${import.meta.env.BASE_URL}nala.JPG`}
          alt="Nala"
          className="w-full rounded-2xl mb-8 object-cover"
          style={{ aspectRatio: '3/4' }}
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
          Tu amor infinito por los animales nos trajo a nuestra primera niña. Una bolita de pelos
          gris, asustadiza, seria, a veces un poco malgeniada, pero{' '}
          <em style={{ fontFamily: 'Cormorant Garamond', fontSize: '17px', color: 'var(--text)' }}>
            infinitamente amorosa.
          </em>
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
          Ella se convirtió en nuestro soporte emocional y en el primer pilar de la familia que
          empezamos a formar.
        </p>
      </FadeIn>

    </section>
  )
}
