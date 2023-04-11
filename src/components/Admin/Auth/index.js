import React, { useState } from "react";
import { Fade } from "react-reveal";
import Swal from "sweetalert2";
import json from '../../../info.json';
import { login } from "../../../auth";
import { GiAllSeeingEye } from 'react-icons/gi';

export default function Auth() {

    const [user, setUser] = useState({
        user: ''
    });

    const [password, setPassword] = useState({
        password: ''
    });

    const [show, setShow] = useState({
        value: 'password'
    });

    const showValue = () => {
        setShow('text');
    }

    const handlePass = (event) => {
        setPassword({
            ...password,
            [event.target.name]: event.target.value
        })
    }

    const handleUser = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const redirect = () => {
        let usrname = json.usuario;
        let pword = json.password;

        if (user.user === usrname && password.password === pword) {

            login('tokenfic');
            window.location.href = "/admin";

        } else {
            Swal.fire({
                icon: 'error',
                title: 'Usuario ou senha invalidos'
            });
        }
    }

    return (
        <>
            <div class="h-screen font-sans login bg-cover">
                <div class="container mx-auto h-full flex flex-1 justify-center items-center">
                    <div class="w-full max-w-lg">
                        <Fade top cascade>
                            <div class="leading-loose">
                                <form class="max-w-sm m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl">
                                    <p class="font-medium text-center text-lg title font-bold">LOGIN</p>
                                    <div class="">
                                        <label class="block text-sm subtitle" for="email">Username or email</label>
                                        <input class="w-full px-5 py-1 text-slate-400 border-2 rounded focus:outline-none"
                                            type="text"
                                            placeholder="Digite o e-mail"
                                            aria-label="email"
                                            required
                                            name="user"
                                            onChange={handleUser}
                                        />
                                    </div>
                                    <div class="mt-2">
                                        <label class="block  text-sm subtitle">Senha</label>
                                        <div className="flex flex-row">
                                            <input class="w-full px-5 py-1 text-slate-400 rounded border-2 focus:outline-none "
                                                type={show.value}
                                                placeholder="Digite a sua senha"
                                                arial-label="password"
                                                required
                                                name="password"
                                                onChange={handlePass}
                                            />
                                            <button
                                                onClick={showValue}
                                            >
                                                <GiAllSeeingEye className="h-8 w-6 ml-8 rounded-lg" />

                                            </button>
                                        </div>
                                    </div>


                                    <div class="mt-4 mb-5 items-center flex justify-between">
                                        <button class="px-4 py-1 font-light tracking-wider bg-slate text-white subtitle hover:bg-gray-800 hover:bg-fourth-color rounded"
                                            type="button"
                                            onClick={redirect}
                                        >
                                            Entrar

                                        </button>
                                        <a
                                            class="inline-block right-0 align-baseline font-bold cursor-pointer text-sm text-500 subtitle hover:text-primary-color"
                                            href="/forgotpassword"
                                        >Esqueceu a senha ?</a>
                                    </div>
                                    <div class="text-center">
                                        <a
                                            type="button"
                                            class="inline-block right-0 align-baseline cursor-pointer subtitle font-bold text-sm text-500 hover:text-primary-color"
                                            href="/home"
                                        >
                                            Voltar a Pagina Inicial
                                        </a>
                                    </div>
                                </form>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div >
        </>
    );
}