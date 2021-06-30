import React , {useState , useEffect} from 'react';


const Section6=({section6Image,sixSectionParralax,hugeHight})=>{

    return(
        <div className="Home_section6">
              <img src={section6Image} alt="" className={`Home_section6_img ${hugeHight ? 'hugeHight' : ''}`} style={{transform:` translateY(${sixSectionParralax*0.4}px)`}}/> 
              <div className="Home_section6_front" >
                    <div className="Home_section6_front_studio">
                        <h1 className="Home_section6_front_header">THE STUDIO</h1>
                        <p className="Home_section6_front_paraghraph">
                            I'm a paragraph. Click here to add your own text and edit me.
                            It’s easy. Just click “Edit Text” or double click me to add 
                            your own content and make changes to the font.
                        </p>
                    </div>
                    <div className="Home_section6_front_Adress">
                        <h1 className="Home_section6_front_AdressHeader">ADDRESS</h1>
                        <h1 className="Home_section6_front_Adresstext">500 TERRY FRANCOIS ST.</h1>
                        <h1 className="Home_section6_front_Adresstext">SF, CA 94158</h1>
                    </div>
                    <div className="Home_section6_front_Hours">
                        <h1 className="Home_section6_front_HoursHeader">HOURS</h1>
                        <h1 className="Home_section6_front_Hourstext">MONDAY - FRIDAY</h1>
                        <h1 className="Home_section6_front_Hourstext">6:30AM - 7:00PM</h1>
                    </div>
              </div>
        </div>
    );
}

export default Section6;