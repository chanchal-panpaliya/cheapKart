//react
import { useState ,useRef,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
//css
import './Auth.css';
//img
import loginImg from '../../img/login-image.png';
//api
import { handleRegistration ,handleLogin} from '../../useEffect/useEffectCart';
//context
import CartContext from '../../context/cart/CartContext';


const AuthModal=(props)=>{
  
   return(
    <div className='modal'>
        <div className="modal-container">
            <div className='modal-left-side'>
                <h2> {props.HeadingLabel} </h2>
                <h4> {props.SubHeadingLabel} </h4>
                <img className='modal-left-side-img' src={loginImg}/>
            </div>  
            <div className='modal-right-side'>
                <div className='modal-right-flex-row'>
                   {props.data}       
                </div> 
            </div>
            <button className='modal-close-modal' onClick={props.onClose}> <i class="fa-solid fa-xmark"></i> </button>
        </div>
    </div> 
   ) 
}


const testCredentials = {
    email: 'adarshbalika@gmail.com',
    password: 'adarshbalika',
    rememberMe: true,
  };

  const formInitialState = {
    email: '',
    password: '',
    rememberMe: false,
  };

const Login=(props)=>{
    const [formData, setFormData] = useState(formInitialState);
    const { email, password, rememberMe } = formData;
    const [hideshowpassword,sethideshowpassword]=useState(false);
    const navigator = useNavigate();
    const [error, setError] = useState("");


    const handleInput = (e) =>
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));

  const handleToggle = (e) =>
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.checked,
    }));


const handleLoginLocal =()=>{
    //local login
    if(email === "adarshbalika@gmail.com" && password==="adarshbalika"){
        let data = [{
            id:1,
            FirstName:"Adarsh",
            LastName:"Balika",
            email:"adarshbalika@gmail.com",
            password:"adarshbalika"
        }]
        localStorage.setItem("login", JSON.stringify(data));
        setError("")
        props.onClose()
        navigator("/") 
    }else{
        setError("username and password not match with testCredentials")
    }
}


    return(
        <div className='flex-col'>
            <h4>  Login </h4>
            <section>
                    <div className="flex-row  col-gap-2rem textField-container">  
                        <input type="email" name="email" value={email} placeholder="johndoe@gmail.com" autocomplete="off" className="text-input" 
                        onChange={handleInput} required/>
                        <label className="text-placeholder"> Email Id </label>                                                
                    </div>

                    <div className="flex-row  col-gap-2rem textField-container">  
                        <input type= {hideshowpassword?"text":"password"} name="password" value={password} className="text-input" autocomplete="off" 
                        onChange={handleInput} required/>
                         <input type="checkbox" className="check-show-password" value={hideshowpassword} onChange={(e)=>{sethideshowpassword(!hideshowpassword)}}/> 
                        <label className="text-placeholder"> Password </label>                                                
                    </div>
                    <div>
                      <input onChange={handleToggle} type='checkbox' name='rememberMe' id='remember-me' checked={rememberMe}/>
                        <span> 
                           Remember me
                        </span>
                    </div>

                    {email && password && (
                        <button type='submit' className={'button button-login'} onClick={handleLoginLocal}> Login with credentials</button>
                    )}

                    
                    
            </section> 
               <br/><br/>
              <button type='button' onClick={() =>  setFormData(testCredentials)} className={'button button-login'}>  Use test credentials </button>
               
              {error}
            <div className='flex-row flex-justify-content-flex-space-between typology-padding-top'>
                <a  onClick={props.FPopen}> forgot password ? </a>
                <a  onClick={props.Ropen}> Registartion </a>
            </div>
           

        </div>
    )
}

