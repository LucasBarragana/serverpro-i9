'use client'

import Desktop from "./Desktop"
import Mobile from "./Mobile"

export default function Navbar(){
  return(
    <div className="max-w-7xl h-auto">
      <Desktop />
      <Mobile />
    </div>
    
  )
}