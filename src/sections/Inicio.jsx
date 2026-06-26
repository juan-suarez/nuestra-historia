import FadeIn from '../components/FadeIn'

export default function Inicio() {
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
            marginBottom: '20px',
          }}
        >
          Donde el fuego
          <br />
          <em>y el agua</em>
          <br />
          se cruzaron
        </h2>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div
          className="w-10 h-px mb-8"
          style={{ background: 'linear-gradient(to right, var(--fire), transparent)' }}
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
          Todo comenzó unos días antes de mi cumpleaños en el{' '}
          <span style={{ color: 'var(--gold)', fontWeight: 700 }}>2022</span>. Un{' '}
          <em style={{ fontFamily: 'Cormorant Garamond', fontSize: '17px', color: 'var(--text)' }}>
            match
          </em>{' '}
          en Tinder nos conectó cuando vivías en Perla del Sur y todavía tenías tus crespos hermosos.
        </p>
      </FadeIn>

      <FadeIn delay={0.4}>
        <p
          className="mt-10"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '23px',
            fontStyle: 'italic',
            fontWeight: 300,
            color: 'var(--text)',
            lineHeight: 1.55,
          }}
        >
          "No sabía que estaba conociendo a la mujer de mi vida."
        </p>
      </FadeIn>
    </section>
  )
}
