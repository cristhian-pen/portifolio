import React, { useState } from "react";

//Efeitos e animações
import { Fade } from 'react-reveal';
import 'animate.css';
import Swal from "sweetalert2";

//Icones
import { FaTrashAlt } from 'react-icons/fa';

//Componentes
import API from '../../../../Services/Api/api';

export default function Central() {

    //Hooks
    const [data, setData] = useState({ tituloCentral: '', subCentral: '', sobre: '' });
    const [img, setImg] = useState();
    const [error, setError] = useState({ titulo: '', subtitulo: '', sobre: '' });

    //Função que interpreta as entradas no formulario
    const handleInput = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
    }

    //Captura o input das imagens e exibe no front
    const inputImage = e => {

        if (e.target.files && e.target.files.length > 0) {

            setImg(e.target.files[0])
        }
    }

    //Remove imagens da seleção
    const removeImg = () => { setImg(); }


    //Atualiza dados da pagina central
    const atualizaDados = (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('tituloCentral', data.tituloCentral);
        formData.append('subCentral', data.subCentral);
        formData.append('sobre', data.sobre);

        if (img) {
            formData.append('imgUsuario', img);
        }

        //Validações do formulario
        if (data.tituloCentral === '' || data.subCentral === '' || data.sobre === '') {
            setError({ titulo: 'Preencha os campos obrigatórios', subtitulo: 'Preencha os campos obrigatórios', sobre: 'Preencha os campos obrigatórios' });
        }
        else {
            //Caso passe na validação acima, Faz o put na api e limpa os campos
            setError({ titulo: '', subtitulo: '', sobre: '' })

            API.put('/api/central/atualizar', formData, { headers: { "Content-Type": "multipart/form-data" } })
                .then((res) => {

                    //Faz o alerta caso o put tenha sido bem sucedido
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        icon: 'success',
                        showConfirmButton: false,
                        title: 'Dados atualizados com sucesso!',
                        timer: 5000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.addEventListener('mouseover', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    });
                    Toast.fire({ icon: 'success', title: 'Dados atualizados com sucesso' })

                    //Limpa os campos
                    setData({ tituloCentral: '', subCentral: '', sobre: '', })
                    setImg('');

                })
                .catch((err) => {
                    //Retorna o erro caso oo put falhe
                    Swal.fire({ icon: 'error', title: 'Ocorreu um erro, verifique o administrador' })
                    console.log(err);
                });
        }
        //Retorna scroll para o inicio para visualizar o alerta
        window.scrollTo(0, 0)
    }

    return (
        <Fade top cascade>
            <section className="flex flex-col h-auto items-center xl:mr-96 xl:ml-96">
                <h1 className="title text-lg xl:text-3xl text-center my-16 mb-16 ">Atualização da Pagina Central</h1>

                <form className="flex flex-col xl:flex-row xl:flex-wrap items-center justify-between" encType="multipart/form-data">

                    <label className="text-md xl:text-md flex flex-col font-bold subtitle">
                        Titulo *
                        <input
                            type="text"
                            name="tituloCentral"
                            placeholder="Digite o titulo"
                            value={data.tituloCentral}
                            className=" border-2 font-bold text-sm border-slate-400 shadow my-2 rounded w-60 xl:w-96 pl-1.5 h-8 "
                            onChange={handleInput}
                        />
                        <span className="text-sm font-light text-red animate_animated animate__shakeX">{error.titulo}</span>
                    </label>

                    <label className="text-md xl:text-md flex flex-col subtitle font-bold">
                        Sub-titulo *
                        <input
                            type="text"
                            name="subCentral"
                            placeholder="Digite o subtitulo"
                            value={data.subCentral}
                            className=" border-2 font-bold text-sm border-slate-400 shadow rounded my-2 w-60 xl:w-96 pl-1.5 h-8 "
                            onChange={handleInput}
                        />
                        <span className="text-sm font-light text-red animate_animated animate__shakeX">{error.subtitulo}</span>
                    </label>

                    <label className="text-md xl:text-md flex flex-col subtitle font-bold my-5">
                        Sobre
                        <textarea
                            className="peer block min-h-[auto] w-full xl:w-96 font-bold text-sm rounded border-2 border-slate-400 my-2 py-[0.32rem] px-3 leading-[1.6] transition-all duration-200 ease-linear focus:placeholder data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            rows="5"
                            placeholder="Escreva algo sobre voce..."
                            value={data.sobre}
                            name="sobre"
                            onChange={handleInput}
                        ></textarea>
                        <span className="text-sm font-light text-red animate_animated animate__shakeX">{error.sobre}</span>
                    </label>
                    {
                        img
                            //Mostra a imagem no front caso a variavel seja true
                            ?
                            <div class="flex border-2 justify-center border-slate-400 rounded w-full pt-5 pb-6">
                                <img src={URL.createObjectURL(img)} alt="imagecentral" className="w-24 ml-5 border-2 rounded " />
                                <button
                                    type="button"
                                    onClick={removeImg}
                                >
                                    <FaTrashAlt
                                        className="ml-5 w-8 h-8"
                                    ></FaTrashAlt>
                                </button>
                            </div>
                            :
                            <div className="flex flex-col items-center justify-center w-60 xl:w-full">
                                <label className="text-md xl:text-md subtitle font-bold my-5 xl:mr-5" >Imagem central</label>
                                <label htmlfor="dropzone-file" className="flex flex-col text-center items-center justify-center w-full h-64 border-2 border-slate-400 border-dashed rounded-lg cursor-pointer hover:bg-slate-400 ease-in-out duration-500">
                                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokelinecap="round" strokelinejoin="round" strokewidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Insira uma imagem</span> ou arraste e solte</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG ou JPG (MAXName. 224x224px)</p>
                                    </div>
                                    <input id="dropzone-file" name="imgUsuario" accept="image/*" onChange={inputImage} type="file" class="hidden" />
                                </label>
                            </div>

                    }
                </form>
                <button
                    type="button"
                    className="my-14 text-white text-sm font-bold text-center w-40 h-14 border-2 rounded-lg bg-slate-400 ease-in-out duration-500 hover:bg-fourth-color"
                    onClick={atualizaDados}
                >
                    Registrar Alterações
                </button>
            </section>
        </Fade>
    );
}