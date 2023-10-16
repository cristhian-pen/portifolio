import { useState } from "react";

//Efeitos e animações
import Swal from 'sweetalert2';

//Envio de emails
import emailjs from 'emailjs-com';

//Componentes
import Navigator from "../Navigator";
import Footer from "../Footer";



export default function Email() {
    //Hooks
    const [data, setData] = useState({ nome: '', msgEmail: '', mail: '' });
    const [error, setError] = useState('');

    //Pega o input dos usuarios
    const handleInput = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
        setError('');
    }

    //Função que envia o email a partir de uma busca na api
    const enviarEmail = () => {

        const YOUR_SERVICE_ID = 'service_8l3zhr5';
        const YOUR_TEMPLATE_ID = 'template_4a55jmj';
        const YOUR_USER_ID = process.env.REACT_APP_USER_ID;

        //Validação dos campos
        if (data.nome === '' || data.msgEmail === '' || data.mail === '') {
            setError('Campos em branco');
        }
        //Envia o email para o usuario
        else {

            //VAriaveis do email js
            let templateParams = {
                username: data.nome,
                message: data.msgEmail,
                contactMail: data.mail
            };

            //Configuração do emailJs
            emailjs.send(
                YOUR_SERVICE_ID,
                YOUR_TEMPLATE_ID,
                templateParams,
                YOUR_USER_ID
            )

            //Limpa os campos
            setData({ nome: '', msgEmail: '', mail: '' });

            //Caso sucesso estoura o alerta
            Swal.fire({
                icon: "success",
                title: 'Email de contato enviado!',
                text: 'Sua mensagem sera respondida em breve!'
            });
        }
    }

    return (
        <div className="h-screen">
            <Navigator />
            <section className="flex mb-36 flex-col headline w-screen shadow-2xl bg-white rounded-lg justify-center items-center xl:h-auto xl:my-40 xl:rounded-t-[150px]">
                <h1 className="title text-lg xl:text-3xl text-center my-16 mb-14">Contato Email</h1>
                <form className="flex flex-col mb-20 items-center justify-between" >

                    <label className="text-md xl:text-md flex flex-col font-bold subtitle">
                        Seu nome:
                        <input
                            type="text"
                            name="nome"
                            placeholder="Digite seu nome"
                            value={data.nome}
                            className=" border-2 font-bold text-sm border-slate-400 shadow my-2 rounded w-60 xl:w-96 pl-1.5 h-8 "
                            onChange={handleInput}
                        />
                        <span className="text-sm font-light text-red animate_animated animate__shakeX">{error}</span>
                    </label>


                    <label className="text-md xl:text-md flex flex-col font-bold subtitle">
                        Seus dados para contato:
                        <input
                            type="text"
                            name="mail"
                            placeholder="Digite os dados para contato"
                            value={data.mail}
                            className=" border-2 font-bold text-sm border-slate-400 shadow my-2 rounded w-60 xl:w-96 pl-1.5 h-8 "
                            onChange={handleInput}
                        />
                        <span className="text-sm font-light text-red animate_animated animate__shakeX">{error}</span>
                    </label>

                    <label className="text-md xl:text-md flex flex-col font-bold subtitle my-5">
                        Deixe aqui sua mensagem....
                        <textarea
                            className="peer block min-h-[auto] w-full xl:w-96 text-sm font-bold rounded border border-slate-400 my-2 py-[0.32rem] px-3 leading-[1.6] transition-all duration-200 ease-linear focus:placeholder data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            rows="5"
                            placeholder="Deixe sua mensagem de contato....."
                            name="msgEmail"
                            value={data.msgEmail}
                            onChange={handleInput}
                        ></textarea>
                        <span className="text-sm font-light text-red animate_animated animate__shakeX">{error}</span>
                    </label>
                    <button type="button" onClick={enviarEmail} className="my-10 mb-5 text-white text-sm font-bold text-center w-40 h-14 border-2 rounded-lg bg-slate-400 ease-in-out duration-500 hover:bg-fourth-color">
                        Enviar Email
                    </button>
                </form>
                <Footer />
            </section >
        </div>
    );
}