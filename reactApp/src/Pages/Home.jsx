import React from 'react'
import About from './About'
import image from '../assets/instagram-img.png'

const Home = ({days,users}) => {
  return (
    <>
    <div>
      <About days={days} users={users}/>

      <img src={image} alt="" />
    </div>
    </>
  )
}

export default Home