const Registration=(props)=>{
    const [firstname,setName] = useState("");
    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");
    const [retypedPassword, setRetypedPassword] = useState("");
    const [error, setError] = useState("");
    const [lastname,setLastName]=useState("");
    const [termsAndConditions,settermsAndConditions]=useState(false);
    const [hideshowpassword,sethideshowpassword]=useState(false);
    const [hideshow_rety_Pass,Sethideshow_rety_Pass]=useState(false);


    const validateemail=(e)=>{
        const emailRegex = /\S+@\S+\.\S+/;
        setEmailId(e.target.value)
        if (!emailRegex.test(e.target.value.toLowerCase())) {
            setError("Enter a valid email address");
        } else {
            setError("");
        }
    }



    const handleSubmit=(e)=>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = {};

        for (let x of formData) {
          data[x[0]] = x[1];
        }
       
        handleRegistration(data).then(function(result){
            console.log(result)       
         });   

    }  
    
 

    return(
    <div className='flex-col'>
        <h4> Registration </h4>
          <form onSubmit={handleSubmit}> 
            <div className="flex-row  col-gap-2rem textField-container">  
                <input type="text" name="firstName" value={firstname} placeholder="John" className="text-input" onChange={(e)=>{setName(e.target.value)}} required/>
                <label className="text-placeholder"> Enter First Name </label>                                                
            </div>

             <div className="flex-row  col-gap-2rem textField-container">  
                <input type="text" name="lastName" value={lastname} placeholder="Doe" className="text-input" onChange={(e)=>{setLastName(e.target.value)}} required/>
                <label className="text-placeholder"> Enter Last Name </label>                                                
            </div>    
            
            <div className="flex-row  col-gap-2rem textField-container">  
                <input type="email" name="email" value={emailId} placeholder="johndoe@gmail.com" autocomplete="off" className="text-input" onChange={(e)=>validateemail(e)} required/>
                <label className="text-placeholder"> Email Id </label>                                                
            </div>

            <div className="flex-row  col-gap-2rem textField-container">  
                <input type= {hideshowpassword?"text":"password"} name="password" value={password} className="text-input" autocomplete="off" onChange={(e)=>{setPassword(e.target.value)}} required/>
                <input type="checkbox" className="check-show-password" value={hideshowpassword} onChange={(e)=>{sethideshowpassword(!hideshowpassword)}}/> 
                <label className="text-placeholder"> Password </label>                                                
            </div>

            <div className="flex-row  col-gap-2rem textField-container">  
                <input type={hideshow_rety_Pass?"text":"password"} value={retypedPassword} className="text-input" onChange={(e)=>{setRetypedPassword(e.target.value)}} required/>
                <input type="checkbox" className="check-show-password" value={hideshow_rety_Pass} onChange={(e)=>{Sethideshow_rety_Pass(!hideshow_rety_Pass)}}/> 
                <label className="text-placeholder"> Confirm password </label>                                             
            </div>

            <div className="flex-row  col-gap-2rem textField-container">  
               <input  type='checkbox' name="termsAndConditions" checked={termsAndConditions} onChange={()=>settermsAndConditions(!termsAndConditions)}/>  
               <span> I accept all Terms & Conditions </span>                                         
            </div>
         
                {(password!==retypedPassword) && (retypedPassword!=="") ? "password not matched" : ""}  
                 <br/>
                {error}


                {firstname && lastname && emailId && password && retypedPassword && password===retypedPassword && !error && termsAndConditions && (
                        <button className={'button button-login'} type="submit"> sign up  </button>
                )}
                
        </form>  

             <a onClick={props.Lopen} > Already have account? </a>

        </div>
    )
}

const ForgotPassword=(props)=>{
    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");
    const [retypedPassword, setRetypedPassword] = useState("");
    const [hideshowpassword,sethideshowpassword]=useState(false);
    const [hideshow_rety_Pass,Sethideshow_rety_Pass]=useState(false);

    return(
        <div className='flex-col'>
             <h4> ForgotPassword </h4>
             <form> 
                <div className="flex-row  col-gap-2rem textField-container">  
                    <input type="email" name="email" value={emailId} placeholder="johndoe@gmail.com" autocomplete="off" className="text-input" onChange={(e)=>setEmailId(e.target.value)} required/>
                    <label className="text-placeholder"> Email Id </label>                                                
                </div>

                <div className="flex-row  col-gap-2rem textField-container">  
                    <input type= {hideshowpassword?"text":"password"} name="password" value={password} className="text-input" autocomplete="off" onChange={(e)=>{setPassword(e.target.value)}} required/>
                    <input type="checkbox" className="check-show-password" value={hideshowpassword} onChange={(e)=>{sethideshowpassword(!hideshowpassword)}}/> 
                    <label className="text-placeholder"> Password </label>                                                
                </div>

                <div className="flex-row  col-gap-2rem textField-container">  
                    <input type={hideshow_rety_Pass?"text":"password"} value={retypedPassword} className="text-input" onChange={(e)=>{setRetypedPassword(e.target.value)}} required/>
                    <input type="checkbox" className="check-show-password" value={hideshow_rety_Pass} onChange={(e)=>{Sethideshow_rety_Pass(!hideshow_rety_Pass)}}/> 
                    <label className="text-placeholder"> Confirm password </label>                                             
                </div>
                
                {emailId && password && retypedPassword && password===retypedPassword && (
                        <button className={'button button-login'} type="submit"> Forgot Password  </button>
                )}

            </form>


            <div className='flex-row flex-justify-content-flex-space-between typology-padding-top'>
                <a  onClick={props.Lopen}> Login </a>
                <a  onClick={props.Ropen}> Registartion </a>
            </div>

        </div>
    )
}

const Logout=()=>{
    return(
        <div>
            Logout
        </div>
    )
}

export {Login,Registration,ForgotPassword,Logout,AuthModal}