import React from 'react'
import ProtectedCard from "../Data/ProtectedCard"

const Products = () => {
  return (
    <div className='cards-container'>
        {ProtectedCard.map((items,index)=>(
            <div className='cards'>
                <img src={items.Image} alt="item.name" />
                <p>{items.paragraph}</p>
                <h3>{items.name}</h3>
                <h4>{items.price}</h4>
                <button>{items.button}</button>
            </div>
        ))}
    </div>
  )
}

export default Products