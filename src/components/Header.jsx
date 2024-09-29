import React from 'react'

const Header = () => {
  return (
    <div>
      <nav className='flex items-center justify-between w-full h-auto p-7 shadow-lg bg-slate-200'>
        <h1 className='text-2xl text-gray-800 font-mono font-bold tracking-widest'>Memory Card Game</h1>
        <a href="" className='text-xl text-gray-800 font-mono font-bold tracking-widest'>Help</a>
      </nav>
    </div>
  )
}

export default Header