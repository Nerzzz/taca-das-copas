import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase.config'
import { useNavigate } from 'react-router-dom'

function Admin() {
  const navigate = useNavigate()

  function handleLogout() {
    signOut(auth)
      .then(() => {
        navigate('/login')
      })
      .catch((error) => {
        console.error('Erro ao deslogar:', error)
      })
  }

  return (
    <div className="flex flex-col items-center justify-center h-[80vh] gap-4">
      <h1 className="text-xl font-bold">Área Administrativa</h1>

      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
      >
        Sair
      </button>
    </div>
  )
}

export default Admin