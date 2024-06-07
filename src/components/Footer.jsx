import React from 'react'
import '../index.css'
import { Face, Twitt, Insta, Trade, Apple, Visa, Discov, Master, Payment, Pay } from '../assets'




const Footer = () => {
  return (
    <>
    <div className='footy'>
      <div className="footer-section">
        <div className="footer-top">
            <div>
                <h4 style={{color: "#1A1A1A", fontWeight: "700"}}>Subcribe our Newsletter</h4>
                <p style={{color: "#999999"}}>Pellentesque eu nibh eget mauris congue mattis mattis nec <br /> tellus. Phasellus imperdiet elit eu magna.</p>
            </div>
            <div className='form-form'>
                <div>
                    <form action="">
                        <input type="text" placeholder='Your email address' />
                    </form>
                </div>
                <div>
                    <button>Subscribe</button>
                </div>
            </div>
            <div className='socials'>
                <div>
                    <img src={Face} alt="" />
                </div>
                <div>
                    <img src={Twitt} alt="" />
                </div>
                <div>
                    <img src={Insta} alt="" />
                </div>
            </div>
        </div>
      </div>
    </div>
    <div className='main-main'>
        <div className="foot-main">
            <div className="footer-logo">
                <img src={Trade} alt="" />
                <p style={{paddingTop: "1rem"}}>Morbi cursus porttitor enim lobortis molestie. <br /> Duis gravida turpis dui, eget bibendum magna <br /> congue nec.</p>
                <div className='numb'>
                    <div>
                        <p style={{color: "#fff", borderBottom: "3px solid #C80606"}}>(219) 555-0114</p>
                    </div>
                    <span>or</span>
                    <div>
                        <p style={{color: "#fff", borderBottom: "3px solid #C80606"}}>Proxy@gmail.com</p>
                    </div>
                </div>
            </div>
            <div style={{marginTop: "3.5rem"}} className='account'>
                    <h5 style={{color: "#FFFFFF"}}>My Account</h5>
                    <p>My Account</p>
                    <p>Order History</p>
                    <h6 style={{color: "#FFFFFF"}}>Shopping Cart</h6>
                    <p style={{marginTop: "1.2rem"}}>Wishlist</p>
            </div>
            <div style={{marginTop: "3.5rem"}}>
                <h5 style={{color: "#FFFFFF"}}>Helps</h5>
                <p>Contact</p>
                <p>Faqs</p>
                <p>Terms & Condition</p>
                <p>Privacy Policy</p>
            </div>
            <div style={{marginTop: "3.5rem"}}>
                <h5 style={{color: "#FFFFFF"}}>Proxy</h5>
                <p>About</p>
                <p>Shop</p>
                <p>Product</p>
                <p>Trade Order</p>
            </div>
            <div style={{marginTop: "3.5rem"}}>
                <h5 style={{color: "#FFFFFF"}}>Categories</h5>
                <p>Fruit & Vegetables</p>
                <p>Meat & Fish</p>
                <p>Bread & Bakery</p>
                <p>Beauty & Health</p>
            </div>
        </div>
        <div className='bottom-bottom'>
            <div>
                <p style={{color: "#808080"}}>Trade Center eCommerce © 2021. All Rights Reserved</p>
            </div>
            <div className='bottom-pay'>
                <div>
                    <img src={Apple} alt="" />
                </div>
                <div>
                    <img src={Visa} alt="" />
                </div>
                <div>
                    <img src={Discov} alt="" />
                </div>
                <div>
                    <img src={Master} alt="" />
                </div>
                <div>
                    <img src={Payment} alt="" />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer
