import React from 'react'
import '../Style/video.css'
function Video() {
  return (
    <div>
        <video autoPlay muted loop className='video_play'>
            <source src={require('../Image/main.mp4')} type="video/mp4"/>
        </video>
    </div>
  )
}

export default Video