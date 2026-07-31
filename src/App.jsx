import './App.css'
import illustration from './assets/snivy.jpeg'
import normal_energy from './assets/leaf-energy.png'

function App() {
  return (
    <>
      <div className="outer-card">
        <div className="inner-card">
          <Card_Header
            pokemon_name="Snivy"
            hp="50"
          />
          <div className="card-skill">
            <Skill
              name="Leaf Slash"
              description="Deal 20 damage. During your next turn, this Pokémon' s attacks do 10 more damage to the opponent's Active Pokémon."
            />
            <Skill
              name="Nature's Growth"
              description="Search your deck for a Grass Energy card and attach it to this Pokémon. Then shuffle your deck. If you can't attach an Energy this way, heal 20 HP from this Pokémon instead."
            />
          </div>
        </div>
      </div>


    </>
  )
}

function Card_Header({ pokemon_name = "Pokemon Name", hp = "0" }) {
  return (
    <>
      <div className="card-header">
        <div className="left">
          <span style={{ fontSize: "20px" }}>Basic</span>
          <span style={{ fontWeight: "Bold", fontSize: "30px" }}>{pokemon_name}</span>
        </div>
        <div className="right">
          <span style={{ fontSize: "15px" }}>HP</span>
          <span style={{ fontSize: "30px", fontWeight: "bold" }}>{hp}</span>
        </div>
      </div>
    </>
  )
}

function Skill({ name = "Skill Name", description = "Enter the description of the skill here" }) {
  return (
    <>
      <div className="skill">
        <div className="skill-header">
          <div className="energy">
            <img src={normal_energy} alt="logo" style={{ width: "23px" }} />
          </div>
          <div className="skill-name">
            <span style={{ fontSize: "25px", fontWeight: "bold" }}>{name}</span>
          </div>
        </div>
        <div className="skill-description">
          <span>{description}</span>
        </div>
      </div>
    </>
  )
}

export default App