import React, { useState } from 'react';

//Efeitos e Animações
import { Fade } from 'react-reveal';
import Swal from 'sweetalert2';
import Lottie from 'react-lottie';
import animationData from '../../../../assets/search-icon.json';

//Componentes
import api from '../../../../Services/Api/api';


export default function Projetos() {

    //Hooks
    const [info, setInfo] = useState({ pesqProjeto: '' });
    const [data, setData] = useState({ tituloProjeto: '', sobreProjeto: '', repoProjeto: '', imgProjeto: '' })
    const [error, setError] = useState('');

    //Default animação Lottie
    const defaultOptions = { loop: true, autoplay: true, animationData: animationData, rendererSettings: { preserveAspectRatio: 'xMidYMid slice' } }

    //Interpreta as entradas do formulario
    const handleInput = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    //intepreta as entradas do campo titulo
    const handleTitle = event => {
        setInfo({
            ...info,
            [event.target.name]: event.target.value
        });

    }

    //Pesquisa a partir de entradas do titulo
    function pesquisaProjeto() {

        //Validações
        if (info.pesqProjeto === '') {
            setError("Informe o titulo do projeto que deseja alterar")
        } else {
            //Caso seja verdadeiro retorna as informações
            api.get(`/api/projetos/${info.pesqProjeto}`)
                .then(res => {
                    //Caso não falhe, armazena os dados em um estado
                    if (res.data[0] === undefined) {
                        setInfo('');
                        setError("Projeto não encontrado!");
                    } else {
                        setError('')
                        setInfo(res.data[0]);
                    }
                })
                .catch(err => {
                    //Caso falhe, mostra o erro no console
                    console.log(err);
                })
        }
    }

    //Atualiza dados do projeto
    const atualizaProjeto = () => {

        //Faz o PUT na api limpando os erros
        setError('');
        api.put('/api/projetos/atualizar', {
            tituloProjeto: data.tituloProjeto,
            sobreProjeto: data.sobreProjeto,
            repoProjeto: data.repoProjeto,
            imgProjeto: data.imgProjeto,
            idProjeto: info?.CD_PROJETO

        })
            .then(res => {
                //Caso não falhe, Apresenta o alerta informando que foi feito
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

                Toast.fire({ icon: 'success', title: `${data.tituloProjeto} atualizado com sucesso` })
                //Limpa campos
                setData({ tituloProjeto: '', sobreProjeto: '', repoProjeto: '', imgProjeto: '' })

            }).catch(err => {
                //Caso falhe, apresenta o alerta com erros
                Swal.fire({ icon: "error", title: "Erro no servidor, Contate o suporte!" + err, timer: 5000, showConfirmButton: false })
            })

        //Redireciona a pagina para o topo
        window.scrollTo(0, 0)
    }

    //Deleta projetos selecionados
    const deletaProjetos = () => {

        //Apresenta um alerta indagando se deseja realmente excluir
        window.scrollTo(0, 0);
        //Configuração do alerta
        Swal.fire({
            title: "Tem certeza que deseja excluir o projeto?",
            text: "Você não podera reverter o processo!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim, desejo excluir!',
            cancelButtonText: 'Cancelar'

        }).then(res => {
            //caso confirme, Faz o delete a partir do titulo do projeto
            if (res.isConfirmed) {
                api.delete(`/api/projetos/deleta/${info?.TITULO_PROJETO}`)

                    .then(res => {
                        let timerInterval
                        //Limpa os campos
                        setData({ tituloProjeto: '', sobreProjeto: '', repoProjeto: '', imgProjeto: '' });
                        setInfo({ pesqProjeto: '' });
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

                                if (result.dismiss === Swal.DismissReason.timer) { console.log('closed') }


                                Swal.fire({ icon: 'success', title: 'Projeto deletado', showConfirmButton: false, timer: 3000 })
                            })
                    })
                    .catch(err => {
                        //Caso falhe, retorna o alerta de erro
                        Swal.fire({ icon: 'error', title: "Erro no servidor" + err })

                        //Retorna para o topo da pagina
                        window.scrollTo(0, 0);
                    })
            }
        })
    }


    return (
        <Fade top cascade>
            <section className=" flex flex-col h-auto items-center xl:mr-96 xl:ml-96">
                <h1 className="title text-lg xl:text-3xl text-center my-16 mb-14">Atualização dos Projetos</h1>

                <div className="text-md xl:text-md flex flex-col font-bold my-8 mb-20 subtitle">
                    Nome do Projeto que deseja alterar
                    <div className='flex flex-row'>
                        <input
                            type="text"
                            name="pesqProjeto"
                            value={info.pesqProjeto}
                            onChange={handleTitle}
                            placeholder="Digite o nome do projeto"
                            className=" border-2 font-bold text-sm border-slate-400 shadow my-2 rounded w-60 xl:w-96 pl-1.5 h-8 "
                        />
                        <button
                            type='button'
                            className='ml-0.5 my-0.5'
                            onClick={pesquisaProjeto}
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


                <form className="flex flex-col xl:flex-row xl:flex-wrap items-center justify-between">

                    <label className="text-md xl:text-md flex flex-col font-bold subtitle">
                        Titulo
                        <input
                            type="text"
                            name="tituloProjeto"
                            value={!data.tituloProjeto ? info?.TITULO_PROJETO : data.tituloProjeto}
                            placeholder="Pesquise para começar"
                            onChange={handleInput}
                            className=" border-2 font-bold text-sm border-slate-400 shadow my-2 rounded w-60 xl:w-96 pl-1.5 h-8 "
                        />
                    </label>

                    <label className="text-md xl:text-md flex flex-col font-bold subtitle my-8">
                        Repositorio do Projeto:
                        <input
                            type="text"
                            name="repoProjeto"
                            value={!data.repoProjeto ? info?.REP_PROJETO : data.repoProjeto}
                            onChange={handleInput}
                            placeholder="Pesquise para começar"
                            className=" border-2 font-bold text-sm border-slate-400 shadow my-2 rounded w-60 xl:w-96 pl-1.5 h-8 "
                        />
                    </label>

                    <label className="text-md xl:text-md flex flex-col font-bold subtitle">
                        Descrição do projeto:
                        <textarea
                            className="peer block min-h-[auto] w-full xl:w-96 text-sm font-bold rounded border-2 border-slate-400 my-2 py-[0.32rem] px-3 leading-[1.6] transition-all duration-200 ease-linear motion-reduce:transition-none "
                            rows="5"
                            name="sobreProjeto"
                            placeholder="Pesquise para começar"
                            value={!data.sobreProjeto ? info?.DS_PROJETO : data.sobreProjeto}
                            onChange={handleInput}>
                        </textarea>
                    </label>

                    <div class="flex flex-col items-center justify-center w-full">
                        <label className="text-md xl:text-md flex flex-col font-bold subtitle my-2 mb-5" >Imagem do Projeto</label>
                        <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-slate-400 border-dashed rounded cursor-pointer hover:bg-slate-400 ease-in-out duration-500">
                            {
                                data.imgProjeto === '' ?
                                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Insira uma imagem</span> ou arraste e solte</p>
                                        <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG ou JPG (MAX. 64x64px)</p>
                                    </div> :
                                    <div class="flex flex-col items-center justify-center pt-5 pb-6">{data.imgProjeto}</div>
                            }
                            <input id="dropzone-file" name="imgprojeto" onChange={handleInput} type="file" class="hidden" />
                        </label>
                    </div>
                </form>
                <button type="button" onClick={atualizaProjeto} className="my-10 mb-5 text-white text-sm font-bold text-center w-40 h-14 border-2 rounded-lg bg-slate-400 ease-in-out duration-500 hover:bg-fourth-color">
                    Registrar Alterações
                </button>
                <button type="button" onClick={deletaProjetos} className="mb-20 text-white text-sm font-bold text-center w-40 h-14 border-2 rounded-lg bg-slate-400 ease-in-out duration-500 hover:bg-red">
                    Deletar Projeto
                </button>
            </section>
        </Fade>
    )
}