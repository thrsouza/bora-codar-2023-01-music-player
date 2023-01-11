import { HTMLAttributes, ReactNode } from 'react'
import { MusicControls } from './components/MusicControls'
import { MusicInfo } from './components/MusicInfo'
import { MusicProgress } from './components/MusicProgress'

interface ContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}
export function Content({ children, className }: ContentProps) {
  return (
    <div className={`bg-martinique-900 p-9 rounded-lg flex flex-col items-center justify-around gap-7 ${className}`}>
      {children}
    </div>
  )
}

export function App() {
  return (
    <main className="h-screen w-full flex items-center justify-center">
      <section className="w-[42rem] h-[31.125rem] grid grid-cols-9 grid-rows-7 gap-8">
        <Content className="col-start-1 col-span-4 row-start-1 row-span-full">
          <MusicInfo />
          <MusicControls />
          <MusicProgress />
        </Content>

        <Content className="col-start-5 col-span-5 row-span-4">
          <MusicInfo direction={'row'} />
          <MusicControls />
          <MusicProgress />
        </Content>

        <Content className="col-start-5 col-span-5 row-start-5 row-span-3">
          <MusicInfo direction={'row'} />
          <MusicControls />
        </Content>
      </section>
    </main>
  )
}
