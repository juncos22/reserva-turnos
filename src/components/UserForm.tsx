import React, { useState } from 'react'
import { LoginUserDTO, RegisterUserDTO } from '../interfaces/dtos/usuario.dto';
import { useUsuarios } from '../hooks/useUsuarios';
import { LoadingSpinner } from './LoadingSpinner';
import { Link } from 'react-router-dom';

type props = {
    isLogin: boolean,
    onLogin?: (loginUser: LoginUserDTO) => void,
    onRegister?: (registerUser: RegisterUserDTO) => void,
}

export const UserForm: React.FC<props> = ({ isLogin, onLogin, onRegister }: props) => {
    const { usuarioState } = useUsuarios()
    const [loginUser, setLoginUser] = useState<LoginUserDTO>({ username: '', password: '' })
    const [registerUser, setRegisterUser] = useState<RegisterUserDTO>({ first_name: '', last_name: '', email: '', username: '', password: '' })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isLogin) {
            onLogin!(loginUser);
        } else {
            onRegister!(registerUser);
        }
    }
    const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRegisterUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const isValidLoginForm = () => loginUser.username.length > 0 && loginUser.password.length > 0;
    const isValidRegisterForm = () => registerUser.username.length > 0 && registerUser.password.length > 0;

    const renderLoginForm = () => {
        return (
            <>
                <input name='username' value={loginUser.username} onChange={handleLoginChange} className='bg-transparent border px-3 text-center font-bold text-sm text-white border-indigo-500 rounded-lg w-full h-14 mx-5 my-3' type="text" placeholder='Nombre de usuario' />
                <input name='password' value={loginUser.password} onChange={handleLoginChange} className='bg-transparent border px-3 text-center font-bold text-sm text-white border-indigo-500 rounded-lg w-full h-14 mx-5 my-3' type="password" placeholder='Contraseña' />
            </>
        )
    }
    const renderRegisterForm = () => {
        return (
            <>
                <input name='first_name' value={registerUser.first_name} onChange={handleRegisterChange} className='bg-transparent border px-3 text-center font-bold text-sm text-white border-indigo-500 rounded-lg w-full h-14 mx-5 my-3' type="text" placeholder='Nombre' />
                <input name='last_name' value={registerUser.last_name} onChange={handleRegisterChange} className='bg-transparent border px-3 text-center font-bold text-sm text-white border-indigo-500 rounded-lg w-full h-14 mx-5 my-3' type="text" placeholder='Apellido' />
                <input name='email' value={registerUser.email} onChange={handleRegisterChange} className='bg-transparent border px-3 text-center font-bold text-sm text-white border-indigo-500 rounded-lg w-full h-14 mx-5 my-3' type="email" placeholder='Correo electronico' />
                <input required name='username' value={registerUser.username} onChange={handleRegisterChange} className='bg-transparent border px-3 text-center font-bold text-sm text-white border-indigo-500 rounded-lg w-full h-14 mx-5 my-3' type="text" placeholder='Nombre de usuario' />
                <input required name='password' value={registerUser.password} onChange={handleRegisterChange} className='bg-transparent border px-3 text-center font-bold text-sm text-white border-indigo-500 rounded-lg w-full h-14 mx-5 my-3' type="password" placeholder='Contraseña' />
            </>
        )
    }
    return (
        <form onSubmit={handleSubmit} className='border border-indigo-500 bg-transparent rounded-md w-fit h-auto flex flex-col items-center justify-between px-10'>
            {
                isLogin ? renderLoginForm() : renderRegisterForm()
            }
            {
                !usuarioState.cargando ? (
                    <button disabled={isLogin ? !isValidLoginForm() : !isValidRegisterForm()} className='bg-indigo-500 rounded-md text-white font-bold w-full h-10 text-sm my-3 transition-colors disabled:bg-slate-500 disabled:hover:bg-slate-500 disabled:hover:text-slate-200 hover:bg-indigo-300 hover:text-[#212121]'>
                        {isLogin ? 'Iniciar Sesion' : 'Registrarse'}
                    </button>
                ) : (
                    <LoadingSpinner message={isLogin ? 'Ingresando...' : 'Creando cuenta...'} />
                )
            }
            {
                isLogin && (
                    <span className='my-2 flex items-center text-sm text-indigo-300'>No tiene cuenta?
                        <Link className='text-indigo-300 font-bold text-sm px-2' to={'/register'}>Registrese</Link>
                    </span>
                )
            }
        </form>
    )
}