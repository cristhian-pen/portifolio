import React, { useState } from "react";
import Swal from 'sweetalert2';
import { Fade } from 'react-reveal';

export default function ForgetPass() {

    const [email, setEmail] = useState({
        email: ''
    });

    const handleEmail = (event) => {
        setEmail({
            ...email,
            [event.target.name]: event.target.value
        });
    }

    const alerta = () => {
        Swal.fire({
            icon: "success",
            title: 'Senha enviada para ' + email.email,
            text: 'Verifique sua caixa de entrada ou SPAM!'
        })
    }
    return (
        <>
            <div class="h-screen font-sans login bg-cover">
                <div class="container mx-auto h-full flex flex-1 justify-center items-center">
                    <div class="h-screen font-sans login bg-cover">
                        <div class="container mx-auto h-full flex flex-1 justify-center items-center">
                            <div class="w-full max-w-lg">
                                <Fade top cascade >
                                    <div class="leading-loose">
                                        <form class="max-w-sm m-4 flex flex-col items-center justify-center p-10 bg-white bg-opacity-25 rounded shadow-xl">
                                            <p class="font-medium text-center text-lg title font-bold">ESQUECEU A SENHA</p>
                                            <div class="my-5 text-center">
                                                <label class="block text-sm subtitle" for="email">Digite seu email</label>
                                                <input class="w-full px-5 py-1 text-slate-400 border-2 rounded focus:outline-none"
                                                    type="text"
                                                    placeholder="Digite o e-mail"
                                                    aria-label="email"
                                                    required
                                                    name="email"
                                                    onChange={handleEmail}
                                                />
                                            </div>
                                            <div class="mt-4 mb-5 items-center flex justify-between">
                                                <button class="px-4 py-1 font-light tracking-wider bg-slate text-white subtitle hover:bg-gray-800 hover:bg-fourth-color rounded"
                                                    type="button"
                                                    onClick={alerta}
                                                >Solicitar Senha
                                                </button>
                                            </div>
                                            <a
                                                class="inline-block right-0 align-baseline font-bold cursor-pointer text-sm text-500 subtitle hover:text-primary-color"
                                                href="/auth"
                                            >Voltar a tela de login!
                                            </a>
                                        </form>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}