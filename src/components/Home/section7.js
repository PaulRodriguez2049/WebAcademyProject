import React , {useState , useEffect} from 'react';


const Section7=()=>{

    return(
        <div className="Home_section7">
            <div className="Home_section7_columns">
                <img src='/images/phone.png' alt="упсь" className="Home_section7_columns_img" />
                <div className="Home_section7_columns_text">
                    <div className="Home_section7_columns_text_explanation">
                        <h1 className="Home_section7_columns_text_explanation_header">Join us on mobile!</h1>
                        <p className="Home_section7_columns_text_explanation_paraghraph">
                            The Spaces by Wix app lets you easily stay in touch and updated 
                            with us on the go. Just add your phone number and we’ll text you 
                            a link to download the app.
                        </p>
                    </div>
                    <div className="Home_section7_columns_text_explanation_phone">
                        <input type="text" className="Home_section7_columns_text_explanation_phone_prefix" placeholder='+38' required/>
                        <input type="text" className="Home_section7_columns_text_explanation_phone_number" placeholder='Phone Number' required/>
                        <button className="Home_section7_columns_text_explanation_phone_send">Send</button>
                    </div>
                    
                    <div className="Home_section7_columns_text_bottom">
                        <div className="Home_section7_columns_text_bottom_btn">
                            <img src="/images/Google_Icon.png" alt="" className="Home_section7_columns_text_bottom_btn_Google" />
                            <div className="Home_section7_columns_text_bottom_btn_column">
                                <h2 className="Home_section7_columns_text_bottom_btn_column_header">GET IT ON</h2>
                                <h1 className="Home_section7_columns_text_bottom_btn_column_title">Google Play</h1>
                            </div>
                        </div>
                        <div className="Home_section7_columns_text_bottom_btn">
                            <h1 className="Home_section7_columns_text_bottom_btn_apple"><i className="fab fa-apple"></i></h1>
                            <div className="Home_section7_columns_text_bottom_btn_column">
                                <h2 className="Home_section7_columns_text_bottom_btn_column_headerApple">Download on the</h2>
                                <h1 className="Home_section7_columns_text_bottom_btn_column_titleApple">App Store</h1>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Section7;