interface MusicInfoProps {
  direction?: 'row' | 'column' | null
}
export function MusicInfo({ direction = 'column' }: MusicInfoProps) {
  const containerClassNames = direction === 'column' ?
    'flex w-full flex-col gap-7' :
    'flex w-full flex-row gap-7 items-center'

  const imgClassNames = direction === 'column' ? 'w-full' : 'w-16'

  return (
    <div className={containerClassNames}>
      <img src="/assets/album-cover.png" className={imgClassNames} alt="" />
      <div className="flex flex-col">
        <strong className="text-2xl">Acorda Devinho</strong>
        <span className="text-lg text-smoky-400">Banda Rocketseat</span>
      </div>
    </div>
  )
}
