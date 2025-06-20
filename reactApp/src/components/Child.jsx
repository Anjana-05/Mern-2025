import React from 'react'

/*const Child = (props) => {
  return (
    <h3>Name: {props.name}</h3>
  )
}*/



const Child = ({name,phoneno,dept}) => {
  return (
    <>
      <div>
        <h3>Name: {name}</h3>
        <h3>Phone: {phoneno}</h3>
        <h3>dept: {dept}</h3>
      </div>
    </>
  )
}

export default Child