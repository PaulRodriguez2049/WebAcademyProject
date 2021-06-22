import React,{useState , useEffect} from "react";
import './styles/BookOnline.css'


const BookOnline1=({name,price,image,unwrappedText,location,email,trigger,setTrigger,setPopUp,hide,setHide})=> {
    
  const reset=()=>{
    setTrigger(false);
    setHide(false);
  }


  return (
    <div className="BookOnline1">
      {(!hide)? (
        <div className="BookOnline_box">
            <div className="BookOnline_box_up">
                <img src={image}
                     className="BookOnline_box_img"
                      onClick={()=>{setHide(true) ; setTrigger(true)}}
                  />
            </div>
            <div className="BookOnline_box_down">
                <h1 className="BookOnline_box_header"
                    onClick={()=>{setHide(true) ; setTrigger(true)}}
                      >{name}</h1>
                
                <h1 className="BookOnline_box_price">{price}</h1>
                <button className="BookOnline_box_btn"
                        onClick={()=>{setPopUp(true)}}
                        >Book Now</button>
            </div>
        </div>):(
          ''
        )}
        {trigger ? (
            <div className="BookOnline1">
              <button className="BookOnline_unwrapped_escape"
                      onClick={reset}
                      ><span><i class="fas fa-chevron-left"></i></span> Back</button>
                <div className="BookOnline_unwrapped">
                    <div className="BookOnline_box_down">
                      <h1 className="BookOnline_unwrapped_header">{name}</h1>
                      <h1 className="BookOnline_box_price">{price}</h1>
                      <button className="BookOnline_unwrapped_btn"
                              onClick={()=>{setPopUp(true)}}
                              >Book Now</button>
                    </div>
                    <img src={image}
                         className="BookOnline_unwrapped_img"/>
                    <h1 className="BookOnline_unwrapped_descrption">{unwrappedText}</h1>
                    <div className="BookOnline_unwrapped_down">
                        <h1 className="BookOnline_unwrapped_Location">{location}</h1>
                        <h1 className="BookOnline_unwrapped_email">{email}</h1>
                    </div>                
                </div>
            </div>
        ):('')}
    </div>
  );
}

export default BookOnline1;