import {useState} from 'react'
import fb from '../assets/fb icon.png'
import ig from '../assets/ig icon.png'
import Back from '../assets/Back.png'
// import view from '../assets/image 1.png'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebaseauth'
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye'
import {Icon} from 'react-icons-kit';

const Register = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);
  // const [showPassword, setShowPassword] = useState(false);


  const HandleSubmit = async (e) => {
    e.preventDefault()
   
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/login")
          // ...
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          // ..
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
  navigate('../')
 }
  return (
    <div className='register'>
      <div className="circle">
      <span onClick={handleBack}>
      <img src={Back} alt="" />
      </span>
        <small>Sign Up</small>
      </div>
      <div className="content">
        <span>Please Registration with email and <br />sign up to continue using our app.</span>
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
          <form onSubmit={HandleSubmit}>
            <input type="email" 
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}  
            />
            <div className="password">
            <input 
            type={type}
            name='password'
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            placeholder='........'/>
            {/* <img src={view} alt="" /> */}
            <span className='img' onClick={handleToggle}>
            <Icon icon={icon} />
            </span>
            </div>
            {/* <div className="check">
            <input type="checkbox" />
            <span>I agree with privacy policy</span>
            </div> */}
            <div className="btn">
            <button>Sign up</button>
            </div>
          </form>
          </div>
        </div>
        <div className="footer">
          <p>You already have an account? <Link to='/login'>Login</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Register
