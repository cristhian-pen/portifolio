import React, { useState } from "react";

//Efeitos e animações
import Lottie from "react-lottie";
import animationData from './Anim/eye-animation.json';
import { Fade } from "react-reveal";
import 'animate.css';

//Funções e validadores
import { emailNullValid, passdNullValid } from '../../../Services/Regex/regex';
import { login } from "../../../auth";

//Componentes
import api from '../../../Services/Api/api';
import Swal from "sweetalert2";

export default function Auth() {

    //Hooks
    const [data, setData] = useState({ user: '', password: '' });
    const [show, setShow] = useState("password");
    const [error, setError] = useState('');
    const [animState, setAnimstate] = useState({ isStopped: true, isPaused: false, direction: -1, speed: 10 });


    //Função que faz o show Value da aplicação
    const showValue = () => {

        //Pega as propriedades de estado da animação e troca a direção a cada clique
        const normalDirection = 1
        const reverseDirection = -1
        setAnimstate({
            ...animState,
            isStopped: false,
            direction: animState.direction === normalDirection ? reverseDirection : normalDirection
        });

        if (show === "password") {
            setShow("text");
            return;
        }

        setShow("password");
    }

    //Lottie
    const defaultOptions = {
        loop: false,
        autoplay: false,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }


    //Pega qualquer Input no formulario
    const handleData = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
        //Retirar os erros ao digitar
        setError('');
    }

    //Função de autenticação
    const authentique = (e) => {
        e.preventDefault();

        //Validações
        const emailValid = emailNullValid(data.user);
        const passValid = passdNullValid(data.password);
        let email = document.getElementById('emailInvalid');
        let pass = document.getElementById('passInvalid');
        let spanEmail = document.getElementById('spanEmail');
        let spanPass = document.getElementById('spanPass');
        let show = document.getElementById('showValid');

        if (emailValid && !passValid) {
            setError("Insira um email!");
            email.classList.add('border-red', 'animate__shakeX');
            spanPass.classList.add('hidden');

        } else if (passValid && !emailValid) {
            setError("Insira uma senha");
            spanPass.classList.remove('hidden');
            pass.classList.add('border-red', 'animate__shakeX');
            show.classList.add('border-red', 'animate__shakeX');
            spanEmail.classList.add('hidden');

        } else if (passValid || emailValid) {
            setError("Campos em branco!");
            pass.classList.add('border-red', 'animate__shakeX');
            email.classList.add('border-red', 'animate__shakeX');

        }


        else {
            //Caso as validações estejam corretas faça o POST
            api.post('/login', {
                email: data.user,
                senha: data.password
            })
                .then((res) => {
                    if (res.data.error === 'true') {
                        //Estoura o erro no caso de algum problema
                        Swal.fire({
                            icon: 'error',
                            title: 'Email ou senha incorretos'
                        });
                    }
                    //Autentica o usuario com jwt e cria a sessão e a pagina de admin
                    if (res.data.auth) {
                        const token = res.data.token;
                        login(token);
                        window.location.href = "/admin";
                        setData({
                            user: '',
                            password: ''
                        });
                    }
                })

                //Retorna o erro caso a API esteja off
                .catch((err) => {
                    if (err.code === 'ERR_NETWORK') {
                        Swal.fire({
                            icon: 'error',
                            title: 'Problemas com o servidor, ' + err.message + ' ,contate o suporte!'
                        })
                    }
                    //Retorna o erro caso o email não seja encontrado na base de dados
                    else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Usuário não cadastrado!'
                        })
                    }
                });
        }

    }

    return (
        <div className="h-screen font-sans login bg-cover">
            <div className="container mx-auto h-full flex flex-1 justify-center items-center">
                <div className="w-full max-w-lg">
                    <Fade top cascade>
                        <div className="leading-loose">
                            <form onSubmit={authentique} className="max-w-sm m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl">
                                <p className="font-medium text-center text-lg title font-bold">LOGIN</p>
                                <div>

                                    <label className="block text-sm subtitle">Email</label>
                                    <input id="emailInvalid" className=" animate__animated w-full hidden:border-red px-5 py-1 text-slate-400 border-2 rounded focus:outline-none"
                                        type="text"
                                        placeholder="Digite o e-mail"
                                        aria-label="email"
                                        required
                                        value={data.user}
                                        name="user"
                                        onChange={handleData}
                                    />
                                    {/*Span de erros */}
                                    <span id="spanEmail" className="text-sm font-light text-red animate__animated animate__shakeX">{error}</span>
                                </div>

                                <div>
                                    <label className="block text-sm subtitle">Senha</label>
                                    <div className="flex flex-row">
                                        <input id="passInvalid" className="animate__animated w-full hidden:border-red px-5 py-1 text-slate-400 rounded-l-md border-l-2 border-y-2 focus:outline-none "
                                            type={show}
                                            placeholder="Digite a sua senha"
                                            arial-label="password"
                                            required
                                            value={data.password}
                                            name="password"
                                            onChange={handleData}
                                        />

                                        {/*Botão de animação do Show/Hide da senha */}
                                        <button
                                            id="showValid"
                                            className="xl:flex animate_animated items-center border-slate-400 justify-center border-r-2 border-y-2 xl:mr-0.5 rounded-r-md"
                                            type="button"
                                            onClick={showValue}

                                        >
                                            <div className="mr-2" >
                                                <Lottie
                                                    options={defaultOptions}
                                                    height={40}
                                                    width={30}
                                                    isPaused={animState.isPaused}
                                                    isStopped={animState.isStopped}
                                                    direction={animState.direction}
                                                    speed={2}
                                                />
                                            </div>
                                        </button>
                                    </div>
                                    {/*Span de erros */}
                                    <span id="spanPass" className="text-sm font-light text-red animate__animated animate__shakeX">{error}</span>
                                </div>


                                <div className="mt-4 mb-5 items-center flex justify-between">

                                    <button className="px-4 py-1 font-light tracking-wider bg-slate text-white subtitle hover:bg-gray-800 hover:bg-fourth-color rounded"
                                    >
                                        Entrar

                                    </button>


                                    <a
                                        className="inline-block right-0 align-baseline font-bold cursor-pointer text-sm text-500 subtitle hover:text-primary-color"
                                        href="/esqsenha"
                                    >Esqueceu a senha ?</a>
                                </div>


                                <div className="text-center">
                                    {/*Volta a rota principal da apliaçõa */}
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