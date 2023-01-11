import { FastForward, Play, Rewind } from "phosphor-react";
import { ReactNode } from "react";

interface MusicControlButtonProps {
  children: ReactNode
}
function MusicControlButton({ children }: MusicControlButtonProps) {
  return (
    <button className="bg-transparent border-none text-smoky-100 hover:text-smoky-400">
      {children}
    </button>
  )
}

export function MusicControls() {
  return (
    <div className="flex justify-between w-full max-w-[13rem]">
      <MusicControlButton>
        <Rewind size={28} weight='fill' />
      </MusicControlButton>
      <MusicControlButton>
        <Play size={28} weight='fill' />
      </MusicControlButton>
      <MusicControlButton>
        <FastForward size={28} weight='fill' />
      </MusicControlButton>
    </div>
  )
}
