import React , {useState , useEffect} from "react";
import BlackScreen from "./components/navbar/BlackScreen";
import NavBar from "./components/navbar/navbar";
import Footer from './components/footer/footer';
import BookOnline from './components/BookOnline/BookOnline';
import Plans from "./components/Plans/Plans";

const App=()=> {
  const[menuOpen , setMenuOpen]=useState(false);
  const[BlackScreenOpen , setBlackScreenOpen]=useState(false);
  const[LogIn , setLogIn] = useState(false);

  return (
    <div className="App">
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
      {/* <BookOnline/> */}
      <Plans  setBlackScreenOpen={setBlackScreenOpen}
              setLogIn={setLogIn}
              />
      <Footer/>
    </div>
  );
}

export default App;
