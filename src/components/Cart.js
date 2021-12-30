import React,{useState} from 'react'
import './cart.css'
import { Scrollbars } from 'react-custom-scrollbars';
import Items from "./Items";
import {products} from "./product";

const Cart = () => {
    const [item, setItem] = useState(products);
    return (
        <>

        <header>
            <div className="continue-shopping">

                    <img src="https://raw.githubusercontent.com/thapatechnical/addtocartreact/main/public/images/arrow.png"alt="arrow" className="arrow-icon" />
                <h3>continue shopping</h3>
            </div>
                <div className="cart-icon">
                    
                <img src="https://png.pngtree.com/element_our/20190531/ourmid/pngtree-shopping-cart-convenient-icon-image_1287807.jpg"alt="cart" className="cart-icon" />
                <p>7</p>
            </div>
            </header>
            <section className="main-cart-section">
                <h1>Shopping Cart</h1>
                <p>you have <span className='total-items'></span>7 items  in shopping cart</p>
                <div className="cart-items">
                    <div className="cart-items-container">
                        <Scrollbars >
                            {
                                item.map((curItem) => {
                                    return <Items key={curItem.id} {...curItem}/>
                                })
                        }
                        </Scrollbars>
                    </div>
                    </div>
                <div className ="card-total">
                    <h3>Cart Total: <span>2200rs</span></h3>
                    <button>
                        Checkout
                    </button>
                    </div>
                        </section>
                            </>
        
            
                
    )
}

export default Cart
