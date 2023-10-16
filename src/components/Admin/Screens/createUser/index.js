import React, { useState } from "react";

//Efeitos e animações
import { Fade } from 'react-reveal';
import Swal from "sweetalert2";

//Components
import API from '../../../../Services/Api/api';

export default function CreateUser() {

    //Hooks
    const [data, setData] = useState({ nome: '', sobrenome: '', email: '', senha: '' });
    const [error, setError] = useState();
    const [passError, setPassError] = useState();

    //Interpreta entradas nos formularios
    const handleCriaUsuario = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
        setError('');
        setPassError('');
    }

    //Cria usuarios a partir do formulario
    const criaUsuario = () => {

        //Validações
        if (!data.nome || !data.email || !data.sobrenome || !data.senha) {
            setError("Preencha os campos obrigatórios!");
        }
        else {
            //Caso a condição seja verdadeira, POST no banco de dados
            API.post('/api/usuarios/criar', {
                nomeUsuario: data.nome,
                sobrenomeUsuario: data.sobrenome,
                emailUsuario: data.email,
                password: data.senha
            })
                .then((res) => {
                    //Caso o POST seja completado, retorna um alerta informando o sucesso 
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 5000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.addEventListener('mouseover', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    });
                    Toast.fire({ icon: 'success', title: "Usuario criado com sucesso!" })
                    //Limpa os campos
                    setData({ nome: '', sobrenome: '', email: '', senha: '' })
                })
                .catch((err) => {
                    //Caso falhe, retorna o alerta de erro
                    Swal.fire({ icon: 'error', title: 'Ocorreu um erro, verifique o administrador' })
                });
        }
        //Redireciona a pagina para o top
        window.scrollTo(0, 0)
    }

    return (
        <Fade top cascade>
            <section className="flex flex-col items-center xl:mr-96 xl:ml-96">
                <h1 className="title text-lg xl:text-3xl text-center my-16  ">Criação de usuarios</h1>

                <form className="flex h-screen flex-col items-center ">

                    <label className="text-md xl:text-md flex flex-col font-bold subtitle">
                        Nome *
                        <input
                            type="text"
                            required
                            name="nome"
                            value={data.nome}
                            className=" border-2 font-bold text-sm border-slate-400 shadow my-2 rounded w-60 xl:w-96 pl-1.5 h-8 "
                            onChange={handleCriaUsuario}
                        />
                        <span className="text-sm font-light text-red animate_animated animate__shakeX">{error}</span>
                    </label>

                    <label className="text-md xl:text-md flex flex-col font-bold subtitle ">
                        Sobrenome *
                        <input
                            type="text"
                            name="sobrenome"
                            required
                            value={data.sobrenome}
                            className=" border-2 font-bold text-sm border-slate-400 shadow my-2 rounded w-60 xl:w-96 pl-1.5 h-8 "
                            onChange={handleCriaUsuario}
                        />
                        <span className="text-sm font-light text-red animate_animated animate__shakeX">{error}</span>
                    </label>

                    <label className="text-md xl:text-md flex flex-col font-bold subtitle">
                        Email *
                        <input
                            type="email"
                            name="email"
                            required
                            value={data.email}
                            className=" border-2 font-bold text-sm border-slate-400 shadow my-2 rounded w-60 xl:w-96 pl-1.5 h-8  "
                            onChange={handleCriaUsuario}
                        />
                        <span className="text-sm font-light text-red animate_animated animate__shakeX">{error}</span>
                    </label>

                    <label className="text-md xl:text-md flex flex-col font-bold subtitle">
                        Senha *
                        <input
                            type="text"
                            name="senha"
                            value={data.senha}
                            required
                            className=" border-2 font-bold text-sm border-slate-400 shadow my-2 rounded w-60 xl:w-96 pl-1.5 h-8  "
                            onChange={handleCriaUsuario}
                        />
                        <span className="text-sm font-light text-red animate_animated animate__shakeX">{error}</span>
                        <span className="text-sm font-light text-red animate_animated animate__shakeX">{passError}</span>
                    </label>
                    <span className="text-sm font-light text-center text-slate-400">A senha deve conter letras maiusculas e minusculas, numeros e um caracter especial</span>

                    <button
                        type="button"
                        className=" text-white text-sm my-10 font-bold text-center w-40 h-14 border-2 rounded-lg bg-slate-400 ease-in-out duration-500 hover:bg-fourth-color"
                        onClick={criaUsuario}
                    >
                        Criar Usuario
                    </button>
                </form>
            </section>
        </Fade>
    );
}