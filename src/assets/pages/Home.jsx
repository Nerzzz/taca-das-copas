import React from 'react'

function Home() {
    var pontos = 0
    var salas = 0

    return (
        <main className='px-[10px] md:px-[40px] my-[40px]'>
            <section id='podio'>
                <h1 className='text-[20pt] font-sora font-semibold'>Pódio</h1>
                <div className='flex flex-row items-end justify-center gap-[20px] h-[200px]'>
                    <div className='flex flex-col items-center gap-[20px]'>
                        <h1>3º DS</h1>
                        <div className='bg-linear-to-b from-orange-300 to-orange-400 p-[30px] flex flex-col justify-center'>
                            <span className='text-white text-[24pt] font-sora font-extrabold'>3</span>
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-[20px]'>
                        <h1>3º DS</h1>
                        <div className='bg-linear-to-b from-yellow-400 to-yellow-500 p-[30px] h-[100%] flex flex-col justify-center'>
                            <span className='text-white text-[24pt] font-sora font-extrabold'>1</span>
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-[20px]'>
                        <h1>3º DS</h1>
                        <div className='bg-linear-to-b from-gray-300 to-gray-400 p-[30px] h-[20%] flex flex-col justify-center'>
                            <span className='text-white text-[24pt] font-sora font-extrabold'>2</span>
                        </div>
                    </div>
                </div>
            </section>
            <section id="dashboard" className='mt-[100px]'>
                <h1 className='text-[20pt] font-sora font-semibold'>Dashboard</h1>
                <div className='flex flex-col xl:flex-row gap-[20px] mt-[20px]'>
                    <table id='tabelaPontos' className='grow-[2]'>
                        <tbody>
                            <tr className='table_header'>
                                <th>Posição</th>
                                <th>Turmas competindo</th>
                                <th>Pontuação</th>
                            </tr>
                            <tr>
                                <td>0º</td>
                                <td>3º Desenvolvimento de Sistemas</td>
                                <td>0 pontos</td>
                            </tr>
                            <tr>
                                <td>0º</td>
                                <td>3º Desenvolvimento de Sistemas</td>
                                <td>0 pontos</td>
                            </tr>
                            <tr>
                                <td>0º</td>
                                <td>3º Desenvolvimento de Sistemas</td>
                                <td>0 pontos</td>
                            </tr>
                            <tr>
                                <td>0º</td>
                                <td>3º Desenvolvimento de Sistemas</td>
                                <td>0 pontos</td>
                            </tr>
                            <tr>
                                <td>0º</td>
                                <td>3º Desenvolvimento de Sistemas</td>
                                <td>0 pontos</td>
                            </tr>
                            <tr>
                                <td>0º</td>
                                <td>3º Desenvolvimento de Sistemas</td>
                                <td>0 pontos</td>
                            </tr>
                            <tr>
                                <td>0º</td>
                                <td>3º Desenvolvimento de Sistemas</td>
                                <td>0 pontos</td>
                            </tr>
                            <tr>
                                <td>0º</td>
                                <td>3º Desenvolvimento de Sistemas</td>
                                <td>0 pontos</td>
                            </tr>
                            <tr>
                                <td>0º</td>
                                <td>3º Desenvolvimento de Sistemas</td>
                                <td>0 pontos</td>
                            </tr>
                            <tr>
                                <td>0º</td>
                                <td>3º Desenvolvimento de Sistemas</td>
                                <td>0 pontos</td>
                            </tr>
                            <tr>
                                <td>0º</td>
                                <td>3º Desenvolvimento de Sistemas</td>
                                <td>0 pontos</td>
                            </tr>
                            <tr>
                                <td>0º</td>
                                <td>3º Desenvolvimento de Sistemas</td>
                                <td>0 pontos</td>
                            </tr>
                            <tr>
                                <td>0º</td>
                                <td>3º Desenvolvimento de Sistemas</td>
                                <td>0 pontos</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='flex flex-col md:flex-row xl:flex-col grow-[0.5] xl:w-[20%] gap-[20px] w-auto'>
                        <div className='bg-white rounded-[10px] justify-center p-[25px] flex flex-col gap-[25px] border-light-gray border-[1px] w-[100%] xl:h-fit'>
                            <div>
                                <h1 className='text-gray-400 font-sora text-[10pt] font-light'>Número de Salas</h1>
                                <p className='font-roboto text-[18pt]'>{salas}</p>
                            </div>
                            <div>
                                <h1 className='text-gray-400 font-sora text-[10pt] font-light'>Pontuação Global</h1>
                                <p className='font-roboto text-[18pt]'>{pontos} pontos</p>
                            </div>
                        </div>
                        <div className='bg-linear-to-r from-orange-10 to-orange-20 rounded-[10px] xl:h-[100%] p-[25px] flex flex-col gap-[10px] border-light-gray border-[1px] justify-center items-center text-white'>
                            <h1 className='font-sora text-[15pt] font-[600]'>Como funciona a pontuação?</h1>
                            <p className='font-roboto text-[12pt]'>Clique no botão abaixo para entender</p>
                            <a href="" className='bg-white text-black py-[12px] px-[20px] mt-[20px] text-center rounded-full font-sora font-[600] text-[12pt]'>Sistema de Pontos</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home