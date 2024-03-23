import { useEffect } from 'react'
import { UserForm } from './components/UserForm'
import { useUsuarios } from './hooks/useUsuarios'
import { useNavigate } from 'react-router-dom'

export default function Auth() {
    const { login, usuarioState } = useUsuarios()
    const navigate = useNavigate()
    useEffect(() => {
        if (usuarioState.token) {
            navigate('/');
        }
    }, [usuarioState.token])

    return (
        <div className='flex flex-col items-center justify-center gap-y-10 mx-3 my-10'>
            <h3 className='text-2xl text-center text-white'>Iniciar Sesion</h3>
            <UserForm isLogin onLogin={(user) => login(user)} />
        </div>
    )
}
