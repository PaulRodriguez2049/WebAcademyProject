import React , {useState , useEffect} from 'react';

const Section1=({section1Image,firstSectionParralax,resize})=>{

    return(
        <div className="Home_section1">
               <img src={section1Image} alt="" className='Home_section1_img' style={{transform:`translateY(${firstSectionParralax*0.75}px)`}}/>
               <div className="Home_section1_forefront" >
                   <h1 className="Home_section1_forefront_name">JOEY DIXON</h1>
                   {resize?(
                       <div className="Home_section1_forefront_job_wrap">
                           <h2 className="Home_section1_forefront_job_resize">TRAINING WITH A</h2>
                            <h2 className="Home_section1_forefront_job_resize">WORLD CHAMPION</h2>
                       </div>
                   ):(<h2 className="Home_section1_forefront_job">TRAINING WITH A WORLD CHAMPION</h2>)}
                   <button className="Home_section1_forefront_btn">Book Now</button>
               </div>
           </div>
    );
}

export default Section1;