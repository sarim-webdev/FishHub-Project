import React from 'react'
import ProtectedCard from "../Data/ProtectedCard"

const Products = () => {
  return (
    <div>
        <h1 className='products-title'>Our Products</h1>
      <div className='cards-container'>
        {ProtectedCard.map((items,index)=>(
            <div className='cards' key={index}>
                <img src={items.Image} alt="item.name" />
                <p>{items.paragraph}</p>
                <h3>{items.name}</h3>
                <h4>{items.price}</h4>
                <button>{items.button}</button>
            </div>
        ))}
    </div>
    </div>
  )
}

export default Products