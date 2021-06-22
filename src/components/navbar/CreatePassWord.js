
import React ,{useEffect , useState} from 'react';
import './styles/BlackScreen.css'


const API_URL = `https://boring-fe.herokuapp.com/comments`;

const CreatePassWord=()=>{

    const [email , setEmail]=useState('')
    const[error , setError]=useState(false)
    const submitHandler=(e)=>{
        e.preventDefault(); 
        if(email===''){
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
                
    }
    return(
        <form className="CreatePassWord"
             onSubmit={submitHandler}   
                >
            <h1 className="CreatePassWord_Header">Create New Password</h1>
            <h1 className="CreatePassWord_header-below">Please enter your email address</h1>
            <label for='email' className="SignUp_Form_form_email_label">Email</label>
            <input
                        id="email"
                        class="SignUp_Form_form_email"
                        type="text"
                        name="newPassword"
                        onChange={(e)=>{setEmail(e.target.value)}}
                        value={email}
                        />
                    <span className={`SignUp_Form_error_email ${(error)? ('error_visible') :('')}`}
                        >Email cannot be blank</span>
                    <button type='submit' className="SignUp_Form_Submit ">Create New Password</button>
        </form>
    );
}
export default CreatePassWord;