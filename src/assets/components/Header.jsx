import React from 'react'
import { Link } from 'react-router'

function Header() {
    return (
        <header className='z-[100] flex justify-between p-[20px] top-0 sticky border-b-[1px] border-b-light-gray items-center bg-white'>
            <span className='font-sora text-[16pt]'>Taça das Copas</span>
            <Link to='/administrativo' className='bg-light-gray px-[15px] py-[8px] rounded-[5px] font-sora transition duration-150 ease-in-out hover:bg-linear-to-l hover:from-orange-10 hover:to-orange-20 text-[11pt] font-medium hover:text-white hidden sm:flex'>Área administrativa</Link>

            <Link to='/administrativo' className='bg-light-gray p-[8px] rounded-[5px] font-sora transition duration-150 ease-in-out hover:bg-linear-to-l hover:from-orange-10 hover:to-orange-20 text-[11pt] font-medium hover:text-white flex sm:hidden'>ADM</Link>
        </header>
    )
}

export default Header