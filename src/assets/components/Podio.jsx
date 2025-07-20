import React from 'react'
import { useEffect, useState } from 'react'

import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase.config'

function Podio() {

    const [top3, setTop3] = useState([]);

    useEffect(() => {
        async function carregarSalas() {
            const querySnapshot = await getDocs(collection(db, "salas"))
            const listaSalas = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))

            listaSalas.sort((a, b) => {
                const A = parseInt(a.pontos)
                const B = parseInt(b.pontos)
                return B - A
            });

            const topSalas = listaSalas.slice(0, 3)

            setTop3(topSalas)
        }

        carregarSalas()
    }, [])

    const todasZeradas = top3.every(sala => parseInt(sala.pontos) === 0);

    return (
        <>
            {top3[0] && !todasZeradas && (
            <div className='flex flex-row items-end justify-center gap-[20px] mt-[50px]'>
                <div className='flex flex-col items-center gap-[20px]'>
                    <h1 className='text-[16pt] font-sora font-medium'>{top3[2].abrv}</h1>
                    <div className='bg-linear-to-b from-orange-300 to-orange-400 p-[30px] flex flex-col justify-center w-fit text-center shadow'>
                        <span className='text-white text-[24pt] font-sora font-extrabold'>3º</span>
                    </div>
                </div>
                <div className='flex flex-col items-center gap-[20px]'>
                    <h1 className='text-[16pt] font-sora font-medium'>{top3[0].abrv}</h1>
                    <div className='bg-linear-to-b from-yellow-400 to-yellow-500 p-[30px] h-[200px] flex flex-col justify-between items-center w-[100px] text-center gap-[20px] shadow'>
                        <i className='bi bi-award-fill text-white text-[24pt]' />
                        <span className='text-white text-[24pt] font-sora font-extrabold'>1º</span>
                    </div>
                </div>
                <div className='flex flex-col items-center gap-[20px]'>
                    <h1 className='text-[16pt] font-sora font-medium'>{top3[1].abrv}</h1>
                    <div className='bg-linear-to-b from-gray-300 to-gray-400 p-[30px] pt-[70px] flex flex-col justify-center w-fit text-center shadow'>
                        <span className='text-white text-[24pt] font-sora font-extrabold'>2º</span>
                    </div>
                </div>
            </div>
        )}
        {todasZeradas && (
            <div className='flex flex-row items-end justify-center gap-[20px] mt-[50px]'>
                <h1 className='font-sora font-[600] text-[13pt]'>Nenhuma sala no pódio</h1>
            </div>
        )}
        </>
    )
}

export default Podio