import { useState, useEffect } from 'react'

import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../../firebase.config'

function FormEdit({sala, onClose}) {

    const [turma, setTurma] = useState('')
    const [abrv, setAbrv] = useState('')
    const [pontos, setPontos] = useState(0)

    const [metodo, setMetodo] = useState('')

    useEffect(() => {
        if (sala) {
            setTurma(sala.turma)
            setAbrv(sala.abrv)
        }
    }, [sala])

    function handleSubmit(e) {
        e.preventDefault()

        if (turma.trim() === '' || abrv.trim() === '') {
            alert("Valores não devem estar vazios!")
            return
        }

        let novaPontuacao = sala.pontos

        const input = parseInt(pontos)
        
        if (!isNaN(input) && input > 0) {
            if (metodo !== 'add' && metodo !== 'sub') {
                alert("Escolha um método!")
                return
            }

        novaPontuacao = metodo === 'add' 
            ? sala.pontos + input 
            : sala.pontos - input
    }

    atualizarPontuacao(sala.id, novaPontuacao)
    onClose()
}

    async function atualizarPontuacao(id, novaPontuacao) {
        const refDoc = doc(db, "salas", id);
        try {
            await updateDoc(refDoc, {
                turma: turma,
                abrv: abrv,
                pontos: novaPontuacao
            });
            alert("Valores atualizados com sucesso!");
        } catch (error) {
            alert("Erro ao atualizar documento:", error);
        }
    }

    return (
        <section className='fixed top-0 left-0 w-[100vw] h-[100vh] z-[100] bg-[#4444447e] flex justify-center items-center'>
            <div className='bg-white px-[20px] py-[30px] md:w-[40%] w-[80%]'>
                <div className='flex justify-between items-center gap-[40px]'>
                    <h1 className='font-sora font-[600] text-[14pt]'>Editando: {sala.abrv}</h1>
                    <button className='bi-x text-[24pt] text-black cursor-pointer' onClick={onClose} />
                </div>
                <form onSubmit={handleSubmit} className='flex flex-col gap-[25px] mt-[20px]'>
                    <input
                        type="text"
                        placeholder="Turma (ex: 2º Automação)"
                        value={turma}
                        onChange={e => setTurma(e.target.value)}
                        className='py-[5px] px-[10px] bg-gray-100 font-poppins text-[12pt] outline-none focus:border-orange-10 border-[1px] border-gray-300 rounded-[5px]'
                    />
                    <input
                        type="text"
                        placeholder="Abreviação (ex: 2º DS)"
                        value={abrv}
                        onChange={e => setAbrv(e.target.value)}
                        className='py-[5px] px-[10px] bg-gray-100 font-poppins text-[12pt] outline-none focus:border-orange-10 border-[1px] border-gray-300 rounded-[5px]'
                    />
                    
                    <div className='flex flex-col mt-[30px]'>
                        <div>
                            <h1 className='font-sora font-[400] text-[11pt] text-gray-300'>Pontos Atuais</h1>
                            <p className='font-poppins font-[600] text-[24pt]'>{sala.pontos}</p>
                        </div>
                        <input
                            type="number"
                            placeholder="Quantidade de Pontos"
                            onChange={e => setPontos(e.target.value)}
                            className='py-[5px] px-[10px] bg-gray-100 font-poppins text-[12pt] outline-none focus:border-orange-10 border-[1px] border-gray-300 rounded-[5px] mt-[30px]'
                        />
                        <div className="flex md:flex-row flex-col gap-[20px] mt-[10px]">
                            <div>
                                <input className='mr-[10px]' type="radio" name="metodo" id="add" value={"add"} onChange={e => setMetodo(e.target.value)} />
                                <label htmlFor="add">Somar Pontuação</label>
                            </div>
                            <div>
                                <input className='mr-[10px]' type="radio" name="metodo" id="sub" value={"sub"} onChange={e => setMetodo(e.target.value)} />
                                <label htmlFor="sub">Subtrair Pontuação</label>
                            </div>
                        </div>
                    </div>
                    <input type="submit" className='mt-[10px] px-[20px] py-[5px] w-fit bg-linear-to-l from-orange-10 to-orange-20 text-[14pt] font-medium text-white cursor-pointer rounded-[5px] hover:scale-[1.075] hover:shadow-xl duration-[0.2s]' value="Atualizar" />
                </form>
            </div>
        </section>
    )
}

export default FormEdit