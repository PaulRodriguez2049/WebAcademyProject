import React , {useState , useEffect} from "react";
import { Link } from 'react-router-dom';
import Footer from "../footer/footer";
import './styles/navbar.css'

const NavBar=({menuOpen , setMenuOpen ,BlackScreenOpen , setBlackScreenOpen})=> {   



  const HomeScroll=()=>{
    setMenuOpen(false) ;window.scrollTo({top: 0,behavior: 'smooth'})
  }
  // const TrainingScroll=()=>{
  //   const Training = document.querySelector('.Home_section2').getBoundingClientRect();
  //   setMenuOpen(false) ; window.scrollBy({top:Training.top ,behavior: 'smooth'});
  // }
  // const AboutScroll=()=>{
  //   const About = document.querySelector('.Home_section3').getBoundingClientRect();
  //   setMenuOpen(false) ; window.scrollBy({top:About.top ,behavior: 'smooth'});
  // }
  // const WinningScroll=()=>{
  //   const Winning = document.querySelector('.Home_section4').getBoundingClientRect();
  //   setMenuOpen(false) ; window.scrollBy({top:Winning.top ,behavior: 'smooth'});
  // }
  const BookOnlineScroll=()=>{
    setMenuOpen(false) ;window.scrollTo({top: 0,behavior: 'smooth'});
    
  }

  const ContuctScroll=()=>{
    // const footer = document.querySelector('.Footer').getBoundingClientRect();
    setMenuOpen(false) ; window.scrollBy({top:0 ,behavior: 'smooth'});

  }

  return (
    <div className="NavBar">
        <div className={`shades ${menuOpen ? 'shades_active' : ``}`}></div>
        <div className="NavBar_Toggle">
            <button className={`NavBar_Toggle_button ${menuOpen ? 'white' : ''}`}
                    onClick={()=>{(menuOpen )? (setMenuOpen(false)) :(setMenuOpen(true))}}
                    >{menuOpen ? (<i className="fas fa-times"></i>) : (<i className="fas fa-bars"></i>)}</button>
        </div>
      <div className= {`NavBar_menu ${menuOpen ? 'NavBar_menu_active' : ''}`}>
          <div className="NavBar_menu_options">
            <Link to='/' className='NavBar_menu_text'
                  onClick={HomeScroll}
                  >
                <h1 className="NavBar_menu_text">HOME</h1>
            </Link>
            <Link to='/' className='NavBar_menu_text'
                  // onClick={TrainingScroll}
                  >
                <h1 className="NavBar_menu_text">TRAINING</h1>
            </Link>
            <Link to='/' className='NavBar_menu_text'
                // onClick={AboutScroll}
                >
                <h1 className="NavBar_menu_text">ABOUT</h1>
            </Link>
            <Link to='/' className='NavBar_menu_text'
                // onClick={WinningScroll}
                >
                <h1 className="NavBar_menu_text">WINNINGS</h1>
            </Link>
            <h1 className="NavBar_menu_text">THE STUDIO</h1>
            <Link to='/book_online' className="NavBar_menu_text"
                  onClick={BookOnlineScroll}
                  >
                <h1 className="NavBar_menu_text">BOOK ONLINE</h1>
            </Link>
            <Link to='/plans-pricing' className="NavBar_menu_text"
                    onClick={()=>{setMenuOpen(false) ;window.scrollTo({top: 0,behavior: 'smooth'});}}
                    >
                <h1 className="NavBar_menu_text">PLANS</h1>
            </Link>
            <h1 className="NavBar_menu_text"
                 onClick={ContuctScroll}
                >CONTACTS</h1>
          </div>
          <div className="NavBar_LogIn">
            <button className="NavBar_LogIn_button"
                    onClick={()=>{(BlackScreenOpen )? (setBlackScreenOpen(false)) :(setBlackScreenOpen(true))}}
                    >
                    <span className="NavBar_LogIn_button_ava">
                    <i class="fas fa-user-circle"></i></span> 
                    Log In
            </button>
         </div>
      </div>
    </div>
  );
}

export default NavBar;
