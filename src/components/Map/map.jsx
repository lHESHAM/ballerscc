import React from 'react'
import './map.css'

export default function map() {
  return (
    <div className='map-container'>
    <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3470.6760424335766!2d35.01203197504259!3d29.554927241598747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15006f234a2970ff%3A0x8f255ba0ac060f26!2z2YXZhNi52Kgg2YXYr9ix2LPYqSDYp9mE2KvYp9mF2YbYqSDYp9mE2KPYs9in2LPZitipINmE2YTYqNmG2YrZhg!5e0!3m2!1sen!2sjo!4v1703583030991!5m2!1sen!2sjo"     
        title='map'
        width="100%"
        height={450}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"

        ></iframe>
    </div>

  </div>
    
  )
}

