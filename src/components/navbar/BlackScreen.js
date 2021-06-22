import React, {useState , useEffect} from 'react';
import './styles/BlackScreen.css'
import SignUp from './SignUp';

const BlackScreen=({BlackScreenOpen,setBlackScreenOpen ,LogIn , setLogIn})=>{
    const[createPassword,setcreatePassword]=useState(false);
    const[error , setError]=useState(false);
    const [fillForm , setFillForm] = useState(false);
    const [email , setEmail]=useState('');
    const[password , setPassword]=useState('');

    const escapeClick=()=>{
        if(BlackScreenOpen){
            setBlackScreenOpen(false)
        }else{
            setBlackScreenOpen(true)
        }
        setcreatePassword(false)
        setError(false)
        setLogIn(false)
        setFillForm(false)
        setEmail('')
        setPassword('')
    }

    return(
        <div className={`BlackScreen ${BlackScreenOpen ? 'BlackScreenActive' : ``}`}>
            <button className='BlackScreen_escape'
                    onClick={escapeClick}
                    ><i className="fas fa-times"></i></button>
            <SignUp setcreatePassword={setcreatePassword} createPassword={createPassword}
                    error={error} setError={setError}
                    LogIn={LogIn}  setLogIn={setLogIn}
                    fillForm={fillForm} setFillForm={setFillForm}
                    email={email} setEmail={setEmail}
                    password={password} setPassword={setPassword}
                    />
        </div>
    );
}
export default BlackScreen;