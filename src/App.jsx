import './App.scss'
import Home from './pages/Home'
import Welcome from './pages/Welcome'
import Register from './pages/Register'
import Login from './pages/Login'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
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
