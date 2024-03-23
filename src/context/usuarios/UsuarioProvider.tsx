import React, { useReducer } from 'react'
import { UsuarioContext, initialState } from './UsuarioContext'
import { LoginUserDTO, RegisterUserDTO } from '../../interfaces/dtos/usuario.dto'
import { UsuarioReducer } from './UsuarioReducer'
import { UsuarioActions } from '../../interfaces/usuario'
import { api } from '../../api/axiosConfig'

type UsuarioProviderProps = {
    children: React.JSX.Element[] | React.JSX.Element
}

export const UsuarioProvider = ({ children }: UsuarioProviderProps) => {
    const [state, dispatch] = useReducer(UsuarioReducer, initialState)

    const register = async (registerUser: RegisterUserDTO) => {
        dispatch({ type: UsuarioActions.CARGANDO })
        const res = await api.post('/auth/register', registerUser)
        console.log(res);

        dispatch({ type: UsuarioActions.REGISTER, payload: res.data.token })
    }
    const login = async (loginUser: LoginUserDTO) => {
        dispatch({ type: UsuarioActions.CARGANDO })
        const res = await api.post('/auth/login', loginUser)
        console.log(res);
        dispatch({ type: UsuarioActions.LOGIN, payload: res.data.token })
    }
    const logout = () => {
        dispatch({ type: UsuarioActions.LOGOUT })
    }
    return (
        <UsuarioContext.Provider value={{
            usuarioState: state,
            register,
            login,
            logout
        }}>
            {children}
        </UsuarioContext.Provider>
    )
}
