import React from 'react'
import { Jumbotron,Container } from 'react-bootstrap'
const LandingPage = () => {
  return (
    <>
      <Jumbotron className = "bg-dark text-white d-flex text-center align-items-center" style={{height: "90vh"}}>
        <Container className="text-container">
          <h1>Challenge Your Destiny.</h1>
          <p>Add the Philethis Discord bot and other online tools and enjoy  playing Tabletop RPGs at a safe distance</p>
          <a className="btn btn-primary btn-hero" href="https://discord.com/oauth2/authorize?client_id=INSERT_CLIENT_ID_HERE&scope=bot&permissions=658496" target="_blank" rel='noreferrer'>Add Lucius to Discord</a>
        </Container>
      </Jumbotron>  
    </>
  )
}

export default LandingPage