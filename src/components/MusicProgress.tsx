export function MusicProgress() {
  return (
    <div className='flex flex-col gap-3'>
      <div className='w-full h-1 bg-smoky-600 rounded-md'>
        <span className='block h-1 w-[86%] bg-smoky-100 rounded-md'></span>
      </div>
      <div className='flex justify-between text-sm text-smoky-400'>
        <span>03:20</span>
        <span>00:12</span>
      </div>
    </div>
  )
}
