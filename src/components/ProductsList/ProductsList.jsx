import React from 'react'
import "./style.css"

function ProductsList(props) {
    const {productsData ,searchInputValue}=props
  return (
    <>
    {productsData.filter(product=>product.title.toLowerCase().includes(searchInputValue.toLowerCase())).map(product=>(
            <div key={product.id} className='product-card'>
                <img src={product.image} alt={product.title} className='product-image'/>
                  <h2 className='product-title'>{product.title}</h2>
                  <p className='product-price'>${product.price}</p>
                  <p className='product-rating'>Rating:<span>{product.rating.rate}</span></p>
              <button className='add-cart-btn'>Add to Cart</button>
        </div>))}
  </>
  )
}

export default ProductsList