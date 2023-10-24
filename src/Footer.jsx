
import React from 'react'

export default function Footer() {
  return (
    <>
      <div className='Footer'>
        <div className='container'>
           <div className='ref p-2 bg-dark d-flex'>
           <a className='me-5  p-3 ms-5' href='call' style={{color:'white',backgroundColor:'teal',textDecoration:'none'}}>Call Me .! </a>
           <a href='emailto' className='p-3' style={{color:'white',backgroundColor:'teal',textDecoration:'none'}} >Our email .!</a>
           <p className='ms-auto me-3 pt-3' style={{color:'white'}}>MADE BY Deema Awwad</p>
          
           </div>

        </div>
      </div>
    </>
  )
}