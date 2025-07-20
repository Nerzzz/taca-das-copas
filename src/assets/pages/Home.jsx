import React from 'react'
import TableTop from '../components/TableTop'
import ContadorGeral from '../components/ContadorGeral'
import Podio from '../components/Podio'

function Home() {
    return (
        <main className='px-[10px] md:px-[40px] my-[40px]'>
            <section id='podio'>
                <h1 className='text-[20pt] font-sora font-semibold'>Pódio</h1>
                <Podio />
            </section>
            <section id="dashboard" className='mt-[100px]'>
                <h1 className='text-[20pt] font-sora font-semibold'>Dashboard</h1>
                <div className='flex flex-col xl:flex-row gap-[20px] mt-[20px]'>
                    <TableTop />
                    <div className='flex flex-col md:flex-row xl:flex-col grow-[0.5] xl:w-[20%] gap-[20px] w-auto'>
                        <ContadorGeral />
                        <div className='shadow bg-linear-to-r from-orange-10 to-orange-20 rounded-[10px] xl:h-[100%] p-[25px] flex flex-col gap-[10px] border-light-gray border-[1px] justify-center items-center text-white'>
                            <h1 className='font-sora text-[15pt] font-[600]'>Como funciona a pontuação?</h1>
                            <p className='font-roboto text-[12pt]'>Clique no botão abaixo para entender</p>
                            <a onClick={() => alert("W.I.P")} className='cursor-pointer bg-white text-black py-[12px] px-[20px] mt-[20px] text-center rounded-full font-sora font-[600] text-[12pt]'>Sistema de Pontos</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home