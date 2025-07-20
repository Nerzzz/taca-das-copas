import { useState } from 'react'

import TableAdm from '../components/TableAdm'

import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../firebase.config'

function Admin() {

  const [turma, setTurma] = useState('')
  const [abrv, setAbrv] = useState('')

  async function cadastrarSala(e) {
    e.preventDefault();

    if(turma == '' || abrv == ''){
      alert("Campos devem ser preenchidos")
      return
    }

    try{
      await addDoc(collection(db, "salas"), {
        turma: turma,
        abrv: abrv,
        pontos: 0,
      })
      alert("Sala cadastrada com sucesso!")

      setTurma('');
      setAbrv('');

    } catch (error){
      alert("Não foi possivel adicionar sala. " + error.message)
    }
  }

  return (
    <section>
      <main className='px-[40px] mt-[40px]'>
        <section className='flex flex-col'>
          <h1 className='text-[20pt] font-sora font-semibold mb-[40px]'>Turmas cadastradas</h1>
          <TableAdm />
        </section>
        <section className='mt-[80px] flex flex-col gap-[20px]'>
          <h1 className='text-[20pt] font-sora font-semibold'>Cadastrar uma nova turma</h1>
          <form onSubmit={cadastrarSala} className='flex flex-col gap-[20px]'>
            <input
              type="turma"
              placeholder="Turma (ex: 2º Automação)"
              value={turma}
              onChange={e => setTurma(e.target.value)}
              className='py-[5px] px-[10px] bg-gray-100 font-poppins text-[12pt] outline-none focus:border-orange-10 border-[1px] border-gray-300 rounded-[5px] md:w-[50%]'
            />
            <input
              type="abrv"
              placeholder="Abreviação (ex: 3º DS)"
              value={abrv}
              onChange={e => setAbrv(e.target.value)}
              className='py-[5px] px-[10px] bg-gray-100 font-poppins text-[12pt] outline-none focus:border-orange-10 border-[1px] border-gray-300 rounded-[5px] md:w-[50%]'
            />
            <input type="submit" className='mt-[20px] px-[20px] py-[5px] w-fit bg-linear-to-l from-orange-10 to-orange-20 text-[14pt] font-medium text-white cursor-pointer rounded-[5px] hover:scale-[1.075] hover:shadow-xl duration-[0.2s]' value={"Cadastrar"} />
          </form>
        </section>
      </main>
    </section>
  )
}

export default Admin