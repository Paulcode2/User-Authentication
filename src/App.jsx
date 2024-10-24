import './App.scss'
import Home from './pages/Home'
import Welcome from './pages/Welcome'
import Register from './pages/Register'
import Login from './pages/Login'
import Reset from './pages/Reset'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  // const navigate = useNavigate();
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Welcome/>}/>
      <Route path='/register' element = {<Register/>}/>
      <Route path='/login' element = {<Login/>}/>
      <Route path='/home' element = {<Home/>}/>
      <Route path='/reset' element={<Reset/>} />
    </Routes>
    </BrowserRouter>
      {/* <Home /> */}
      {/* <Welcome /> */}
      {/* <Register /> */}
      {/* <Login /> */}
    </>
  )
}

export default App
