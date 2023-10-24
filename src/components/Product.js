import React from 'react'

export default function Product(probs) {
  return (
    <>
       <div className='col-md-6 pb-4  pt-4'>
              <h2>{probs.title} </h2>
              <p>{probs.desc}</p>
            </div> 
    </>
  )
}
