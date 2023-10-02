import { Container } from '@mui/material'
import React from 'react'
import google from '../images/google.png'
import fb from '../images/fb.png'
import Logo from '../images/logo.png'
import divider from '../images/divider.png'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div>
        <Container>
            <header style={{marginTop: '3rem'}}>
              <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', width: '7rem'}}>
              <img src={Logo} alt="logo" style={{height: '2rem', width: '2rem', marginRight: '.4rem'}} />
                <h3 style={{color: '#100A42', }}>HelpMeOut</h3>
              </Link>
              
            </header>
            <Container style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                <h3 style={{fontSize: '1.5rem', fontWeight: '700'}}>Login in Sign up</h3>
                <p style={{width: '17rem', fontSize: '.8rem', marginTop: '-1rem'}}>Join millons of other in sharing successful moves on <span style={{color: 'gray', fontWeight: '500'}}>HelpMeOut</span> </p>
            </Container>
            <Container style={{display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: '1.2rem'}}>
                <div style={{height: '2rem', width: '30%', border: '1px solid black', marginBottom: '1.4rem', borderRadius: '.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <img src={google} alt="" style={{height: '1rem', widt: '1rem'}} />
                    <p style={{fontSize: '.8rem', fontWeight: 700 , marginLeft: '1rem'}}>Continue with Google</p>
                </div>

                <div  style={{height: '2rem', width: '30%', border: '1px solid black', borderRadius: '.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <img src={fb} alt="" style={{height: '1rem', widt: '1rem'}} />
                    <p style={{fontSize: '.8rem', fontWeight: 700 , marginLeft: '1rem'}}>Continue with Facebook</p>
                </div>
                <img src={divider} alt="" style={{margin: '1.7rem 0'}} />

                <form action="submit" style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>

                    <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}} >
                        <label htmlFor="" style={{textAlign: 'left', marginLeft: '-19.8rem' , marginBottom: '.2rem', fontWeight: '700', fontSize: '.8rem'}} >Email</label>
                <input type="text" style={{fontSize: '.8rem',fontWeight: '700', padding: '0 1rem',height: '2rem', width: '20rem', border: '1px solid gray', borderRadius: '.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.7rem'}} placeholder='Enter your email address' />
                    </div>

                    <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                        <label htmlFor="" style={{textAlign: 'left', marginLeft: '-18rem' , marginBottom: '.2rem', fontWeight: '700', fontSize: '.8rem', }} >Password</label>
                <input type="text"  style={{fontSize: '.8rem',fontWeight: '700', padding: '0 1rem',height: '2rem', width: '20rem', border: '1px solid gray', borderRadius: '.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center'}} placeholder='Enter your your password'/>
                    </div>
                
                 <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                    <button style={{marginTop: '2rem', width: '22rem', height: '2.5rem', backgroundColor: '#100A42', color: 'white', borderRadius: '.5rem', fontWeight  : '700', fontSize: '.8rem', border: '1px solid gray', marginBottom: '2rem'}}>Sign Up</button>
             
                    </div>
                </form>
                </Container>
        </Container>
    </div>
  )
}

export default Login