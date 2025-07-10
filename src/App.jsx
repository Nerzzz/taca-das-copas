import React from 'react'
import { Route, Routes, BrowserRouter, useLocation } from 'react-router'
import './App.css'

import Header from './assets/components/Header'
import Home from './assets/pages/Home'
import Login from './assets/pages/Login'
import Admin from './assets/pages/Admin'
import PrivateRoute from './PrivateRoute'

function AppContent() {
  const location = useLocation()
  const hideHeader = location.pathname === '/login' || location.pathname === '/administrativo'

  return (
    <>
      {!hideHeader && <Header />}
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
