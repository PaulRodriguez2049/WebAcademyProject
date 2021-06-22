import React , {useState , useEffect} from "react";
import BlackScreen from "./components/navbar/BlackScreen";
import NavBar from "./components/navbar/navbar";
import Footer from './components/footer/footer';
import BookOnline from './components/BookOnline/BookOnline';
import Plans from "./components/Plans/Plans";
import { BrowserRouter as Router , Route , Switch ,Link } from "react-router-dom";

const App=()=> {
  const[menuOpen , setMenuOpen]=useState(false);
  const[BlackScreenOpen , setBlackScreenOpen]=useState(false);
  const[LogIn , setLogIn] = useState(false);

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
          <Route path='/book_online' component={BookOnline}/>
          <Route path='/plans-pricing' component={() => <Plans setBlackScreenOpen={setBlackScreenOpen} setLogIn={setLogIn}/>}/>
        </Switch>
        
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
