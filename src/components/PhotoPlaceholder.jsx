export default function PhotoPlaceholder({ label = 'Foto', aspect = 'square', className = '' }) {
  const aspectClass = {
    square: 'aspect-square',
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[4/3]',
    wide: 'aspect-[16/9]',
    tall: 'aspect-[2/3]',
  }[aspect] || 'aspect-square'

  return (
    <div
      className={`relative w-full ${aspectClass} rounded-2xl overflow-hidden ${className}`}
      style={{
        background: 'linear-gradient(135deg, #1A1A28 0%, #12121C 100%)',
        border: '1px dashed rgba(201, 169, 110, 0.25)',
      }}
    >
      {/* Subtle inner glow */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(201,169,110,0.08) 0%, transparent 70%)',
        }}
      />

      {/* Icon + label */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgba(201,169,110,0.4)"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
        <span
          style={{
            fontFamily: 'Lato, sans-serif',
            fontSize: '11px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'rgba(201,169,110,0.4)',
          }}
        >
          {label}
        </span>
      </div>
    </div>
  )
}
