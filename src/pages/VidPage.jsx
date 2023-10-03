import { Container } from '@mui/material'
import React from 'react'
import nav from '../images/nav.png'
import details from '../images/details.png'

const VidPage = () => {
  return (
    <div>
        <Container style={{display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem 0'}}>
            <img src={nav} alt="" />

        </Container>
        <Container style={{display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem 4rem'}}>
            <Container style={{border: '1px solid GrayText', borderRadius: '.6rem', backgroundColor: '#E7E7ED', height: '24rem'}}>
           
        </Container>
        
        </Container>
        <Container  style={{display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem 0'}}>
          <img src={details} alt="" />
        </Container>
    </div>
  )
}

export default VidPage