import react, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase.config'

function Login() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const navigate = useNavigate()

    function handleLogin(e) {
        e.preventDefault()

        signInWithEmailAndPassword(auth, email, senha)
        .then(() => {
            navigate('/administrativo')
        })
        .catch((error) => {
            alert('Email ou senha incorretos.')
            console.error(error)
        })
    }

    return (
        <section className='flex justify-center items-center h-[100vh]'>
            <div className='shadow p-[40px] rounded-[10px]'>
                <div className='flex flex-col gap-[5px]'>
                    <h1 className='text-[20pt] font-sora font-semibold'>Taça das Copas</h1>
                    <span className='text_grad font-bold text-[13pt]'>Administrativo</span>
                </div>
                <form action="" onSubmit={handleLogin} className='flex flex-col gap-[20px] mt-[50px]'>

                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className='py-[5px] px-[10px] bg-gray-100 font-poppins text-[12pt] outline-none focus:border-orange-10 border-[1px] border-gray-300 rounded-[5px]'
                    />

                    <input
                        type="password"
                        placeholder="Senha"
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                        className='py-[5px] px-[10px] bg-gray-100 font-poppins text-[12pt] outline-none focus:border-orange-10 border-[1px] border-gray-300 rounded-[5px]'
                    />

                    <nav className='flex justify-between mt-[30px] items-center'>
                        <input type="submit" className='px-[20px] py-[5px] w-fit bg-linear-to-l from-orange-10 to-orange-20 text-[14pt] font-medium text-white cursor-pointer rounded-[5px] hover:scale-[1.075] hover:shadow-xl duration-[0.2s]' value={"Entrar"} />
                        <Link to={"/"} className='text-[13pt] text-blue-500 underline'>Voltar</Link>
                    </nav>
                </form>
            </div>
        </section>
    )   
}

export default Login