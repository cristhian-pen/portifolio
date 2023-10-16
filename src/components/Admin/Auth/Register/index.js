import React, { useState } from "react";

//Efeitos e animações
import Swal from 'sweetalert2';
import { Fade } from 'react-reveal';

//Components
import api from '../../../../Services/Api/api';

//Envios de email
import emailjs from 'emailjs-com';


export default function ForgetPass() {

    //Hooks
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [email, setEmail] = useState({ email: '' });


    //Captura os inputs no formulario
    const handleEmail = (event) => {
        setEmail({
            ...email,
            [event.target.name]: event.target.value
        });

        setError('');
    }


    //Variaveis globais do emailjs
    const YOUR_SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
    const YOUR_TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
    const YOUR_USER_ID = process.env.REACT_APP_USER_ID;


    //Função que envia o email a partir de uma busca na api
    const sendMail = (e) => {

        //Validação dos campos
        if (email.email === '') {
            setError('Informe um email para ser enviado');
        }
        else {
            //Busca dados na api a partir do email fornecido no input
            api.get(`/api/usuarios/${email.email}`)
                .then((res) => {
                    setData(res.data);
                })

            //Validação da resposta da api
            if (data === undefined) {
                setError('Email não cadastrado, contate o administrador!');

            }
            //Envia o email para o usuario
            else {
                //VAriaveis do email js
                let username = data?.NOME
                let templateParams = {
                    username: username,
                    usermail: email.email
                };

                //Configuração do emailJs
                emailjs.send(
                    YOUR_SERVICE_ID,
                    YOUR_TEMPLATE_ID,
                    templateParams,
                    YOUR_USER_ID

                )

                //Caso sucesso estoura o alerta
                Swal.fire({
                    icon: "success",
                    title: 'Senha enviada para ' + email.email,
                    text: 'Verifique sua caixa de entrada ou SPAM!'
                });
            }
        }
        //Limpa os inputs
        setEmail({ email: '' })
    }

    return (
        <>
            <div className="h-screen font-sans login bg-cover">
                <div className="container mx-auto h-full flex flex-1 justify-center items-center">
                    <div className="h-screen font-sans login bg-cover">
                        <div className="container mx-auto h-full flex flex-1 justify-center items-center">
                            <div className="w-full max-w-lg">
                                <Fade top cascade >
                                    <div className="leading-loose">
                                        <form className="max-w-sm m-4 flex flex-col items-center justify-center p-10 bg-white bg-opacity-25 rounded shadow-xl">
                                            <p className="font-medium my-2 text-center text-lg title font-bold">ESQUECEU A SENHA</p>
                                            <div className="my-2 w-full">
                                                <label className="block w-full text-sm mb-0.5 subtitle" >Digite seu email</label>
                                                <input className="w-full px-5 py-1 text-slate-400 border-2 rounded focus:outline-none"
                                                    type="text"
                                                    placeholder="Digite o e-mail"
                                                    aria-label="email"
                                                    required
                                                    value={email.email}
                                                    name="email"
                                                    onChange={handleEmail}
                                                />
                                                <span className="text-sm font-light text-red animate_animated animate__shakeX">{error}</span>
                                            </div>
                                            <div className="mt-4 mb-5 items-center flex justify-between">
                                                <button className="px-4 py-1 font-light tracking-wider bg-slate text-white subtitle hover:bg-gray-800 hover:bg-fourth-color rounded"
                                                    type="button"
                                                    onClick={sendMail}
                                                >Solicitar Senha
                                                </button>
                                            </div>
                                            <a
                                                className="inline-block right-0 align-baseline font-bold cursor-pointer text-sm text-500 subtitle hover:text-primary-color"
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