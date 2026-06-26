export default function Divider({ variant = 'default' }) {
  if (variant === 'flame') {
    return (
      <div className="flex items-center justify-center py-8 px-6">
        <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, transparent, rgba(232,112,58,0.3))' }} />
        <div className="mx-4 text-lg" style={{ color: 'rgba(232,112,58,0.5)' }}>✦</div>
        <div className="h-px flex-1" style={{ background: 'linear-gradient(to left, transparent, rgba(232,112,58,0.3))' }} />
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center py-8 px-6">
      <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, transparent, rgba(201,169,110,0.2))' }} />
      <div className="mx-4 text-sm" style={{ color: 'rgba(201,169,110,0.3)' }}>◆</div>
      <div className="h-px flex-1" style={{ background: 'linear-gradient(to left, transparent, rgba(201,169,110,0.2))' }} />
    </div>
  )
}
