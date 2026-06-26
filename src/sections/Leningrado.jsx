import FadeIn from '../components/FadeIn'

export default function Leningrado() {
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
          Leningrado
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
          y el comienzo de todo
        </p>
      </FadeIn>

      <FadeIn delay={0.2}>
        <img
          src={`${import.meta.env.BASE_URL}finlandia.JPG`}
          alt="Filandia"
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
          Nos mudamos mentalmente a Leningrado. Fue el momento de enamoramiento más intenso de mi
          vida. Mantuvimos todo el día juntos, devorando series, películas y construyendo un mundo
          solo para los dos.
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
          Fue allí, después de un viaje familiar a Filandia donde me decidí por completo, que en
          Leningrado te propuse por primera vez que fueras mi novia.
        </p>
      </FadeIn>

      <FadeIn delay={0.5}>
        <div
          className="mt-10 pl-5 pr-2"
          style={{ borderLeft: '2px solid var(--fire)' }}
        >
          <p
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '21px',
              fontStyle: 'italic',
              fontWeight: 300,
              color: 'var(--text)',
              lineHeight: 1.5,
            }}
          >
            El enamoramiento más intenso de mi vida.
          </p>
        </div>
      </FadeIn>
    </section>
  )
}
