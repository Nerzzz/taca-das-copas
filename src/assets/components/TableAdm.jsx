import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase.config'

import "../styles/TableAdm.css"

function TableAdm() {
    const [salas, setSalas] = useState([])

    async function carregarSalas() {
        const querySnapshot = await getDocs(collection(db, "salas"));
        const listaSalas = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        // Ordenar por número no início da turma (ex: "3º Desenvolvimento de Sistemas")
        listaSalas.sort((a, b) => {
            const numeroA = parseInt(a.turma)
            const numeroB = parseInt(b.turma)
            return numeroA - numeroB
        });

        setSalas(listaSalas)
    }

    useEffect(() => {
        carregarSalas()
    }, [])

    return (
        <>
            <button className='w-fit flex gap-[5px] font-sora font-[500] items-center cursor-pointer underline' onClick={carregarSalas}>
                <i className="bi-arrow-clockwise text-[15pt]"/>
                <span>Recarregar</span> 
            </button>
            <table className='mt-[10px]'>
                <tbody>
                    <tr className='table_header'>
                        <th>Turma</th>
                        <th>Pontos</th>
                        <th>Editar</th>
                    </tr>

                    {salas.map((sala) => (
                        <tr key={sala.id}>
                            <td>{sala.turma}</td>
                            <td>{sala.pontos}</td>
                            <td className='flex md:flex-row flex-col md:justify-evenly gap-[30px] items-center'>
                                <Link
                                    className='bi-pencil-fill text-[16pt] text-blue-400'
                                    to={`/editar/${sala.id}`}
                                />
                                <button className='bi-trash-fill cursor-pointer text-[16pt] text-red-500'/>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default TableAdm