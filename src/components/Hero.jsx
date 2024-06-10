import React from 'react'
import { Cart2, Steps, Mango, Foods, Food, Book, Gseries, Shopin, Browse, Join, Enjoy, Pay, Offer, Fold, People, Cart,Cartcarry, Pepper, Tabs, Construct, Arrow2, Arrow } from '../assets'

const Hero = () => {
  return (
    <div className='heero'>
        <div className="hero">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-3">
                    <div className="hero-text">
                        <h1>Get <span className='change'>Wholesale Prices <br /> Without</span> Buying <br /> Wholesale <span className='change'>Quantities</span></h1>
                        <p>Join our community and unlock access to wholesale prices on everyday essentials through shared bulk purchases.</p>
                        <button>Start Shopping <img src={Cart2} alt="" /></button>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-9">
                    <div className="bag-image">
                    </div>
                    {/* <img style={{width: "100%"}} src={Bag} alt="" /> */}
                </div>
            </div>
        </div>
        <div className="trusted  mt-5">
            <h2 style={{textAlign: "center", color: "#232323", fontWeight: "700"}}>We Are Trust By</h2>
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-1"></div>
                <div className="col-sm-12 col-md-12 col-lg-10">
                    <div className="trust-logo mt-5">
                        <div>
                            <img src={Steps} alt="" />
                        </div>
                        <div className='lines'></div>
                        <div>
                            <img src={Mango} alt="" />
                        </div>
                        <div className='lines'></div>
                        <div>
                            <img src={Foods} alt="" />
                        </div>
                        <div className='lines'></div>
                        <div>
                            <img src={Food} alt="" />
                        </div>
                        <div className='lines'></div>
                        <div>
                            <img className='book-book' src={Book} alt="" />
                        </div>
                        <div className='lines'></div>
                        <div>
                            <img src={Gseries} alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-1"></div>
            </div>
        </div>
        <div className="works">
            <h2 style={{textAlign: "center", marginTop: "6rem", fontWeight: "700", fontSize: "24px", color: "#232323"}}>How it Works</h2>
        </div>
        <div className="how-it-works">
            <div className="row">
                <div className="orders">
                <div>
                    <div className="col-sm-12 col-md-12 col-md-6">
                        <img className='how-image' style={{width: "90%", marginLeft: "5rem", marginTop: "2.5rem"}} src={Shopin} alt="" />
                    </div>
                </div>
                <div>
                    <div id="push" style={{marginTop: "6rem"}} className="col-sm-12 col-md-12 col-md-6">
                        <div className="first-top">
                            <div className="browse">
                                <img src={Browse} alt="" />
                                <h4>Browse Products</h4>
                                <p>Find the items you need at true wholesale prices</p>
                            </div>
                            <div style={{marginLeft: "5rem"}} className="join">
                                <img src={Join} alt="" />
                                <h4>Join a Bulk Buy</h4>
                                <p>Contribute to a shared purchase with other members</p>
                            </div>
                        </div>
                        <div className="second-top">
                            <div className="pay mt-4">
                                <img src={Pay} alt="" />
                                <h4>Pay Your Share of <br /> Wholesale Price</h4>
                                <p style={{width: "100%"}}>Only pay for the portion you order.</p>
                            </div>
                            <div className="enjoy mt-4">
                                <img src={Enjoy} alt="" />
                                <h4>Enjoy</h4>
                                <p>Receive high-quality products directly at your doorstep.</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div className="choose mt-5">
            <div className="chose">
                <div className="choose-text">
                    <div className="row">
                        <div id='choosy' style={{marginTop: "10.5rem"}} className="col-sm-12 col-md-12 col-lg-6">
                            <h3 className='why-text'>Why <span className='pick'>Choose</span> Us</h3>
                            <ul>
                                <li>
                                    <p className='pee'><span className='list-span'>Savings: </span> We help you Save a lot of money if you purchase from us.</p>
                                </li>
                                <li>
                                    <p className='pee'><span className='list-span'>Trusted Network: </span> We work directly with reputable distributors and manufacturers.</p>
                                </li>
                                <li>
                                    <p className='pee'><span className='list-span'>Convenience Of Group Buying: </span> Enjoy the benefits of bulk buying without the hassle.</p>
                                </li>
                                <li>
                                    <p className='pee'><span className='list-span'>Global Reach: </span> Discover unique products from around the world through <br /> international group buying. Explore new brands and expand your <br /> shopping horizons!</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <div className="choose-image mt-5">
                                <div className="two-images">
                                    <div>
                                        <img src={Offer} alt="" />
                                    </div>
                                    <div className='mt-2'>
                                        <img src={Fold} alt="" />
                                    </div>
                                </div>
                                <div className='last-image' style={{marginLeft: "7rem"}}>
                                    <img src={People} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="community">
            <div>
            <h2 className='commy' style={{textAlign: "center", paddingTop: "15rem", color: "#fff", fontSize: "40px", fontWeight: "600"}}>Join a Community of Global Shoppers. join different shipment <br /> groups across  different product categories.</h2>
            <div style={{textAlign: "center"}}>
                <button className='backg-btn'>Start Shopping <img src={Cart} alt="" /></button>
            </div>
            </div>
        </div>
        <div className="featured">
            <h3 style={{textAlign: "center", marginTop: "5rem", fontWeight: "700", color: "#232323", fontSize: "30px"}}>Featured Products</h3>
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-3">
                    <div className="cartcarry text-center">
                        <h6 style={{color: "#FFFFFF",paddingTop: "30px", fontWeight: "500", paddingBottom: "2px"}}>Summer Sale</h6>
                        <h2 style={{color: "#FFFFFF", fontWeight: "600"}}>FMCGS</h2>
                        <div className="percent d-flex text-center justify-content-center">
                            <div><p style={{color: "#FFFFFF", marginRight: "1rem", fontWeight: "500"}}>Up to</p></div>
                            <div><p style={{color: "#C80606", fontWeight: "500"}}>64% OFF</p></div>
                        </div>
                        <button className='cart-shop'>Shop Now <img src={Arrow} alt="" /></button>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-3">
                    <div className="pepper text-center">
                        <h6 style={{color: "#FFFFFF",paddingTop: "28px", fontWeight: "500", paddingBottom: "2px"}}>BEST DEALS</h6>
                        <h2 style={{color: "#FFFFFF", fontWeight: "600",fontSize: "40px"}}>Farm Produce</h2>
                        <div className="count d-flex justify-content-center">
                            <div>
                                <div><h5 style={{color: "#fff", fontWeight: "400"}} className='mr-3'>00</h5></div>
                                <p style={{color: "#fff"}}>DAYS</p>
                            </div>

                            <span style={{color: "#fff"}} className='mr-3'>:</span>

                            <div>
                                <div><h5 style={{color: "#fff",fontWeight: "400"}}>02</h5></div>
                                <p style={{color: "#fff"}}>HOURS</p>
                            </div>

                            <span style={{color: "#fff"}} className='mr-3'>:</span>

                            <div>
                                <div><h5 style={{color: "#fff", fontWeight: "400"}} className='mr-2'>18</h5></div>
                                <p style={{color: "#fff"}}>MINS</p>
                            </div>

                            <span style={{color: "#fff"}} className='mr-3'>:</span>

                            <div>
                                <div><h5 style={{color: "#fff", fontWeight: "400"}}>46</h5></div>
                                <p style={{color: "#fff"}}>SECS</p>
                            </div>
                            
                        </div>
                        <button className='pepper-shop'>Shop Now <img src={Arrow2} alt="" /></button>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-3">
                    <div className="gadgets text-center">
                        <h6 style={{paddingTop: "28px"}}>85% FAT FREE</h6>
                        <h2 style={{fontWeight: "600"}}>GADGETS</h2>
                        <p style={{fontWeight: "400"}}>Started at <span style={{color: "#C80606", fontWeight: "600"}}>$79.99</span></p>
                        <button className='cart-shop'>Shop Now <img src={Arrow} alt="" /></button>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-3">
                    <div className="construct text-center">
                        <h6 style={{paddingTop: "28px"}}>85% FAT FREE</h6>
                        <h2 style={{fontWeight: "600"}}>Construction</h2>
                        <p style={{fontWeight: "400"}}>Started at <span style={{color: "#C80606", fontWeight: "600"}}>$79.99</span></p>
                        <button className='cart-shop'>Shop Now <img src={Arrow} alt="" /></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
