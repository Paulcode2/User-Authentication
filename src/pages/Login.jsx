import React from 'react'
import fb from '../assets/fb icon.png'
import ig from '../assets/ig icon.png'
import Back from '../assets/Back.png'
import view from '../assets/image 1.png'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
<div className='login'>
      <div className="circle">
      <img src={Back} alt="" />
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
          <form>
            <input type="text" />
            <div className="password">
            <input type="password" placeholder='........'/>
            <img src={view} alt="" />
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
