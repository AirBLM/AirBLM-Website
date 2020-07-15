import React from 'react'
import background from '../assets/image.jpg'

// home page content 


const Welcome = () => {
  return(
     <div>
     <img src={background} alt='' className='img'/>
      <div className='text'>
        <div class="fade-in">
          <h1>AirBLM </h1>
        </div>
        <p>Your new source of BLM information.</p>
          <p>Click on resources to get started. </p>
      </div>
      </div>
  )
}

export default Welcome;