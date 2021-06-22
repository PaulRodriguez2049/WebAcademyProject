import React,{useState , useEffect} from "react";
import './styles/Checkout.css'

const CheckOut=({price,name,duration ,payplan ,setBlackScreenOpen , setLogIn})=> {
   
    return(
        <div className="Checkout">
            <h1 className="Checkout_header">Checkout</h1>
            <div className="Checkout_container">
                <div className="CheckOut_SignUp">
                    <div className="CheckOut_SignUp_SignUp">
                        <h1 className="CheckOut_SignUp_SignUp_number">1</h1>
                        <h1 className="CheckOut_SignUp_SignUp_number">Sign Up</h1>
                    </div>
                    <h1 className="CheckOut_SignUp_text">
                    To purchase this plan and use its benefits in the future, log in to your account or sign up.
                    </h1>
                    <div className="CheckOut_SignUp_buttons">
                        <button className="CheckOut_SignUp_buttons_signUp"
                                onClick={()=>{setBlackScreenOpen(true)}}
                                >Sign Up</button>
                        <button className="CheckOut_SignUp_buttons_LogIn"
                                onClick={()=>{setLogIn(true) ; setBlackScreenOpen(true)}}
                                >Log In</button>
                    </div>
                    <div className="CheckOut_SignUp_Payment">
                        <h1 className="CheckOut_SignUp_Payment_number">2</h1>
                        <h1 className="CheckOut_SignUp_Payment_number">Payment</h1>
                    </div>
                </div>
                <div className="CheckOut_GrayBox">
                    <h1 className="CheckOut_GrayBox_header">Order Summary</h1>
                    <div className="CheckOut_GrayBox_name margin_top_none">
                        <h1 className="CheckOut_GrayBox_name_category CheckOut_GrayBox_display_none">Plan</h1>
                        <h1 className="CheckOut_GrayBox_name_category CheckOut_GrayBox_memb_name">{name}</h1>
                    </div>
                    <div className="CheckOut_GrayBox_name">
                        <h1 className="CheckOut_GrayBox_name_category">Duration</h1>
                        <h1 className="CheckOut_GrayBox_name_category">{duration}</h1>
                    </div>
                    <div className="CheckOut_GrayBox_price">
                        <h1 className="CheckOut_GrayBox_price_category">{payplan}</h1>
                        <h1 className="CheckOut_GrayBox_price_number">${price}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CheckOut;