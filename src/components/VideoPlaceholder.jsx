export default function VideoPlaceholder({ label = 'Video', className = '' }) {
  return (
    <div
      className={`relative w-full aspect-video rounded-2xl overflow-hidden ${className}`}
      style={{
        background: 'linear-gradient(135deg, #1A1A28 0%, #12121C 100%)',
        border: '1px dashed rgba(201, 169, 110, 0.25)',
      }}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(201,169,110,0.08) 0%, transparent 70%)',
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgba(201,169,110,0.4)"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="5 3 19 12 5 21 5 3" />
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
