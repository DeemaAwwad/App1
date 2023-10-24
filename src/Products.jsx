import React from 'react'
import Product from './components/Product.js'
export default function Products() {

  const products = [

    {id:1,title:'Deema Awwad',desc:'I am Deema Awwad'},

    {id:2,title:'Donia Awwad',desc:'I am Donia Awwad'},

    {id:3,title:'Dalia Awwad',desc:'I am Dalia Awwad'},

    {id:3,title:'Yasmin Awwad',desc:'I am Yasmin Awwad'},
    {id:3,title:'Saleh Awwad',desc:'I am Saleh Awwad'},
    {id:3,title:'Mohammed Awwad',desc:'I am Mohammed Awwad'},
    {id:3,title:'Ezz Aldeen Awwad',desc:'I am Ezz Aldeen Awwad'},
    {id:3,title:'Yamin Awwad',desc:'I am Yamin Awwad'},

];

  return (
    <>
      <div className='products '>
        <div className='container'>
          <div className='row'>
          {products.map((product)=>{
      return <Product {...product} key={product.id}/>
    })}
           
          </div>
        </div>
      </div>
    </>
  )
}
