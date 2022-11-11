import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ButtonAppBar from './pages/AppBar'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
const App = () => {
  return (
    <>
    <ButtonAppBar/>
     <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/login" element={<SignIn />} />
    </Routes>
    </>
   
  )
}

export default App