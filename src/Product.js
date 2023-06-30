import React from 'react'
import './product.css'
import { useStateValue } from "./StateProvider";

function Product({title,image,price,rating}) {
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket);
  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD-TO-BASKET",
      item: {
        
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className='product'>
    <div className='product-info'>
     <p> {title}</p>
     <p className='product-price'>
     <small>Rupees</small>
     <strong>{price}</strong>
     </p>
     <div className="product-rating">
        {Array(rating).fill().map((_,i) => <p>⭐</p> )}
     
     
     </div>

    </div>
    <img className="product-image1" src={image}  alt="The lean start up book " />
    
    <button onClick={addToBasket}>Add to Basket</button>
    
    </div>
  )
}

export default Product