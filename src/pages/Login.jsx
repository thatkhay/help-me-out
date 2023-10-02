import { Container } from '@mui/material'
import React from 'react'

import Logo from '../images/logo.png'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div>
        <Container>
            <header >
              <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none'}}>
              <img src={Logo} alt="logo" style={{height: '2rem', width: '2rem', marginRight: '.4rem'}} />
                <h3 style={{color: '#100A42', }}>HelpMeOut</h3>
              </Link>
              
            </header>
            <Container>
                <h3>Login in Sign up</h3>
                <p>join millons pf other in sharing successful moves on <span>HelpMeOut</span> </p>
            </Container>
        </Container>
    </div>
  )
}

export default Login