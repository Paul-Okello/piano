import React from 'react'
import { FunctionComponent } from 'react'
import "./style.css"

const Footer: FunctionComponent = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <a href="https://fullstack.io">Fullstack.io</a>
      <br />
      {currentYear}
    </footer>
   
  )
}

export default Footer
