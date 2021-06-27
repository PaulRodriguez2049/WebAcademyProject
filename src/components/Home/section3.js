import React , {useState , useEffect} from 'react';

const Section3=({section3Image ,fourthSectionParralax})=>{

    return(
        <div className="Home_section3">
               <img src={section3Image} alt="" className="Home_section3_img" style={{transform:` translateY(${fourthSectionParralax*0.7}px)`}} />
               <div className="Home_section3_content">
                   <h1 className="Home_section3_content_header">MEET THE COACH</h1>
                   <p className="Home_section3_content_p1">
                       I'm a paragraph. Click here to add 
                        your own text and edit me. It’s easy. 
                        Just click “Edit Text” or double click me
                        to add your own content and make changes
                        to the font. Feel free to drag and drop 
                        me anywhere you like on your page. I’m a 
                        great place for you to tell a story and 
                        let your users know a little more about you.</p>
                    <p className="Home_section3_content_p1">
                        This is a great space to write long text
                        about your company and your services. 
                        You can use this space to go into a 
                        little more detail about your company.
                        Talk about your team and what services
                        you provide. Tell your visitors the 
                        story of how you came up with the idea
                        for your business and what makes you 
                        different from your competitors. Make
                        your company stand out and show your
                        visitors who you are.
                    </p>
                    <div className="Home_section3_content_p1_socials">
                        <button className="Home_section3_content_p1_socials_btn"><i className="fab fa-facebook-f"></i></button>
                        <button className="Home_section3_content_p1_socials_btn"><i className="fab fa-twitter"></i></button>
                        <button className="Home_section3_content_p1_socials_btn"><i className="fab fa-instagram"></i></button>
                    </div>
               </div>
           </div>
    );
}

export default Section3;