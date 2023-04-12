import React, { useState } from "react";
import { Fade } from "react-reveal";
import Swal from "sweetalert2";
import json from '../../../info.json';
import { login } from "../../../auth";
import { GiBleedingEye } from 'react-icons/gi';
import { RxEyeClosed } from 'react-icons/rx';


export default function Auth() {

    const [data, setData] = useState({
        user: '',
        password: ''
    });

    const [show, setShow] = useState("password");

    const showValue = () => {

        if (show === "password") {

            setShow("text");
            return;

        }

        setShow("password");
    }

    const handleData = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const authentique = () => {
        let usrname = json.usuario;
        let pword = json.password;

        if (data.user == usrname && data.password == pword) {

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
        <div className="h-screen font-sans login bg-cover">
            <div className="container mx-auto h-full flex flex-1 justify-center items-center">
                <div className="w-full max-w-lg">
                    <Fade top cascade>
                        <div className="leading-loose">
                            <form className="max-w-sm m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl">
                                <p className="font-medium text-center text-lg title font-bold">LOGIN</p>
                                <div className="">
                                    <label className="block text-sm subtitle" for="email">Username or email</label>
                                    <input className="w-full px-5 py-1 text-slate-400 border-2 rounded focus:outline-none"
                                        type="text"
                                        placeholder="Digite o e-mail"
                                        aria-label="email"
                                        required
                                        name="user"
                                        onChange={handleData}
                                    />
                                </div>
                                <div className="mt-2">
                                    <label className="block text-sm subtitle">Senha</label>
                                    <div className="flex flex-row">
                                        <input className="w-full px-5 py-1 text-slate-400 rounded-l-md border-l-2 border-y-2 focus:outline-none "
                                            type={show}
                                            placeholder="Digite a sua senha"
                                            arial-label="password"
                                            required
                                            name="password"
                                            onChange={handleData}
                                        />
                                        <button
                                            className="xl:flex items-center border-slate-400 justify-center border-r-2 border-y-2 xl:mr-0.5 rounded-r-md"
                                            type="button"
                                            onClick={showValue}
                                        >
                                            {
                                                show === "password" ?
                                                    <RxEyeClosed className="h-8 w-6 mr-2" /> :
                                                    <GiBleedingEye className="h-8 w-6 my-1 mr-2" />
                                            }

                                        </button>
                                    </div>
                                </div>


                                <div className="mt-4 mb-5 items-center flex justify-between">
                                    <button className="px-4 py-1 font-light tracking-wider bg-slate text-white subtitle hover:bg-gray-800 hover:bg-fourth-color rounded"
                                        type="button"
                                        onClick={authentique}
                                    >
                                        Entrar

                                    </button>
                                    <a
                                        className="inline-block right-0 align-baseline font-bold cursor-pointer text-sm text-500 subtitle hover:text-primary-color"
                                        href="/forgotpassword"
                                    >Esqueceu a senha ?</a>
                                </div>
                                <div className="text-center">
                                    <a
                                        type="button"
                                        className="inline-block right-0 align-baseline cursor-pointer subtitle font-bold text-sm text-500 hover:text-primary-color"
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
    );
}