import { useState, useEffect } from "react";

function App() {
    const [form, setForm] = useState({
        name: "",
        age: 0,
        email: "",
    });
    const [imagePreview, setImagePreview] = useState(null);
    const [submittedForm, setSubmittedForm] = useState({
        name: "",
        age: 0,
        email: "",
        image: null,
    });
    function handleForm(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    }

    function handleImage(event) {
        const file = event.target.files[0];
        if (file) {
            const fileUrl = URL.createObjectURL(file);
            setImagePreview(fileUrl);
        }
    }

    function handleSubmit(event) {
        event.preventDefault();

        setSubmittedForm({
            ...form,
            image: imagePreview,
        });
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <p>Name: {submittedForm.name}</p>
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleForm}
                />
                <p>Age: {submittedForm.age}</p>
                <input
                    type="number"
                    name="age"
                    value={form.age}
                    onChange={handleForm}
                />
                <p>Email: {submittedForm.email}</p>
                <input
                    type="text"
                    name="email"
                    value={form.email}
                    onChange={handleForm}
                />
                <div>
                    <input type="file" onChange={handleImage} />
                </div>
                <img src={submittedForm.image} alt="Image" />
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </>
    );
}

// function Component({ submittedForm }) {
//   return (
//     <>
//       <h1>FirstName: {submittedForm.firstName}</h1>
//       <h1>LastName: {submittedForm.lastName}</h1>
//       <h1>Email: {submittedForm.email}</h1>
//       <img src={submittedForm.image} alt="Image" />
//     </>
//   );
// }

export default App;
