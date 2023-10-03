import React from 'react'
import { Container } from '@mui/material'
import Logo from '../images/logo.png'
import heroSec from '../images/herosection.png'
import content from '../images/content.png'
import frame from '../images/fram.png'
import footer from '../images/footer.png'
import { Link } from 'react-router-dom'
const HomePage = () => {
  return (
    <div>
        <header style={{display: 'flex', alignItems: 'center', color: '#120B48', justifyContent:'space-around', boxShadow: '1px 3px 9px rgba(0, 0, 0, 0.2)', height: '5rem'}} >
         
                 <Link to="/" style={{textDecoration: 'none',display: 'flex', alignItems: 'center', color: '#120B48'}}>
<img src={Logo} alt="logo" style={{height: '2rem', width: '2rem', marginRight: '.4rem'}} />
<h3 style={{color: '#120B48'}}>HelpMeOut</h3>
                 </Link>

          
            <div style={{display: 'flex', alignItems: 'center', color: '#120B48', fontWeight: '700'}}>
                <Link to='/log-in' style={{textDecoration: 'none'}}> <p style={{marginRight: '2.5rem'}}>Features</p> </Link>
               
                <Link to='/log-in' style={{textDecoration: 'none'}}> <p>How it Works</p> </Link>
               
            </div>

            <Link to='/log-in' style={{textDecoration: 'none'}}> 
            <p style={{ color: '#120B48', fontWeight: '700'}}>Get Started</p>
            </Link>
            
        </header>
        <Container style={{marginTop: '2rem'}}>
            <img src={heroSec} alt="" style={{height: '100%', width: '100%'}} />
        </Container>
        <Container style={{padding: '2rem'}}>
            <div>
                <h3 style={{color: '#120B48', fontSize: '1.5rem'}}>Features</h3>
                <p style={{fontWeight: '200', color: '#616163', margin: '-1rem 0 2rem 0'}}>Key Highlight Of Our Extention</p>
            </div>
            <img src={content} alt="" style={{height: '100%', width: '100%'}} />
        </Container>

        <Container style={{marginTop: '2rem'}}>
                <h3 style={{color: '#120B48', fontSize: '1.5rem'}}>How It Works</h3>
                <img  style={{marginLeft: '-4rem',marginTop: '1rem'}} src={frame} alt="" />
        </Container>
        <div style={{display: 'flex', alignItems: "center" , margin: '5rem 0 0 -2rem'}}>
            <img src={footer} alt="" />
        </div>
    </div>
  )
}

export default HomePage