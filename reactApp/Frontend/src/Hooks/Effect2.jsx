import React, {useState, useEffect } from 'react'

const Effect2 = () => {
    const [user,setUser] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => (res.json()))
        .then((data) => (setUser(data)))
    })


  return (
    <div>
        <ol>
            
            {user.map((data) => (
              <> 
               <p>Id: {data.id} , Name: {data.name}</p> 
              </>
            ))}  
            
        </ol>    
    </div>
  )
}

export default Effect2