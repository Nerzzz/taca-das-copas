import React from 'react'

function Podio() {
    return (
        <div className='flex flex-row items-end justify-center gap-[20px] mt-[50px]'>
            <div className='flex flex-col items-center gap-[20px]'>
                <h1 className='text-[16pt] font-sora font-medium'>3º DS</h1>
                <div className='bg-linear-to-b from-orange-300 to-orange-400 p-[30px] flex flex-col justify-center w-fit text-center shadow'>
                    <span className='text-white text-[24pt] font-sora font-extrabold'>3º</span>
                </div>
            </div>
            <div className='flex flex-col items-center gap-[20px]'>
                <h1 className='text-[16pt] font-sora font-medium'>3º DS</h1>
                <div className='bg-linear-to-b from-yellow-400 to-yellow-500 p-[30px] h-[200px] flex flex-col justify-between items-center w-[100px] text-center gap-[20px] shadow'>
                    <i className='bi bi-award-fill text-white text-[24pt]' />
                    <span className='text-white text-[24pt] font-sora font-extrabold'>1º</span>
                </div>
            </div>
            <div className='flex flex-col items-center gap-[20px]'>
                <h1 className='text-[16pt] font-sora font-medium'>3º DS</h1>
                <div className='bg-linear-to-b from-gray-300 to-gray-400 p-[30px] pt-[70px] flex flex-col justify-center w-fit text-center shadow'>
                    <span className='text-white text-[24pt] font-sora font-extrabold'>2º</span>
                </div>
            </div>
        </div>
    )
}

export default Podio