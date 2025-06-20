import React from 'react'

const Login = () => {
  return (
    <>
    <h4>Login Form</h4>
        <div>
            <form>
                <label>Name: </label>
                <input id="name" type='text'></input><br></br><br></br>
                <label>Password: </label>
                <input id="password" type='password'></input>

                <button onSubmit="login()">Submit</button>
            </form>

    
        </div>
    </>
  )
}

export default Login