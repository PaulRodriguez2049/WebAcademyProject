import React , {useState , useEffect} from "react";
import { Link } from 'react-router-dom';
import './styles/navbar.css'

const NavBar=({menuOpen , setMenuOpen ,BlackScreenOpen , setBlackScreenOpen})=> {   
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
            <h1 className="NavBar_menu_text">HOME</h1>
            <h1 className="NavBar_menu_text">TRAINING</h1>
            <h1 className="NavBar_menu_text">ABOUT</h1>
            <h1 className="NavBar_menu_text">WINNINGS</h1>
            <h1 className="NavBar_menu_text">THE STUDIO</h1>
            <Link to='/book_online' className="NavBar_menu_text">
                <h1 className="NavBar_menu_text">BOOK ONLINE</h1>
            </Link>
            <Link to='/plans-pricing' className="NavBar_menu_text">
                <h1 className="NavBar_menu_text">PLANS</h1>
            </Link>
            <h1 className="NavBar_menu_text">CONTACTS</h1>
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
