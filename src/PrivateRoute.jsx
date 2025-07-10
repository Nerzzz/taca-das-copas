import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase.config'
import { Navigate } from 'react-router'

function PrivateRoute({ children }) {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (u) => {
            setUser(u)
            setLoading(false)
        })
        return () => unsubscribe()
    }, [])

    if (loading) return <p>Carregando...</p>
    return user ? children : <Navigate to="/login" />
}

export default PrivateRoute