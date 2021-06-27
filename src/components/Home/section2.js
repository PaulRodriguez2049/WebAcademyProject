import React , {useState , useEffect} from 'react';
import { Link } from 'react-router-dom';

const Section2=()=>{

    return(
        <div className="Home_section2">
               <div className="Home_section2_left">

                    <img src="https://static.wixstatic.com/media/ff6bf6_ad881f0e977347c8912530d98da3f632.jpg/v1/fill/w_640,h_452,al_c,q_80,usm_0.66_1.00_0.01/ff6bf6_ad881f0e977347c8912530d98da3f632.webp" alt="" className="Home_section2_img" />
                    <div className="shade">
                        <button className="Home_section2_left_shade_btn"><i class="fas fa-chevron-left"></i></button>
                    </div>
                    <div className="Home_section2_left_center">
                        <Link to='/book_online'
                                    onClick={()=>{window.scrollTo({top:0 , behavior:'smooth'})}}
                                    >
                                <button className="Home_section2_center_btn">BEGINNERS</button>
                        </Link>
                        <Link to='/book_online'
                                    onClick={()=>{window.scrollTo({top:0 , behavior:'smooth'})}}
                                    >
                            <button className="Home_section2_btn_arrow"><i class="fas fa-chevron-right"></i></button>
                        </Link>
                    </div>
               </div>
               <div className="Home_section2_right">
                    <img src="https://static.wixstatic.com/media/ff6bf6_8945ebc2d7b04e76a872928617266cf5.jpg/v1/fill/w_906,h_604,al_c,q_85/ff6bf6_8945ebc2d7b04e76a872928617266cf5.webp" alt="" className="Home_section2_img" />
                    <div className="shade">
                        <button className="Home_section2_right_shade_btn"><i class="fas fa-chevron-right"></i></button>
                    </div>
                    <div className="Home_section2_right_center">
                        <Link to='/book_online'
                            onClick={()=>{window.scrollTo({top:0 , behavior:'smooth'})}}
                            >
                            <button className="Home_section2_center_btn">PROFESSIONALS</button>
                        </Link>
                        <Link to='/book_online'
                                onClick={()=>{window.scrollTo({top:0 , behavior:'smooth'})}}
                                >
                            <button className="Home_section2_btn_arrow"><i class="fas fa-chevron-right"></i></button>
                        </Link>
                    </div>
               </div>
           </div>
    );
}

export default Section2;