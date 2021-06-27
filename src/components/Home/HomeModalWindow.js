import React , {useState , useEffect} from 'react';
import './styles/HomeModalWindow.css'

const HomeModalWindow=({ setSharePicture})=>{

    return(
        <div className="HomeModalWindow">
               <div className="HomeModalWindow_shade"
                    onClick={()=>{setSharePicture(false)}}></div>
               <div className="HomeModalWindow_container">
                   <div className="HomeModalWindow_container_relative">
                        <div className="HomeModalWindow_container_escape"
                            onClick={()=>{setSharePicture(false)}}
                            ><i class="fas fa-times"></i></div>
                        <div className="HomeModalWindow_container_socials">
                            <button className="HomeModalWindow_container_socials_btn"><i className="fab fa-facebook"></i></button>
                            <button className="HomeModalWindow_container_socials_btn"><i className="fab fa-twitter"></i></button>
                            <button className="HomeModalWindow_container_socials_btn"><i class="fab fa-pinterest"></i></button>
                            <button className="HomeModalWindow_container_socials_btn"><i class="fab fa-tumblr"></i></button>
                            <button className="HomeModalWindow_container_socials_btn"><i class="fas fa-envelope"></i></button>
                        </div>
                        <div className="HomeModalWindow_container_adress">
                            <input type='text' className="HomeModalWindow_container_adress_text" value='https://ilyaillych.wixsite.com/mysite-16?pgid=jesckpdi-b9b50cde-797b-11ea-8c85-12879e2400f0' readOnly/>
                            <button className="HomeModalWindow_container_input_btn"><i class="far fa-clone"></i></button>
                        </div>
                   </div>
               </div>
        </div>
    );
}

export default HomeModalWindow;