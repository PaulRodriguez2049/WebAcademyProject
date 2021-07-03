import React , {useState , useEffect} from "react";
import BlackScreen from "./components/navbar/BlackScreen";
import NavBar from "./components/navbar/navbar";
import Footer from './components/footer/footer';
import BookOnline from './components/BookOnline/BookOnline';
import Plans from "./components/Plans/Plans";
import { BrowserRouter as Router , Route , Switch ,Link } from "react-router-dom";
import Home from "./components/Home/Home";


const App=()=> {
  const[menuOpen , setMenuOpen]=useState(false);
  const[BlackScreenOpen , setBlackScreenOpen]=useState(false);
  const[LogIn , setLogIn] = useState(false);

    //block from Home.js start ///////////////////////////////////////////////////////
    const [firstSectionParralax , setfirstSectionParralax] = useState(window.pageYOffset);
    const [resize , setResize] = useState(false);
    const [section1Image, setSection1Image] = useState('');
    const [section2 , setSection2]= useState(1000)
    // const section2 = document.querySelector('.Home_section2').getBoundingClientRect().top;
    const section1Parralax=()=>{
      setSection2(document.querySelector('.Home_section2').getBoundingClientRect().top)
      console.log(section2)
      if(section2>85){
          setfirstSectionParralax(window.pageYOffset);
      }
    }
    useEffect(()=>{
      window.addEventListener('scroll',section1Parralax );
      // window.addEventListener('scroll',section3Parralax );
      // window.addEventListener('scroll',section6Parralax );
      window.addEventListener('resize' , resizeHandler);
      resizeHandler();
      
  },[])
  const resizeHandler=()=>{
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
  
   if(window.screen.availWidth<750){
       setSection1Image('https://static.wixstatic.com/media/ff6bf6_1e7fa400b61f4eb0b3f5cb5bca3fb2bc.jpg/v1/fill/w_640,h_886,al_c,q_85,usm_0.66_1.00_0.01/ff6bf6_1e7fa400b61f4eb0b3f5cb5bca3fb2bc.jpg')
    //    setSection3Image('https://static.wixstatic.com/media/ff6bf6_e3b198785f54487cb8e233104d2bc894.jpg/v1/fill/w_492,h_1080,al_c,q_85/ff6bf6_e3b198785f54487cb8e233104d2bc894.jpg')
       setResize(true);
       
   }else if(window.screen.availWidth>750){
        setSection1Image('https://static.wixstatic.com/media/ff6bf6_1e7fa400b61f4eb0b3f5cb5bca3fb2bc.jpg/v1/fill/w_1499,h_1080,al_c,q_85/ff6bf6_1e7fa400b61f4eb0b3f5cb5bca3fb2bc.webp');
        setResize(false);
   }

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
}

    //block from Home.js finnish ///////////////////////////////////////////////////////

  return (
    <div className="App">
      <Router>
        <BlackScreen BlackScreenOpen={BlackScreenOpen} 
                    setBlackScreenOpen={setBlackScreenOpen} 
                    LogIn={LogIn}
                    setLogIn={setLogIn}
                    />
        <NavBar menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
                BlackScreenOpen={BlackScreenOpen}
                setBlackScreenOpen={setBlackScreenOpen}
                />
        <Switch>
          <Route path='/' exact component={() => <Home firstSectionParralax={firstSectionParralax}
                                                       setfirstSectionParralax={setfirstSectionParralax}
                                                       resize={resize}
                                                       setResize={setResize}
                                                       section1Image={section1Image}
                                                       setSection1Image={setSection1Image}
                                                       />}/>
          <Route path='/book_online' component={() => <BookOnline  firstSectionParralax={firstSectionParralax}
                                                                    setfirstSectionParralax={setfirstSectionParralax}
                                                                    resize={resize}
                                                                     setResize={setResize}
                                                                     section1Image={section1Image}
                                                                    setSection1Image={setSection1Image}
                                                                    section1Parralax={section1Parralax}
                                                                    resizeHandler={resizeHandler}
                                                                    section2={section2}
                                                                    setSection2={setSection2}

                                                                    />}/>
          <Route path='/plans-pricing' component={() => <Plans setBlackScreenOpen={setBlackScreenOpen} setLogIn={setLogIn}/>}/>
        </Switch>
        
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
