import React, { useState } from 'react'
import './Signup.css'
const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      email: "",
      password:""
    })
  }

  const handleChange = (e) => {
    setFormData((prev) => ({...prev,[e.target.name]:e.target.value}))
  }
  return (
    <>
        <div className='formContainer'>
            <form onSubmit={handleSubmit}>
              <h3>Signup</h3>
                <label>Email: </label>
                <input id="email" type='text' name='email' value={formData.email} onChange={handleChange}></input>
                <label>Password: </label>
                <input id="text" type='password' name='password' value={formData.password} onChange={handleChange}></input>

                <button>Submit</button>
            </form>

    
        </div>
    </>
  )
}

export default Signup