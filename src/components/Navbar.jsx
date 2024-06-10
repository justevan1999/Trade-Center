import React from 'react';
import "../index.css"
import { Logo, Cart } from '../assets';
const Navbar = () => {
  return (
    <React.Fragment>
            <nav className="navbar nav-nav navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="#"><img src={Logo} alt="" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    </ul>
                    <li className='navvy' style={{marginRight: "20px", listStyle: "none"}}>
                        <a style={{color: "#FFFFFF"}} href="#">About</a>
                    </li>
                    <li className='navvy' style={{marginRight: "20px", listStyle: "none"}}>
                        <a style={{color: "#FFFFFF"}} href="#">Products</a>
                    </li>
                    <button className="shop-btn" type="submit">Start Shopping <img src={Cart} alt="" /></button>
                </div>
            </nav>
    </React.Fragment>
  )
}

export default Navbar
