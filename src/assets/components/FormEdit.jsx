import { useState, useEffect } from 'react'

function FormEdit({sala, onClose}) {

    const [turma, setTurma] = useState('')
    const [pontos, setPontos] = useState(0)

    useEffect(() => {
        if (sala) {
            setTurma(sala.turma)
            setPontos(sala.pontos)
        }
    }, [sala])

    function handleSubmit(e) {
        e.preventDefault()
        alert("Salvando:", turma, pontos)
        
        // firebase

        onClose()
    }

    return (
        <section className='fixed top-0 left-0 w-[100vw] h-[100vh] z-[100] bg-[#4444447e] flex justify-center items-center'>
            <div className='bg-white p-[20px]'>
                <div className='flex justify-between items-center gap-[40px]'>
                    <h1 className='font-sora font-[600] text-[14pt]'>Editando: {sala.abrv}</h1>
                    <button className='bi-x text-[24pt] text-black cursor-pointer' onClick={onClose} />
                </div>
                <form action="" className='flex flex-col gap-[25px] mt-[25px]'>
                    <input
                        type="turma"
                        placeholder="Turma (ex: 2º Automação)"
                        value={turma}
                        onChange={e => setTurma(e.target.value)}
                        className='py-[5px] px-[10px] bg-gray-100 font-poppins text-[12pt] outline-none focus:border-orange-10 border-[1px] border-gray-300 rounded-[5px] md:w-[80%]'
                        />
                </form>
            </div>
        </section>
    )
}

export default FormEdit