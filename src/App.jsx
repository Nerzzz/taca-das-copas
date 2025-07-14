import React from 'react'
import { Route, Routes, BrowserRouter, useLocation } from 'react-router-dom'
import './App.css'

import Header from './assets/components/Header'
import HeaderAdm from './assets/components/HeaderAdm'
import Home from './assets/pages/Home'
import Login from './assets/pages/Login'
import Admin from './assets/pages/Admin'
import PrivateRoute from './PrivateRoute'

function AppContent() {
  const location = useLocation()
  let hideHeader = false
  let hideAdmHeader = true
  if(location.pathname === '/login'){
    hideHeader = true;
    hideAdmHeader = true
  }
  if(location.pathname === '/administrativo'){
    hideHeader = true;
    hideAdmHeader = false
  }

  return (
    <>
      {!hideHeader && <Header />}
      {!hideAdmHeader && <HeaderAdm />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/administrativo"
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
