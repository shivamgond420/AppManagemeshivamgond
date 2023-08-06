import React from 'react'

const Nav = () => {
  return (
    <div>
      <nav className="bg-gray-800 px-4 py-2">
  <div className="flex items-center justify-between">
    <div className="text-white font-semibold">
     STOCK-MNAGMENT
    </div>
    <div className="flex items-center">
      <a href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
      <a href="/About" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
      <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Nav
