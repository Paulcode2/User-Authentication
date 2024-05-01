import React from 'react'
import Back from '../assets/Back.png'
import fb from '../assets/fb icon.png'
import ig from '../assets/ig icon.png'

const Welcome = () => {
  return (
    <div className='welcome'>
      <div className="circle">
        <img src={Back} alt="" />
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

          <button>Sign up</button>
        </div>
        <div className="footer">
          <p>You already have an account? <a href="#">Login</a></p>
        </div>
      </div>
    </div>
  )
}

export default Welcome
