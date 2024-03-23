import React, { useState } from 'react'
import { LoginUserDTO } from '../interfaces/dtos/usuario.dto';
import { useUsuarios } from '../hooks/useUsuarios';
import { LoadingSpinner } from './LoadingSpinner';

type props = {
    isLogin: boolean,
    onLogin: (loginUser: LoginUserDTO) => void
}

export const UserForm: React.FC<props> = ({ isLogin, onLogin }: props) => {
    console.log(isLogin);
    const { usuarioState } = useUsuarios()
    const [loginUser, setLoginUser] = useState<LoginUserDTO>({ username: '', password: '' })
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onLogin(loginUser);
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const isValidForm = () => loginUser.username.length > 0 && loginUser.password.length > 0;

    return (
        <form onSubmit={handleSubmit} className='border border-indigo-500 bg-transparent rounded-md w-fit h-auto flex flex-col items-center justify-between px-10'>
            <input name='username' value={loginUser.username} onChange={handleChange} className='bg-transparent border px-3 text-center font-bold text-sm text-white border-indigo-500 rounded-lg w-full h-14 mx-5 my-3' type="text" placeholder='Nombre de usuario' />
            <input name='password' value={loginUser.password} onChange={handleChange} className='bg-transparent border px-3 text-center font-bold text-sm text-white border-indigo-500 rounded-lg w-full h-14 mx-5 my-3' type="password" placeholder='Contraseña' />
            {
                !usuarioState.cargando ? (
                    <button disabled={!isValidForm()} className='bg-indigo-500 rounded-md text-white font-bold w-full h-10 text-sm my-3 transition-colors disabled:bg-slate-500 disabled:hover:bg-slate-500 disabled:hover:text-slate-200 hover:bg-indigo-300 hover:text-[#212121]'>Iniciar Sesion</button>
                ) : (
                    <LoadingSpinner message='Ingresando...' />
                )
            }
        </form>
    )
}