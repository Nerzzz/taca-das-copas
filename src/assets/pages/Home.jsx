import React from 'react'

function Home() {
    var pontos = 0
    var salas = 0

    return (
        <main className='px-[40px] my-[40px]'>
            <section id="dashboard">
                <h1 className='text-[20pt] font-sora font-semibold'>Dashboard</h1>
                <div className='flex gap-[20px] mt-[20px]'>
                    <table id='tabelaPontos' className='grow-[2]'>
                        <tr class='table_header'>
                            <th>Posição</th>
                            <th>Turmas competindo</th>
                            <th>Pontuação</th>
                        </tr>
                        <tr>
                            <td>0º</td>
                            <td>Terceiro Desenvolvimento de Sistemas</td>
                            <td>0 pontos</td>
                        </tr>
                        <tr>
                            <td>0º</td>
                            <td>Terceiro Desenvolvimento de Sistemas</td>
                            <td>0 pontos</td>
                        </tr>
                        <tr>
                            <td>0º</td>
                            <td>Terceiro Desenvolvimento de Sistemas</td>
                            <td>0 pontos</td>
                        </tr>
                        <tr>
                            <td>0º</td>
                            <td>Terceiro Desenvolvimento de Sistemas</td>
                            <td>0 pontos</td>
                        </tr>
                        <tr>
                            <td>0º</td>
                            <td>Terceiro Desenvolvimento de Sistemas</td>
                            <td>0 pontos</td>
                        </tr>
                        <tr>
                            <td>0º</td>
                            <td>Terceiro Desenvolvimento de Sistemas</td>
                            <td>0 pontos</td>
                        </tr>
                        <tr>
                            <td>0º</td>
                            <td>Terceiro Desenvolvimento de Sistemas</td>
                            <td>0 pontos</td>
                        </tr>
                        <tr>
                            <td>0º</td>
                            <td>Terceiro Desenvolvimento de Sistemas</td>
                            <td>0 pontos</td>
                        </tr>
                        <tr>
                            <td>0º</td>
                            <td>Terceiro Desenvolvimento de Sistemas</td>
                            <td>0 pontos</td>
                        </tr>
                        <tr>
                            <td>0º</td>
                            <td>Terceiro Desenvolvimento de Sistemas</td>
                            <td>0 pontos</td>
                        </tr>
                        <tr>
                            <td>0º</td>
                            <td>Terceiro Desenvolvimento de Sistemas</td>
                            <td>0 pontos</td>
                        </tr>
                        <tr>
                            <td>0º</td>
                            <td>Terceiro Desenvolvimento de Sistemas</td>
                            <td>0 pontos</td>
                        </tr>
                        <tr>
                            <td>0º</td>
                            <td>Terceiro Desenvolvimento de Sistemas</td>
                            <td>0 pontos</td>
                        </tr>
                    </table>
                    <div className='flex flex-col grow-[0.5] w-[20%] gap-[20px]'>
                        <div className='bg-white rounded-[10px] h-fit p-[25px] flex flex-col gap-[25px] border-light-gray border-[1px]'>
                            <div>
                                <h1 className='text-gray-400 font-sora text-[10pt] font-light'>Número de Salas</h1>
                                <p className='font-roboto text-[18pt]'>{salas}</p>
                            </div>
                            <div>
                                <h1 className='text-gray-400 font-sora text-[10pt] font-light'>Pontuação Global</h1>
                                <p className='font-roboto text-[18pt]'>{pontos} pontos</p>
                            </div>
                        </div>
                        <div className='bg-linear-to-r from-orange-10 to-orange-20 rounded-[10px] h-[100%] p-[25px] flex flex-col gap-[10px] border-light-gray border-[1px] justify-center items-center text-white'>
                            <h1 className='font-sora text-[15pt] font-[600]'>Como funciona a pontuação?</h1>
                            <p className='font-roboto text-[12pt]'>Clique no botão abaixo para entender</p>
                            <a href="" className='bg-white text-black py-[12px] px-[20px] mt-[20px] rounded-full font-sora font-[600] text-[12pt]'>Sistema de Pontos</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home