import { useEffect, useState } from 'react'

import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore'
import { db } from '../../firebase.config'

import FormEdit from './FormEdit'

import "../styles/TableAdm.css"

function TableAdm() {
    const [salas, setSalas] = useState([])
    const [salaSelecionada, setSalaSelecionada] = useState(null)

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

    async function deletarSala(id) {
        const refDoc = doc(db, "salas", id);
        try {
            await deleteDoc(refDoc);
            alert("Sala deletada com sucesso!");
            carregarSalas();
        } catch (error) {
            console.error("Erro ao deletar sala:", error);
            alert("Erro ao deletar sala!");
        }
    }

    useEffect(() => {
        carregarSalas()
    }, [])

    useEffect(() => {
        carregarSalas();
    }, [salaSelecionada]);

    return (
        <>
            <button className='w-fit flex gap-[5px] font-sora font-[500] items-center cursor-pointer underline' onClick={carregarSalas}>
                <i className="bi-arrow-clockwise text-[15pt]"/>
                <span>Recarregar</span> 
            </button>
            <table className='mt-[10px]'>
                <tbody>
                    <tr className='table_header'>
                        <th>ID</th>
                        <th>Turma</th>
                        <th>Pontos</th>
                        <th>Editar</th>
                    </tr>

                    {salas.map((sala) => (
                        <tr key={sala.id}>
                            <td>{sala.id}</td>
                            <td>{sala.turma}</td>
                            <td>{sala.pontos}</td>
                            <td className='flex md:flex-row flex-col md:justify-evenly gap-[30px] items-center'>
                                <button
                                    className='cursor-pointer bi-pencil-fill text-[16pt] text-blue-400'
                                    onClick={() => setSalaSelecionada(sala)}
                                    title='Modificar'
                                />
                                <button className='bi-trash-fill cursor-pointer text-[16pt] text-red-500' onClick={() => deletarSala(sala.id)}/>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {salaSelecionada && (
                <FormEdit
                    sala={salaSelecionada}
                    onClose={() => setSalaSelecionada(null)}
                />
            )}
        </>
    )
}

export default TableAdm