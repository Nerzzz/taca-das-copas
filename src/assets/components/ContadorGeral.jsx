import React from 'react'

function ContadorGeral() {
    var pontos = 0
    var salas = 0

    return (
        <div className='bg-white z-[10] rounded-[10px] justify-center p-[25px] flex flex-col gap-[25px] border-light-gray border-[1px] w-[100%] xl:h-fit'>
            <div>
                <h1 className='text-gray-400 font-sora text-[10pt] font-light'>Número de Salas</h1>
                <p className='font-roboto text-[18pt]'>{salas}</p>
            </div>
            <div>
                <h1 className='text-gray-400 font-sora text-[10pt] font-light'>Pontuação Global</h1>
                <p className='font-roboto text-[18pt]'>{pontos} pontos</p>
            </div>
        </div>
    )
}

export default ContadorGeral