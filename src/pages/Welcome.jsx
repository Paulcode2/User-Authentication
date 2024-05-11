import React from 'react'
import Back from '../assets/Back.png'
import fb from '../assets/fb icon.png'
import ig from '../assets/ig icon.png'
import { Link, useNavigate } from 'react-router-dom'
// import Register from './Register'

const Welcome = () => {
  const navigate = useNavigate();

  const handleBack = () =>{
    navigate('./home')
   }
  return (
    <div className='welcome'>
      <div className="circle">
        <span onClick={handleBack}>
        <img src={Back} alt="" />
        </span>
        <div className="text">
        <span>Welcome</span>
        <small>Please login or sign up to continue <br />using our app.</small>
        </div>
      </div>
      <div className="contents">
        <div className="socials">
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
          </div>

          <Link to='/register'>
          <button>Sign up</button>
          </Link>
        </div>
        <div className="footer">
          <p>You already have an account? <Link to='/login'>Login</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Welcome
