import React from 'react'
import Wvideo from '../video/amro.mp4'
import './wavy.css'

export default function wavy() {
  return (


    <section className='main-wavy'>
    <video className="wavy" autoPlay muted loop>
        <source src={Wvideo} type="video/mp4" />
        Your browser does not support the video tag.
    </video>
    <svg className='waves' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#151515" fill-opacity="1" d="M0,96L26.7,122.7C53.3,149,107,203,160,208C213.3,213,267,171,320,149.3C373.3,128,427,128,480,149.3C533.3,171,587,213,640,240C693.3,267,747,277,800,250.7C853.3,224,907,160,960,128C1013.3,96,1067,96,1120,133.3C1173.3,171,1227,245,1280,266.7C1333.3,288,1387,256,1413,240L1440,224L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>

</section>




  )
}
