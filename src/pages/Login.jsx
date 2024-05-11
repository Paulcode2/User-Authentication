import {useState} from 'react'
import fb from '../assets/fb icon.png'
import ig from '../assets/ig icon.png'
import Back from '../assets/Back.png'
import view from '../assets/image 1.png'
import { Link,useNavigate } from 'react-router-dom'
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../firebaseauth'
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye'
import {Icon} from 'react-icons-kit';


const Login = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/home")
        console.log(user);
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
    });
   
}

const handleToggle = () => {
  if (type==='password'){
     setIcon(eye);
     setType('text')
  } else {
     setIcon(eyeOff)
     setType('password')
  }
}

const handleBack = () =>{
  navigate('../register')
 }
  return (
<div className='login'>
      <div className="circle">
      <span onClick={handleBack}>
      <img src={Back} alt="" />
      </span>
        <small>Login Now</small>
      </div>
      <div className="content">
        <span>Please login to continue using our app.</span>
        <div className="socials">
          {/* <span>Enter Via Social Networks</span> */}
          <span>Enter Via Social Networks</span>
        <div className="s-links">
          <img src={fb} alt="" />
          <img src={ig} alt="" />
        </div>
        </div>
        <div className="login">
          <div className="text">
          <span>OR</span>
          <small> login with email</small>
          <form onSubmit={handleLogin}>
            <input type="email" 
             required                                                                                
             onChange={(e)=>setEmail(e.target.value)}
            />
            <div className="password">
            <input 
            type={type}
            name='password'
            required                                                                                
            onChange={(e)=>setPassword(e.target.value)}
            placeholder='........'/>
            {/* <img src={view} alt="" /> */}
            <span className='img' onClick={handleToggle}>
            <Icon icon={icon} />
            </span>
            </div>
            <div className="check">
            <a href="#">
            <span>Forget Password?</span>
            </a>
            </div>
            <div className="btn">
            <button>Login</button>
            </div>
          </form>
          </div>
        </div>
        <footer>
        <p>You already have an account? <Link to='/register'>Sign up</Link></p>
        </footer>
      </div>
    </div>
  )
}

export default Login
