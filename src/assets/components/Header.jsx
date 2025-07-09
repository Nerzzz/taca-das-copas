import React from 'react'

function Header() {
    return (
        <header className='flex justify-between p-[20px] top-0 sticky border-b-[1px] border-b-light-gray items-center bg-white'>
            <span className='font-sora text-[16pt]'>Taça das Copas</span>
            <a href="" className='bg-light-gray px-[15px] py-[8px] rounded-[5px] font-roboto transition duration-150 ease-in-out hover:bg-linear-to-l hover:from-orange-10 hover:to-orange-20 text-[11pt] font-medium hover:text-white'>Área administrativa</a>
        </header>
    )
}

export default Header