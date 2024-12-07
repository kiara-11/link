import React from 'react'
import "./Header.css"
import Home  from "@/components/Home"
import About from "@/components/About"
import Dashboard  from "@/components/Dashboard"


const Header = () => {
  return (
    <div className='conten' >
        <Home/>
        <About/>
        <Dashboard/>
    </div>
  )
}

export default Header