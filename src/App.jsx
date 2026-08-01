import './App.css'
import illustration from './assets/snivy.jpeg'
import illustration2 from './assets/snivy.png'
import normal_energy from './assets/leaf-energy.png'
import { useState } from 'react'


function App() {

  const [form, setForm] = useState({
    pokemon_name: "",
    hp: 0,
    attack_one_title: "",
    attack_one_desc: "",
    attack_two_title: "",
    attack_two_desc: "",
  })

  const [submittedForm, setSubmittedForm] = useState({
    pokemon_name: "Pokemon Name",
    hp: 0,
    attack_one_title: "Attack One",
    attack_one_desc: "Attack One Description",
    attack_two_title: "Attack Two",
    attack_two_desc: "Attack Two Description",
    image: illustration2
  })

  const [imagePreview, setImagePreview] = useState(null)

  function handleForm(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  function handleImage(event) {
    const file = event.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setImagePreview(fileUrl)
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmittedForm({
      ...form,
      image: imagePreview

    })
  }

  return (
    <>
      <div className="container">
        <div className="form-panel">
          <div className="form-container">
            <h1 style={{ marginBottom: "30px" }}>Create Pokemon</h1>
            <form onSubmit={handleSubmit}>
              <input placeholder="Name" type="text" name="pokemon_name" value={form.pokemon_name} onChange={handleForm} />
              <input placeholder="Hp" type="number" name="hp" value={form.hp} onChange={handleForm} />
              <input placeholder="Attack 1" type="text" name="attack_one_title" value={form.attack_one_title} onChange={handleForm} />
              <input placeholder="Attack Desc" type="text" name="attack_one_desc" value={form.attack_one_desc} onChange={handleForm} />
              <input placeholder="Attack 2" type="text" name="attack_two_title" value={form.attack_two_title} onChange={handleForm} />
              <input placeholder="Attack Desc" type="text" name="attack_two_desc" value={form.attack_two_desc} onChange={handleForm} />
              <input type="file" onChange={handleImage} />
              {/* <img src={submittedForm.image} alt="Image" /> */}
              <button type="submit">Create Pokemon</button>
            </form>
          </div>
        </div>
        <div className="card-panel">
          <div className="outer-card">
            <div className="inner-card" style={{ backgroundImage: `url(${submittedForm.image})` }}>
              <Card_Header
                pokemon_name={submittedForm.pokemon_name}
                hp={submittedForm.hp}
              />
              <div className="card-skill">
                <Skill
                  name={submittedForm.attack_one_title}
                  description={submittedForm.attack_one_desc}
                />
                <Skill
                  name={submittedForm.attack_two_title}
                  description={submittedForm.attack_two_desc}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function Card_Header({ pokemon_name, hp }) {
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

function Skill({ name, description }) {
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