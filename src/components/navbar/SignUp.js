import React, {useState , useEffect} from 'react';
import CreatePassWord from './CreatePassWord'

const API_URL = `https://boring-fe.herokuapp.com/comments`;

const SignUp=({createPassword,setcreatePassword ,error,setError ,LogIn,setLogIn ,fillForm,setFillForm,email , setEmail,password , setPassword})=>{
    
 
    
    

    const handleSubmit=(e)=>{
        e.preventDefault(); 
        if(email==='' ||password===''){
            setError(true);
            return;
        }
        setError(false);
        const requestData = new FormData(e.target);
        fetch( API_URL ,{
                method:"POST",
                body:requestData})
                .then((res)=>{return res.json()})
                .then((data)=>{console.log(data)})
                setEmail('');
                setPassword('');
    }


    const LoginSignUpToggle=()=>{
        if(LogIn){
            setLogIn(false)
        }else{
            setLogIn(true)
        }
        setFillForm(false);
    }

    return(
        <div className='SignUp'>
            {(createPassword )? (<CreatePassWord/>) :('')}
            <div className={`SignUp  ${(createPassword )? ('SignUp_hidden') :('')}`}>
                <h1 className="SignUp_Header">{(LogIn )? ('Log In') :('Sign Up')}</h1>
                <div className="SignUp_Header_below">
                    <h1 className="SignUp_Header_below_text">{(LogIn )? ('New to this site?') :('Already a member?')}</h1>
                    <button className="SignUp_Header_below_btn"
                            onClick={LoginSignUpToggle}
                            >{(LogIn )? ('Sign Up') :('Log In')}</button>
            </div>
            {(!fillForm )? (
                <div className='SignUp'>
                    <button className='Facebook_btn'>
                        <span className='Facebook_btn_span'><i className="fab fa-facebook-square"></i> </span>
                        {(LogIn )? ('Log in') :('Sign up')} with Facebook
                    </button>
                    <div className="Google_btn">
                        <div className="Google_btn_logo">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/768px-Google_%22G%22_Logo.svg.png" alt="" className="Google_btn_logo_img" />
                        </div>
                        <button className='Google_button'>{(LogIn )? ('Log in') :('Sign up')} with Google</button>
                    </div>
                    <hr className="SignUp_line"></hr>
                    <h2 className="SignUp_or">or</h2>
                    <button className='SignUp_withEmail_toggle'
                        onClick={()=>{setFillForm(true)}}
                        >{(LogIn )? ('Log in with Email') :('Sign up with email')}</button>
                </div>

            ) :(
            <div className="SignUp_Form">
                <form className="SignUp_Form_form"
                        onSubmit={handleSubmit}
                        >
                    <label for='email' className="SignUp_Form_form_email_label">Email</label>
                <input
                        id="email"
                        class="SignUp_Form_form_email"
                        type="text"
                        name="email"
                        onChange={(e)=>{setEmail(e.target.value)}}
                        value={email}
                        />
                    <span className={`SignUp_Form_error_email ${(error)? ('error_visible') :('')}`}
                        >Email cannot be blank</span>
                    <label for='password' className="SignUp_Form_form_password_label">Password</label>
                    
                    <input
                        id="password"
                        class="SignUp_Form_form_email"
                        type="password"
                        name="password"
                        onChange={(e)=>{setPassword(e.target.value)}}
                        value={password}
                    />
                    <span className={`SignUp_Form_error_email ${(error)? ('error_visible') :('')}`}
                        >Make sure you enter a password</span>
                    {(LogIn )? (<button className="SignUp_Form_forget "
                                        onClick={()=>{setcreatePassword(true)}}
                                        >Forgot Pasword?</button>) :('')}
                    <button type='submit' className="SignUp_Form_Submit ">{(LogIn )? ('Log In') :('Sign Up')}</button>
                    <hr className="form_or_line"></hr>
                    <h1 className="form_or">or {(LogIn )? ('log In') :('sign Up')} with</h1>
                    <div className="buttons">
                        <img src="https://c0.klipartz.com/pngpicture/282/704/gratis-png-facebook-messenger-logo-icon-facebook-facebook-logo-thumbnail.png" alt="" className="Facebook" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/768px-Google_%22G%22_Logo.svg.png" alt="" className="Google" />
                    </div>
                </form>
            </div>
            )}
        </div>
    </div>
    );
}
export default SignUp;