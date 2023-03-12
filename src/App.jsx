import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { LoginPage } from './views/login'
import { SignUpPage } from './views/signup'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
<div className='flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
    <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  </Router>
  </div>
  

  )
}

export default App
