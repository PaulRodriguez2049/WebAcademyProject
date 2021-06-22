import React,{useState , useEffect} from "react";


const PopUp=({popUp , setPopUp})=> {
  
  return (
    <div className="PopUp">
        {popUp ? (
            <div className="PopUp_shade"
                    onClick={()=>{setPopUp(false)}}>
                <div className="PopUp_container">
                    <div className="PopUp_container_relative">
                        <button className="PopUp_escape"
                                onClick={()=>{setPopUp(false)}}
                                ><i class="fas fa-times"></i></button>
                        <h1 className="PopUp_containe_text">Sorry, this service is not yet available for online bookings. Please contact us for more information.</h1>
                        <button className="PopUp_container_btn">Got It</button>
                    </div>
                </div>
            </div>

        ):('')}
    </div>
  );
}

export default PopUp;