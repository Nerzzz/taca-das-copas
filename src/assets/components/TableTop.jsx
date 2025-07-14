import { useEffect, useState } from 'react'

import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase.config'

function TableTop() {

    const [salas, setSalas] = useState([])
    
    async function carregarSalas() {
        const querySnapshot = await getDocs(collection(db, "salas"))
        const listaSalas = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))
        setSalas(listaSalas)
    }

    useEffect(() => {
        carregarSalas()
    }, [])

    return (
        <table id='tabelaPontos' className='z-[1] shadow grow-[2]'>
            <tbody>
                <tr className='table_header'>
                    <th>Posição</th>
                    <th>Turma</th>
                    <th>Pontuação</th>
                </tr>
                {salas.map((sala) => (
                    <tr key={sala.id}>
                        <td>{sala.podio}º</td>
                        <td>{sala.turma}</td>
                        <td>{sala.pontos}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TableTop