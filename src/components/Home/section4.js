import React , {useState , useEffect} from 'react';

const Section4=({section4Image})=>{

    return(
        <div className="Home_section4">
               <img src={section4Image} alt="" className="Home_section4_background" />
               <div className="Home_section4_content">
                   <h1 className="Home_section4_content_header">WINNINGS</h1>
                   <div className="Home_section4_content_wrapper">
                       <div className="Home_section4_content_wrapper_1">
                           <h1 className="Home_section4_content_wrapper_number">15</h1>
                           <h2 className="Home_section4_content_wrapper_text">15 YEARS OF</h2>
                           <h2 className="Home_section4_content_wrapper_text">BOXING</h2>
                           <h2 className="Home_section4_content_wrapper_text">EXPERIENCE</h2>
                       </div>
                       <div className="Home_section4_content_wrapper_1">
                           <h1 className="Home_section4_content_wrapper_number">3</h1>
                           <h2 className="Home_section4_content_wrapper_text">3 TIMES WBA</h2>
                           <h2 className="Home_section4_content_wrapper_text">INTERCONTINENTAL</h2>
                           <h2 className="Home_section4_content_wrapper_text">CRUISERWEIGHT</h2>
                       </div>
                       <div className="Home_section4_content_wrapper_1">
                           <h1 className="Home_section4_content_wrapper_number">4</h1>
                           <h2 className="Home_section4_content_wrapper_text">4 TIMES WBC</h2>
                           <h2 className="Home_section4_content_wrapper_text">INTERCONTINENTAL</h2>
                           <h2 className="Home_section4_content_wrapper_text">CRUISERWEIGHT</h2>
                       </div>
                       <div className="Home_section4_content_wrapper_1">
                           <h1 className="Home_section4_content_wrapper_number">2</h1>
                           <h2 className="Home_section4_content_wrapper_text">2 TIMES IBF</h2>
                           <h2 className="Home_section4_content_wrapper_text">INTERCONTINENTAL</h2>
                           <h2 className="Home_section4_content_wrapper_text">CRUISERWEIGHT</h2>
                       </div>
                   </div>
               </div>
           </div>
    );
}

export default Section4;