import react, { useState } from 'react'
import { useNavigate } from 'react-router'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../firebase.config'

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
        <section className='flex justify-center items-center h-[80vh]'>
            <div className='shadow'>
                <h1>Taça das Copas</h1>
                <form action="" onSubmit={handleLogin}>

                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Senha"
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                    />

                    <button type="submit">Entrar</button>

                </form>
            </div>
        </section>
    )   
}

export default Login