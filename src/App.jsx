import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import snivyImg from './assets/snivy.jpg'
import './App.css'

function App() {
  return (
    <>
      <PokeCard
        name="Snivy"
        hp={60}
        atk={45}
        pokemonImage={snivyImg}
        moveOne="Sleep"
        moveOneDesc="Make the opponent pokemon sleep"
        moveTwo="Tail Whip"
      />
    </>
  )
}



function PokeCard({ name = "Name", hp = "10", atk = "10", pokemonImage = snivyImg, moveOne = "Skill Name", moveOneDesc = "Write here the description of the move", moveTwo = "Skill Name", moveTwoDesc = "Write here the description of the move" }) {
  return (
    <>
      <div class="poke-card">
        <div className="inner-card">
          <div className="card-header">
            <p>{name}</p>
            <p id="hp-card"><span style={{ fontSize: 14 }}>HP</span>{hp}</p>
          </div>
          {/* <img src={pokemonImage} width={250} /> */}

          <div className="skills">
            <div className="skill-set">
              <div className="skill-header">
                <p className='skill-name'>{moveOne}</p>
                <p>{atk}</p>
              <p id="skill-desc">{moveOneDesc}</p>
              </div>

            </div>

            <div className="skill-set">
              <div className="skill-header">
                <p className='skill-name'>{moveTwo}</p>0
                <p>{atk}</p>
              </div>
              <p id='skill2-desc'>{moveTwoDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
