import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CustomAlert from "./components/CustomAlert";
import { UserForm } from "./components/UserForm";
import { useUsuarios } from "./hooks/useUsuarios";

export default function Register() {
    const { register, usuarioState } = useUsuarios()
    const navigate = useNavigate()
    useEffect(() => {
        if (usuarioState.token) {
            navigate('/');
        }
    }, [usuarioState.token])

    return (
        <div className='flex flex-col items-center justify-center gap-y-10 mx-3 my-10'>
            <h3 className='text-2xl text-center text-white'>Iniciar Sesion</h3>
            <UserForm isLogin={false} onRegister={(user) => register(user)} />
            {
                usuarioState.error && (
                    <CustomAlert color="red" message={usuarioState.error} />
                )
            }
        </div>
    )
}
