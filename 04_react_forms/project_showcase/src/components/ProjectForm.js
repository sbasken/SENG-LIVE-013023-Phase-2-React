import React, { useState } from "react";

function ProjectForm({ onAddProject }) {

  const initialState = {
  name: "Koko's Happy Place",
  about: "Happy Place for Pups",
  phase: "2",
  link: "https://github.com/sbasken/SENG-LIVE-013023-Phase-2-React",
  image : "https://thehappypuppysite.com/wp-content/uploads/2017/12/pictures-of-huskies.jpg"
  }
  
  const [ formData, setFormData ] = useState(initialState)

  function handleChange(e) {
    const name = e.target.name
    const value = e.target.value
    console.log(e.target.value)
    setFormData(formData => {
      return {
        ...formData, 
      [name]: value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onAddProject(formData)
  }

  return (
    <section>
      <form onSubmit={handleSubmit} className="form" autoComplete="off">
        <h3>Add New Project</h3>

        <label htmlFor="name">Name</label>
        <input onChange={handleChange} type="text" id="name" name="name" value={formData.name} />

        <label htmlFor="about">About</label>
        <textarea onChange={handleChange} id="about" name="about" value={formData.about}/>

        <label htmlFor="phase">Phase</label>
        <select onChange={handleChange} name="phase" id="phase" value={formData.phase}>
          <option>Select One</option>
          <option value="1">Phase 1</option>
          <option value="2">Phase 2</option>
          <option value="3">Phase 3</option>
          <option value="4">Phase 4</option>
          <option value="5">Phase 5</option>
        </select>

        <label htmlFor="link">Project Homepage</label>
        <input onChange={handleChange} type="text" id="link" name="link" value={formData.link}/>

        <label htmlFor="image">Screenshot</label>
        <input onChange={handleChange} type="text" id="image" name="image" value={formData.image}/>

        <button type="submit">Add Project</button>
      </form>
    </section>
  );
};

export default ProjectForm;
