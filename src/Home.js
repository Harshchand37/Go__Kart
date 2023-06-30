import React from 'react'
import "./Home.css"
import Product from './Product';
function Home() {
  return (
    <div className="home"> 
    <div className="home-container">
    <img className='home-image'
     src="https://lh3.googleusercontent.com/pw/AM-JKLXCE4kkL-Q0LFoYH-g0vb2Vy5ogUPeqwEeddd-J7Xx9u95wkkNp55NyXD4_ufRiytRGXNKtHVMwJLpV5jXvxte5qV_CjkIrTHQGkScLo4WwSUPj5SEyBRExhwr0nwVZZADQudJC6z91f8sCPjtjx9jp=w480-h290-no?authuser=0" alt=" logo"
     

    />
    
    <div className='home-row'>

    <Product 
     id="1456788"
     title="ASUS ROG Ranger BP2500G Black 17L Capacity, Feature Charge-Cable Zipper, Water Repellent Exterior Gaming Backpack, Suitable for Up to 15.6-inch Laptop and Everyday Use"
     price={4999}
     rating={5}
     image="https://m.media-amazon.com/images/I/71OqnOPX5kL._SX522_.jpg"
     />
    <Product id="456789" title='kenwood kMix Stand Mixer for baking , stylish kitchen mixer with k-beaker,dough hook and whisk , 5 litre glass bowl'
    
    price={7000}
    rating={4}
    image="https://th.bing.com/th/id/OIP.ISVsVVZTk1vojR1n-igvzwHaHV?pid=ImgDet&rs=1"
    />

    </div>
    <div className='home-row'>

    <Product id="4567892" title='The Lean StartUp :  Zero to One: Notes on Start Ups, or How to Build the Future
by Peter Thiel and Blake Masters ' price={1400}
    image="https://th.bing.com/th/id/OIP.mmTZzMVT23OxhIKSzOoxTwHaJ8?w=129&h=180&c=7&r=0&o=5&dpr=1.38&pid=1.7"
    rating={5}
    />
    
    <Product 
    id="4567894"
    title="Amazon Echo (3rd Gen) | Smart speaker with Alexa , Charcoal Fabric"
    price={3499}
    rating={5}
    image="https://www.laptopsdirect.co.uk/Images/B07P4DKX14_1_LargeProductImage.jpg?width=450&height=450&v=3"
    
    
    
    
    
    />

    <Product 
    id="1111111"
    title="New Apple iPad Pro {12.9 inch , Wi-Fi, 128GB)-Silver(4th Generation)}"
    price={68390}
    rating={2}
    image="https://m.media-amazon.com/images/I/81Y5WuARqpS._AC_UY327_FMwebp_QL65_.jpg"
    
    />

    </div>
    <div className='home-row'>

     {/* product    */}
    
     <Product id="7777777"
    title="Samsung LC49G90SSUXEN 49' Curved LED Gaming Monitor "
    price={52499}
    rating={4}
    image="https://th.bing.com/th/id/R.0f3ad4d5d4279eb63cef6802b0752b85?rik=blR8AesUv9VZ%2fQ&riu=http%3a%2f%2fwww.ungeek.ph%2fwp-content%2fuploads%2f2018%2f04%2fsamsung_49_curved_monitor.jpg&ehk=VqOKB1A%2blsiWfrnZ%2bJyBzpPaLt0w8KcD1enDAS0wuPY%3d&risl=&pid=ImgRaw&r=0"
    
    
    
    />
  

    </div>
    <div className='home-row'>

          <Product id="6567676" title='AmazonBasics Wireless Mouse, 2.4 GHz with USB Nano Receiver, Optical Tracking, for PC/Mac/Laptop/Tablet (Black)' price={329}
            image="https://m.media-amazon.com/images/I/514-U9TxXkL._AC_UY327_FMwebp_QL65_.jpg"
rating={3}
/>

<Product 
id="8989898"
title="Samsung Galaxy M13 5G (Aqua Green, 4GB, 64GB Storage) | 5000mAh Battery | Upto 8GB RAM with RAM Plus"
price={11999}
rating={4}
            image="https://m.media-amazon.com/images/I/81AQybT5k6L._AC_UY327_FMwebp_QL65_.jpg"





/>

<Product 
id="8888888"
title="New Apple iPad Pro {12.9 inch , Wi-Fi, 128GB)-Silver(4th Generation)}"
price={68390}
rating={2}
image="https://m.media-amazon.com/images/I/81Y5WuARqpS._AC_UY327_FMwebp_QL65_.jpg"

/>


</div>
        <div className='home-row'>

          {/* product    */}

          <Product id="2177777"
            title="Samsung 27-inch(68.46cm) Odyssey G5 Gaming, Ultra WQHD, 144 Hz, 1ms, 1000R Curved Monitor, QLED, AMD FreeSync Premium (LC27G55TQBWXXL, Black) "
            price={22499}
            rating={4}
            image="https://m.media-amazon.com/images/I/81W-UrD25JL._AC_UY327_FMwebp_QL65_.jpg"



          />
          <Product id="7177787"
            title="Acer ED240Q 23.6 inch (59.94 cm) Full HD Backlit LED Curved Monitor LCD VA Panel Monitor| 250 Nits Brightness| "
            price={12799}
            rating={4}
            image="https://m.media-amazon.com/images/I/81+UJ1YBPkL._AC_UY327_FMwebp_QL65_.jpg"



          />


        </div>
        <div className='home-row'>

          <Product id="12221342" title='Nike
Mens Downshifter 12 Running' price={5400}
            image="https://m.media-amazon.com/images/I/41B9Go5uuuL._AC_UL600_FMwebp_QL65_.jpg"
            rating={5}
          />

          

          <Product
            id="1112116"
            title="Men's Pullover Fleece Club Hoodie"
            price={8300}
            rating={2}
            image="https://m.media-amazon.com/images/I/91nOJdFkR7L._AC_UL600_FMwebp_QL65_.jpg"

          />
          <Product
            id="1111114"
            title="Mens M Air Max Alpha Trainer 5 Running"
            price={6839}
            rating={2}
            image="https://m.media-amazon.com/images/I/618nWIqzAfL._AC_UL600_FMwebp_QL65_.jpg"

          />

        </div>
        

    
    </div>
      
    </div>
  )
}

export default Home