import { Rewind, Play, FastForward } from 'phosphor-react'
import { MusicControls } from './components/MusicControls'
import { MusicInfo } from './components/MusicInfo'
import { MusicProgress } from './components/MusicProgress'

export function App() {
  return (
    <main className="h-screen w-full flex items-center justify-center">
      <section className="w-[42rem] flex gap-8">
        <div className="w-72">
          <div className="w-full bg-martinique-900 py-12 px-9 rounded-lg flex flex-col gap-7">
            <MusicInfo />
            <MusicControls />
            <MusicProgress />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-8">
          <div className="w-full bg-martinique-900 p-9 rounded-lg flex flex-col gap-7">
            <MusicInfo direction={'row'} />
            <MusicControls />
            <MusicProgress />
          </div>
          <div className="w-full bg-martinique-900 p-9 rounded-lg flex flex-col gap-7">
            <MusicInfo direction={'row'} />
            <MusicControls />
          </div>
        </div>
      </section>
    </main>
  )
}
