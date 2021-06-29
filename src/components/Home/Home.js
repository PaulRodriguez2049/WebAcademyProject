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


const Home =()=>{
    const [firstSectionParralax , setfirstSectionParralax] = useState(window.pageYOffset)
    const [fourthSectionParralax , setfourthSectionParralax] = useState(window.pageYOffset)
    const [resize , setResize] = useState(false)
    const [section1Image, setSection1Image] = useState('')
    const [section3Image , setSection3Image]= useState('')
    const [section4Image , setSection4Image]= useState('')
    const [section6Image , setSection6Image]= useState('')
    const[SharePicture , setSharePicture] = useState(false);

    const section1Parralax=()=>{
        const section2 = document.querySelector('.Home_section2').getBoundingClientRect().top;
        
        if(section2>85){
            setfirstSectionParralax(window.pageYOffset);
        }
    }
    const section3Parralax=()=>{
        if(window.screen.width>370){ 
            const section2Bottom = document.querySelector('.Home_section2').getBoundingClientRect().bottom;
            const section4Top = document.querySelector('.Home_section4').getBoundingClientRect().top;
            if(section2Bottom<=(window.screen.height ) && section4Top>=0 ){
                setfourthSectionParralax(-section2Bottom);
            }
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll',section1Parralax );
        window.addEventListener('scroll',section3Parralax );
        window.addEventListener('resize' , resizeHandler);
        resizeHandler();
        
    },[])
        

        
    



    ////////////////resize///////////////////
   const resizeHandler=()=>{
        if(window.screen.availWidth>=1300){
            setSection3Image('https://static.wixstatic.com/media/ff6bf6_e3b198785f54487cb8e233104d2bc894.jpg/v1/fill/w_1499,h_935,al_c,q_85,usm_0.66_1.00_0.01/ff6bf6_e3b198785f54487cb8e233104d2bc894.webp')
        }else if(window.screen.availWidth<1300 && window.screen.availWidth>=750){
            setSection3Image('https://static.wixstatic.com/media/ff6bf6_e3b198785f54487cb8e233104d2bc894.jpg/v1/fill/w_1100,h_935,al_c,q_85,usm_0.66_1.00_0.01/ff6bf6_e3b198785f54487cb8e233104d2bc894.webp')
        }else if(window.screen.availWidth<750){
            setSection3Image('https://static.wixstatic.com/media/ff6bf6_e3b198785f54487cb8e233104d2bc894.jpg/v1/fill/w_492,h_1080,al_c,q_85/ff6bf6_e3b198785f54487cb8e233104d2bc894.jpg')
        }

        if(window.screen.availWidth>550){
            setSection4Image('https://static.wixstatic.com/media/ff6bf6_dc039a9d5c534376a81089cfb818acb9.jpg/v1/fill/w_1580,h_610,al_c,q_85/ff6bf6_dc039a9d5c534376a81089cfb818acb9.webp')
        }else if(window.screen.availWidth<=550){
            setSection4Image('https://static.wixstatic.com/media/ff6bf6_dc039a9d5c534376a81089cfb818acb9.jpg/v1/fill/w_364,h_610,al_c,q_80/ff6bf6_dc039a9d5c534376a81089cfb818acb9.jpg')
        }
      
       if(window.screen.availWidth<750){
           setSection1Image('https://static.wixstatic.com/media/ff6bf6_1e7fa400b61f4eb0b3f5cb5bca3fb2bc.jpg/v1/fill/w_640,h_886,al_c,q_85,usm_0.66_1.00_0.01/ff6bf6_1e7fa400b61f4eb0b3f5cb5bca3fb2bc.jpg')
           setSection3Image('https://static.wixstatic.com/media/ff6bf6_e3b198785f54487cb8e233104d2bc894.jpg/v1/fill/w_492,h_1080,al_c,q_85/ff6bf6_e3b198785f54487cb8e233104d2bc894.jpg')
           setResize(true);
           
       }else if(window.screen.availWidth>750){
            setSection1Image('https://static.wixstatic.com/media/ff6bf6_1e7fa400b61f4eb0b3f5cb5bca3fb2bc.jpg/v1/fill/w_1499,h_1080,al_c,q_85/ff6bf6_1e7fa400b61f4eb0b3f5cb5bca3fb2bc.webp');
            setResize(false);
       }

       if(window.screen.availWidth>=1200){
        setSection6Image('https://static.wixstatic.com/media/ff6bf6_c2d84b9ac6114ab7a852ba02cb5f7910.jpg/v1/fill/w_1485,h_783,al_c,q_85/ff6bf6_c2d84b9ac6114ab7a852ba02cb5f7910.webp')
       }else if(window.screen.availWidth<1200 && window.screen.availWidth>=650){
        setSection6Image('https://static.wixstatic.com/media/ff6bf6_c2d84b9ac6114ab7a852ba02cb5f7910.jpg/v1/fill/w_879,h_783,al_c,q_85/ff6bf6_c2d84b9ac6114ab7a852ba02cb5f7910.webp')
       }else{
        setSection6Image('https://static.wixstatic.com/media/ff6bf6_c2d84b9ac6114ab7a852ba02cb5f7910.jpg/v1/fill/w_425,h_783,al_c,q_80/ff6bf6_c2d84b9ac6114ab7a852ba02cb5f7910.jpg')
       }
       
   }
   
   
    return(
        <div className="Home">
           <Section1 section1Image={section1Image}
                    firstSectionParralax={firstSectionParralax}
                    resize={resize}
                    />
           <Section2/>
            <Section3 section3Image={section3Image}
                    fourthSectionParralax={fourthSectionParralax}
                    />
           <Section4 section4Image={section4Image}
                    />
            <Section5 setSharePicture={setSharePicture}/>
            {SharePicture ? (<HomeModalWindow  setSharePicture={setSharePicture}/>) : ''}
            <Section6 section6Image={section6Image}/>
            <Section7/>
        </div>
    );
}
export default Home;