import React from 'react'

const MagicButton = ({title, icon, position, HandleClick, otherClasses}:{title:string, icon:React.ReactNode, position:string, HandleClick?:()=>void; otherClasses?: string}) => {
  return (
    <button className="bg-slate-800 w-full no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block" onClick={HandleClick}>
    <span className="absolute inset-0 overflow-hidden rounded-full">
      <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </span>
    <div className={`relative flex items-center space-x-2 z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ${otherClasses}`}>
      {position === 'left' && <span className="px-0">{icon}</span>}
      <span>{title}</span>
      {position === 'right' && <span className="px-0">{icon}</span>}
    </div>
  </button>
  
  )
}

export default MagicButton
