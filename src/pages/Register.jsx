import React from 'react'
import fb from '../assets/fb icon.png'
import ig from '../assets/ig icon.png'
import Back from '../assets/Back.png'
import view from '../assets/image 1.png'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='register'>
      <div className="circle">
      <img src={Back} alt="" />
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
          <form>
            <input type="text" />
            <div className="password">
            <input type="password" placeholder='........'/>
            <img src={view} alt="" />
            </div>
            <div className="check">
            <input type="checkbox" />
            <span>I agree with privacy policy</span>
            </div>
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
