import React ,{useEffect , useState} from 'react';
import './styles/Home_section1&2.css';
import './styles/Home_section3.css';
import './styles/Home_section4.css';
import './styles/Home_section5.css';
import './styles/Home_section6.css'
import './styles/Home_section7.css'
import Section1 from './section1';
import Section2 from './section2';
import Section3 from './section3';
import Section4 from './section4';
import Section5 from './section5/section5';
import Section6 from './section6';
import Section7 from './section7';
import HomeModalWindow from './HomeModalWindow'


const Home =({firstSectionParralax , setfirstSectionParralax,resize , setResize,section1Image, setSection1Image})=>{
    
    // const [fourthSectionParralax , setfourthSectionParralax] = useState(window.pageYOffset)
    // const [sixSectionParralax , setSixSectionParralax] = useState(window.pageYOffset)

    // const [section3Image , setSection3Image]= useState('')
    // const [section4Image , setSection4Image]= useState('')
    // const [section6Image , setSection6Image]= useState('')
    // const[SharePicture , setSharePicture] = useState(false);
    // const[hugeHight , setHugeHight]=useState(false)

    
    // const section3Parralax=()=>{
    //     if(window.screen.width>370){ 
    //         const section2Bottom = document.querySelector('.Home_section2').getBoundingClientRect().bottom;
    //         const section4Top = document.querySelector('.Home_section4').getBoundingClientRect().top;
    //         if(section2Bottom<=(window.screen.height ) && section4Top>=0 ){
    //             setfourthSectionParralax(-section2Bottom);
    //         }
    //     }
    // }
    // const section6Parralax=()=>{
    //     const section5Bottom = document.querySelector('.Home_section5').getBoundingClientRect().bottom;
    //     const section7Top = document.querySelector('.Home_section7').getBoundingClientRect().top;
    //     if(window.screen.width>900){
    //         if(section5Bottom<=(85  ) || section7Top>=85 ){
    //             setSixSectionParralax(-section5Bottom+85 );
    //             console.log(window.screen.height )
    //         }
    //     }else if(window.screen.width<=900){
    //         if(section5Bottom<=(window.screen.height  ) || section7Top>=0 ){
    //             setSixSectionParralax(-section5Bottom );
    //             console.log(window.screen.height )
    //         }
    //     }
    // }

        

        
    



    ////////////////resize///////////////////
//    const resizeHandler=()=>{
        // if(window.screen.availWidth>=1300){
        //     setSection3Image('https://static.wixstatic.com/media/ff6bf6_e3b198785f54487cb8e233104d2bc894.jpg/v1/fill/w_1499,h_935,al_c,q_85,usm_0.66_1.00_0.01/ff6bf6_e3b198785f54487cb8e233104d2bc894.webp')
        // }else if(window.screen.availWidth<1300 && window.screen.availWidth>=750){
        //     setSection3Image('https://static.wixstatic.com/media/ff6bf6_e3b198785f54487cb8e233104d2bc894.jpg/v1/fill/w_1100,h_935,al_c,q_85,usm_0.66_1.00_0.01/ff6bf6_e3b198785f54487cb8e233104d2bc894.webp')
        // }else if(window.screen.availWidth<750){
        //     setSection3Image('https://static.wixstatic.com/media/ff6bf6_e3b198785f54487cb8e233104d2bc894.jpg/v1/fill/w_492,h_1080,al_c,q_85/ff6bf6_e3b198785f54487cb8e233104d2bc894.jpg')
        // }

        // if(window.screen.availWidth>550){
        //     setSection4Image('https://static.wixstatic.com/media/ff6bf6_dc039a9d5c534376a81089cfb818acb9.jpg/v1/fill/w_1580,h_610,al_c,q_85/ff6bf6_dc039a9d5c534376a81089cfb818acb9.webp')
        // }else if(window.screen.availWidth<=550){
        //     setSection4Image('https://static.wixstatic.com/media/ff6bf6_dc039a9d5c534376a81089cfb818acb9.jpg/v1/fill/w_364,h_610,al_c,q_80/ff6bf6_dc039a9d5c534376a81089cfb818acb9.jpg')
        // }
      
      

    //    if(window.screen.availWidth>=1200){
    //     setSection6Image('https://static.wixstatic.com/media/ff6bf6_c2d84b9ac6114ab7a852ba02cb5f7910.jpg/v1/fill/w_1485,h_783,al_c,q_85/ff6bf6_c2d84b9ac6114ab7a852ba02cb5f7910.webp')
    //    }else if(window.screen.availWidth<1200 && window.screen.availWidth>=650){
    //     setSection6Image('https://static.wixstatic.com/media/ff6bf6_c2d84b9ac6114ab7a852ba02cb5f7910.jpg/v1/fill/w_879,h_783,al_c,q_85/ff6bf6_c2d84b9ac6114ab7a852ba02cb5f7910.webp')
    //    }else{
    //     setSection6Image('https://static.wixstatic.com/media/ff6bf6_c2d84b9ac6114ab7a852ba02cb5f7910.jpg/v1/fill/w_425,h_783,al_c,q_80/ff6bf6_c2d84b9ac6114ab7a852ba02cb5f7910.jpg')
    //    }
    //    if(window.screen.availWidth<1600 && window.screen.availWidth>700 && window.screen.availHeight>1000){
    //     setHugeHight(true)
    //     return;
    //    }else if(window.screen.availHeight<900 && window.screen.availHeight/window.screen.availWidth>2){
    //     setHugeHight(true)
    //     return;
    //    }
    //    setHugeHight(false)
    //    console.log(hugeHight)
//    }
   
   
    return(
        <div className="Home">
           <Section1 section1Image={section1Image}
                    firstSectionParralax={firstSectionParralax}
                    resize={resize}
                    />
           <Section2/>
            {/* <Section3 section3Image={section3Image}
                    fourthSectionParralax={fourthSectionParralax}
                    />
           <Section4 section4Image={section4Image}
                    />
            <Section5 setSharePicture={setSharePicture}/>
            {SharePicture ? (<HomeModalWindow  setSharePicture={setSharePicture}/>) : ''}
            <Section6 section6Image={section6Image}
                        sixSectionParralax={sixSectionParralax}
                        hugeHight={hugeHight}/>
            <Section7/> */}
        </div>
    );
}
export default Home;