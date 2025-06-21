import React from 'react'

const About = ({days,users}) => {
  return (
    <>
    <div>
      <ol>
        {days.map((day) => (<li>{day}</li>))}
      </ol>
    </div>

    <div>
      <h3>{users.username}</h3>
      <h3>{users.password}</h3>
    </div>
    </>
  )
}

export default About