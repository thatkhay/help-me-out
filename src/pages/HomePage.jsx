import React from 'react'
import Logo from '../images/logo.png'
const HomePage = () => {
  return (
    <div>
        <header>
            <div style={{display: 'flex', alignItems: 'center'}}>
<img src={Logo} alt="logo" />
<h3>HelpMeOut</h3>
            </div>
        </header>
    </div>
  )
}

export default HomePage