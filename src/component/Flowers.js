import React from 'react'

export default function Flowers(props) {
  return (
      <>

    <div className='container'>
      <div className='cards'>
        <h2>{props.title}</h2>
        <img src={props.imgsrc}
         alt='rose'/>
        <p>{props.desc}</p>
        <button>{props.btn}</button>
        <hr/>
      </div>

    </div>
      
      </>
  )
}
