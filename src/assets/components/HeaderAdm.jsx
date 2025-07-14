import React from 'react'
import { useNavigate } from 'react-router-dom'

import { signOut } from 'firebase/auth'
import { auth } from '../../firebase.config'

function HeaderAdm() {

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
        <header className='z-[100] flex justify-between p-[20px] top-0 sticky border-b-[1px] border-b-light-gray items-center bg-white'>
            <span className='font-sora text-[16pt]'>Taça das Copas | Área Administrativa</span>
            <button onClick={handleLogout} className='bg-light-gray text-[11pt] text-black p-[8px] rounded-[5px] hover:bg-linear-to-r hover:from-red-400 hover:to-red-600 px-[15px] py-[5px] font-sora hover:text-white font-[600] cursor-pointer transition duration-150 ease-in-out'>Logout</button>
        </header>
    )
}

export default HeaderAdm