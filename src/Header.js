import React from 'react'
import './Header.css'
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className='header'>
        <Link to="/">
        <img className='header-logo'
          src= "https://www.tripfiction.com/wp-content/uploads/2016/08/1920x1080-brands-amazon-logo.jpg" alt="amazon logo"/>
        </Link>

    <div  className='header-search'>
   <input
   className="header-searchInput" type="text" />
   {/* logo */}
   <SearchSharpIcon className="header-searchIcon" />

    </div>
    <div className="header-nav">
    <Link to={!user && '/login'}>
      <div onClick={handleAuthenticaton} className="header-option">

    <span className="header-optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
            <span className="header-optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
    </div>
    </Link>
    <div className="header-option">

    <span className='header-optionLineOne'>Returns</span>
      <span className='header-optionLineTwo'>&Orders</span>
        
    </div>
    <div className="header-option">

    <span className='header-optionLineOne'>Your</span>
      <span className='header-optionLineTwo'>Account</span>

    </div>
    <Link to = "/checkout">
    <div className="header-optionBasket">
   
   <ShoppingCartIcon/>
   <span className="header-optionLineTwo header-basketCount">
   {basket?.length}
    </span> </div>
    
    </Link>
  

  </div>
    </div>
    

    
  )
}

export default Header