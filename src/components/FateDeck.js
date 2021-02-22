import React from 'react'
import { Container, ListGroup } from 'react-bootstrap'

const FateDeck = () => {
  return (
    <Container>
      <h1>Using the Lucius Bot</h1>
      <p>
         A fate deck is automatically created for your use when you add Lucius to your Discord guild. Each user can add and control their respective control hands. You can use the commands shown below to control the deck and control hands.
      </p>
      
      <h3 className="mt-5">Commands</h3>
      

      <ListGroup className="w-75">

        <ListGroup.Item >
          <div className="d-flex justify-content-between">
            <h5>Flip</h5>
            <small>Fate Deck</small>
          </div>
          <p>
            Flips a number of cards from the fate deck. Omitting a number will flip one (1) card by default.
          </p>
          <small><code>!flip [number]</code></small>
        </ListGroup.Item>

        <ListGroup.Item >
          <div className="d-flex justify-content-between">
            <h5>Unflip</h5>
            <small>Fate Deck</small>
          </div>
          <p>
            Places a number of cards from the discard pile back unto the deck. Useful for when we flip a card too many but don't want to waste a Joker. Omitting a number will unflip one (1) card by default.
          </p>
          <small><code>!unflip [number]</code></small>
        </ListGroup.Item>


        <ListGroup.Item>
        <div className="d-flex justify-content-between">
          <h5>Shuffle</h5>
          <small>Control Hand | Fate Deck</small>
        </div>
        <p>
          This command shuffles either the fate deck or your control hand.
        </p>
        <small>control hand: <code>!shuffle</code>     |    fate deck: <code>!shuffle_fate</code></small>
      </ListGroup.Item>


        <ListGroup.Item >
          <div className="d-flex justify-content-between">
            <h5>Create</h5>
            <small>Control Hand</small>
          </div>
          <p>
            Creates a twist deck from the four suits given. Abbreviations are ok, so <code>!create t c r m</code> will  
            work just as well as <code>!create Tomes Crows Rams Masks</code>. The suits should be ordered in descending order.
          </p>
          <small><code>!create [defining suit] [ascendant suit] [center suit] [descendant suit]</code></small>
        </ListGroup.Item>


        <ListGroup.Item >
          <div className="d-flex justify-content-between">
            <h5>Cheat</h5>
            <small>Control Hand</small>
          </div>
          <p>
            Cheats in a card with the given value from your control hand.
          </p>
          <small><code>!cheat [value]</code></small>
        </ListGroup.Item>

        <ListGroup.Item >
          <div className="d-flex justify-content-between">
            <h5>Draw</h5>
            <small>Control Hand</small>
          </div>
          <p>
            Draws a number of cards from your twist deck to your control hand. Omitting a numberwill draw one (1) card by default.
          </p>
          <small><code>!draw [number]</code></small>
        </ListGroup.Item>

        <ListGroup.Item >
          <div className="d-flex justify-content-between">
            <h5>Undraw</h5>
            <small>Control Hand</small>
          </div>
          <p>
            Places a a number of cards back unto the twist deck from your control hand. For when you draw too many cards.
          </p>
          <small><code>!undraw [number]</code></small>
        </ListGroup.Item>

        <ListGroup.Item >
          <div className="d-flex justify-content-between">
            <h5>Discard</h5>
            <small>Control Hand</small>
          </div>
          <p>
            Discards a card with the given value from your control hand.
          </p>
          <small><code>!discard [value]</code></small>
        </ListGroup.Item>

        <ListGroup.Item >
          <div className="d-flex justify-content-between">
            <h5>Resurrect</h5>
            <small>Control Hand</small>
          </div>
          <p>
            places a number of cards from your graveyard back into your hand. For when you cheat a little too early.
          </p>
          <small><code>!res [number]</code></small>
        </ListGroup.Item>



      </ListGroup>

    </Container>
  )
}

export default FateDeck