import React ,{useState , useEffect} from "react";
import './styles/footer.css'

const Footer=()=>{
    const[name , setName]= useState('')
    const[email , setEmail]= useState('')
    const[subject , setSubject]= useState('')
    const[message , setMessage]= useState('')

    const API_URL = `https://boring-fe.herokuapp.com/comments`;

    const submitHandler=(e)=>{
        e.preventDefault(); 
        const requestData = new FormData(e.target);
        fetch( API_URL ,{
                method:"POST",
                body:requestData})
                .then((res)=>{return res.json()})
                .then((data)=>{console.log(data)})
                setName('');
                setEmail('');
                setSubject('');
                setMessage('');
                
    }
    return(
        <div className="Footer">
           <div className="Footer_contuctMe">
               <h1 className="Footer_contuctMe_header_text">CONTUCT ME</h1>
               <div className="Footer_contuctMe_main">
                    <h1 className="Footer_contuctMe_main_text">WRITE OR CALL ME IF YOU</h1>
                    <h1 className="Footer_contuctMe_main_text">HAVE MORE QUESTIONS</h1>
                </div>
                <div className="Footer_contuctMe_main_below">
                    <h1 className="Footer_contuctMe_main_text">INFO@MYSITE.COM</h1>
                    <h1 className="Footer_contuctMe_main_text">123-456-7890</h1>
                </div>
                <div className="Footer_contuctMe_socials">
                   <button className="Footer_contuctMe_socials_link"><i className="fab fa-facebook-f"></i></button>
                   <button className="Footer_contuctMe_socials_link"><i className="fab fa-twitter"></i></button>
                   <button className="Footer_contuctMe_socials_link"><i className="fab fa-instagram"></i></button>
                </div>
           </div>
           <div className="Footer_Form">
               <form className="Footer_Form_main"  onSubmit={submitHandler}>
                    <input
                        class='Footer_Form_main_input'
                        type="text"
                        name="name"
                        onChange={(e)=>{setName(e.target.value)}}
                        value={name}
                        placeholder='Name'
                        required
                        
                    />
                    <input
                        class='Footer_Form_main_input'
                        type="text"
                        name="email"
                        onChange={(e)=>{setEmail(e.target.value)}}
                        value={email}
                        placeholder='Email'
                        required
                    />
                    <input
                        class='Footer_Form_main_input'
                        type="text"
                        name="subject"
                        onChange={(e)=>{setSubject(e.target.value)}}
                        value={subject}
                        placeholder='Subject'
                        required
                    />
                    <textarea name="Message" className='Footer_Form_main_textarea'
                    rows="1" placeholder='Message' required
                        onChange={(e)=>{setMessage(e.target.value)}}
                        value={message}
                    ></textarea>
                    <button type='submit' className='Footer_Form_main_submit'>Submit</button>
                    <h1 className="Footer_Form_main_below">©2023 BY JOEY DIXON. PROUDLY CREATED WITH WIX.COM</h1>
               </form>
           </div>
           <button  className='Footer_up'
                    onClick={()=>{window.scrollTo({top: 0,behavior: 'smooth'})}}
            ><i className="fas fa-chevron-up"></i></button>
        </div>
    );
}
export default Footer;