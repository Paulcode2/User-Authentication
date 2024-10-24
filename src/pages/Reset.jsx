import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebaseauth";

const Reset = () => {


  const handleSubmit = async(e)=>{
    e.preventDefault()
    const emailVal = e.target.email.value;
    sendPasswordResetEmail(auth, emailVal).then(data=>{
      alert("Check your email")
    }).catch(err=>{
      alert(err.code)
    })
  }

  return (
    <div className='reset'>
      {/* <h1>Welcome</h1> */}
      <div className="form">
        <span>Reset Password</span>

        <form onSubmit={(e) => handleSubmit(e)}>
            <input 
            name="email"
            placeholder='Enter Email' />
            <div className="btn">
            <button>Submit</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Reset
