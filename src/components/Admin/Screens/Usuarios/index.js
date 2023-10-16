import React, { useState } from 'react';

//Efeitos e animações
import { Fade } from 'react-reveal';
import Swal from 'sweetalert2';
import Lottie from 'react-lottie';
import animationData from '../../../../assets/search-icon.json';

//Componentes
import api from '../../../../Services/Api/api';


export default function DelAtualizaUsuario() {

    //Hooks
    const [info, setInfo] = useState({ pUsuario: '' });
    const [data, setData] = useState({ nome: '', sobrenome: '', email: '', senha: '' });
    const [error, setError] = useState('');

    //Default Lottie
    const defaultOptions = { loop: true, autoplay: true, animationData: animationData, rendererSettings: { preserveAspectRatio: 'xMidYMid slice' } }

    //Interpreta os dados de entrada do formulario
    const handleInput = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    //Interpreta os dados de entrada do titulo
    const handleTitle = event => {
        setInfo({
            ...info,
            [event.target.name]: event.target.value
        });

    }

    //Retorna dados do usuario da api
    function pesquisaUsuario() {

        //Validações
        if (info.pUsuario === '') {
            setError("Informe um usuario válido");
        } else {

            //Retorna dados da api a partir do parametro
            api.get(`/api/usuarios/${info.pUsuario}`)

                .then(res => {
                    //Caso de certo retorna o alerta informando que funcionou
                    if (res.data[0] === undefined) {
                        setInfo('');
                        setError("Usuario não encontrado!");
                    } else {
                        setError('')
                        setInfo(res.data[0]);
                    }
                })

                .catch(err => {
                    //Caso falhe, da erro no console
                    console.log(err);
                })
        }
    }

    //Atualiza informações do usuario
    const atualizaUsuario = () => {

        //Validações
        if (info.pUsuario === '') {
            setError("Informe um usuario válido");
        } else {

            //Limpa os erros e faz o PUT no banco de dados
            setError('');
            api.put('/api/usuarios/atualizar', {
                nome: data.nome,
                sobrenome: data.sobrenome,
                email: data.email,
                senha: data.senha,
                idUsuario: info?.CD_USUARIO
            })
                .then(res => {
                    //Caso não falhe o PUT, retorna o alerta informando o sucesso
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

                    Toast.fire({ icon: 'success', title: `${data.nome} atualizado com sucesso` })
                })
                .catch(err => {
                    //Caso falhe retorna o erro no alerta
                    Swal.fire({ icon: "error", title: "Erro no servidor, Contate o suporte!" + err, timer: 5000, showConfirmButton: false })
                })
        }
        //Retorna para o topo da pagina
        window.scrollTo(0, 0)
    }

    //Faz o delete do usuario da base
    const deletaUsuario = () => {

        //Move a pagina para o topo
        window.scrollTo(0, 0);

        //Informa se deseja realmente excluir
        Swal.fire({
            title: "Tem certeza que deseja excluir o usuario?",
            text: "Você não podera reverter o processo!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim, desejo excluir!',
            cancelButtonText: 'Cancelar'

        })
            .then(res => {
                //Caso o usuario confirme, envia o DELETE para o servidor
                if (res.isConfirmed) {
                    //Faz o DELETE
                    api.delete(`/api/usuarios/deletar/${info.EMAIL}`)
                        .then(res => {
                            let timerInterval
                            Swal.fire({
                                title: "Excluindo....",
                                html: '<b><b/>',
                                timer: 3000,
                                didOpen: () => {
                                    Swal.showLoading();
                                    const b = Swal.getHtmlContainer().querySelector('b')
                                    timerInterval = setInterval(() => {
                                        b.textContent = Swal.getTimerLeft()
                                    }, 100)
                                },
                                willClose: () => {
                                    clearInterval(timerInterval)
                                }
                            })
                                .then((result) => {
                                    setInfo({ pUsuario: '' })
                                    setData({ nome: '', sobrenome: '', email: '', senha: '' })

                                    if (result.dismiss === Swal.DismissReason.timer) {
                                        console.log('closed')
                                    }

                                    Swal.fire({ icon: 'success', title: 'Usuario deletado', showConfirmButton: false, timer: 3000 })

                                    //Limpa os campos
                                })
                        })
                }
            })
            .catch(err => {
                //Caso falhe, retorna o alerta de erro
                Swal.fire({ icon: 'error', title: "Erro no servidor" + err })

                //Move a pagina para o topo
                window.scrollTo(0, 0);
            })

    }




    return (
        <Fade top cascade>
            <section className=" flex flex-col h-auto items-center xl:mr-96 xl:ml-96">
                <h1 className="title text-lg xl:text-3xl text-center my-16 mb-14">Atualizações de Usuario</h1>

                <div className="text-md xl:text-md flex flex-col font-bold my-8 mb-20 subtitle">
                    Digite o email do seu usuario
                    <div className='flex flex-row'>
                        <input
                            type="email"
                            name="pUsuario"
                            value={info.pUsuario}
                            onChange={handleTitle}
                            placeholder="Digite o email do usuario que deseja alterar"
                            className=" border-2 font-bold text-sm border-slate-400 shadow my-2 rounded w-60 xl:w-80 pl-1.5 h-8 "
                        />
                        <button
                            type='button'
                            className='ml-0.5 my-0.5'
                            onClick={pesquisaUsuario}
                        >
                            <Lottie
                                options={defaultOptions}
                                isPaused={false}
                                isStopped={false}
                                height={40}
                                width={40}
                            />
                        </button>
                    </div>
                    <span className="text-sm font-light text-red animate_animated animate__shakeX">{error}</span>
                </div>


                <form className="flex flex-col items-center ">

                    <label className="text-md xl:text-md flex flex-col font-bold subtitle">
                        Nome
                        <input
                            type="text"
                            name="nome"
                            value={data.nome || info?.NOME}
                            placeholder="Pesquise para começar"
                            onChange={handleInput}
                            className=" border-2 font-bold text-sm border-slate-400 shadow my-2 rounded w-60 xl:w-96 pl-1.5 h-8 "
                        />
                    </label>

                    <label className="text-md xl:text-md flex flex-col font-bold subtitle my-8">
                        Sobrenome
                        <input
                            type="text"
                            name="sobrenome"
                            value={data.sobrenome || info?.SOBRENOME}
                            onChange={handleInput}
                            placeholder="Pesquise para começar"
                            className=" border-2 font-bold text-sm border-slate-400 shadow my-2 rounded w-60 xl:w-96 pl-1.5 h-8 "
                        />
                    </label>

                    <label className="text-md xl:text-md flex flex-col font-bold subtitle">
                        Email
                        <input
                            type="text"
                            name="email"
                            value={data.email || info?.EMAIL}
                            placeholder="Pesquise para começar"
                            onChange={handleInput}
                            className=" border-2 font-bold text-sm border-slate-400 shadow my-2 mb-8 rounded w-60 xl:w-96 pl-1.5 h-8 "
                        />
                    </label>

                    <div>
                        <h6 className="text-sm font-light text-center text-slate-400">Para alterar a senha
                            <a href='/alterarSenha' className="text-sm font-light text-center text-red "> clique aqui</a>
                        </h6>
                    </div>

                    <button type="button" onClick={atualizaUsuario} className="my-8 text-white text-sm font-bold text-center w-40 h-14 border-2 rounded-lg bg-slate-400 ease-in-out duration-500 hover:bg-fourth-color">
                        Atualizar Usuario
                    </button>
                </form>
                <button type="button" onClick={deletaUsuario} className="mb-20 text-white text-sm font-bold text-center w-40 h-14 border-2 rounded-lg bg-slate-400 ease-in-out duration-500 hover:bg-red">
                    Deletar Usuario
                </button>
            </section>
        </Fade>
    )
}