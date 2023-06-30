import React from 'react'
import "./checkout.css"
import Subtotal from './Subtotal';
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {

  const [{ basket }, dispatch] = useStateValue();
   console.log(dispatch);
  return (
    <div className='checkout'>
      <div className='Checkout--left'>
   <img className='checkout-ad' src="https://th.bing.com/th/id/R.47dd33fb348dbf78b470b8cf055cda92?rik=OfEEC%2bDOcRpVWA&riu=http%3a%2f%2fclipart-library.com%2fimg1%2f900593.png&ehk=narghFgVpuXa5xXLYlXBQRqvFbALX3DhCwPhCJ1VIO8%3d&risl=&pid=ImgRaw&r=0" alt="check out pic"    />
   <div>
    
    <h2 className='checkout-title'>Your shopping basket</h2>
   
    {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}



    </div>        
   </div>
   <div className='checkout_right'>
    <Subtotal />
   

   </div>        
    </div>
  )
}

export default Checkout