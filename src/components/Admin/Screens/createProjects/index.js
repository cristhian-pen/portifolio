import React, { useState } from 'react';

//Efeitos e animações
import { Fade } from 'react-reveal';
import Swal from 'sweetalert2';

//Icones
import { FaTrashAlt } from 'react-icons/fa';

//Componentes
import api from '../../../../Services/Api/api';


export default function CreateProjecs() {

    //Hooks
    const [data, setData] = useState({ tituloProjeto: '', sobreProjeto: '', repoProjeto: '' });
    const [imgProjeto, setImgProjeto] = useState();
    const [error, setError] = useState('');

    //Faz o input das imagens e apresenta no front
    const inputImage = e => {
        //const novasImagens = [...imgProjeto];
        //novasImagens.push(URL.createObjectURL(e.target.files[0]));
        /* const novasImagens = Array.from(e.target.files);
        setImgProjeto(novasImagens);
        e.preventDefault(); */
        if (e.target.files && e.target.files.length > 0) {

            setImgProjeto(e.target.files[0])
        }
    }

    //Remove as imagens da seleção
    const removeImage = () => {
        /* setImgProjeto(prevImages => {
            const images = [...prevImages];
            images.splice(index, 1);
            return images;
        })
        e.preventDefault(); */
        setImgProjeto();
    }

    //Interpreta as entradas do formulario
    const handleInput = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
        setError('');
    }

    //Insert no banco de dados com as informações do formulario
    const criarProjetos = () => {

        const formData = new FormData();

        formData.append('tituloProjeto', data.tituloProjeto);
        formData.append('sobreProjeto', data.sobreProjeto);
        formData.append('repoProjeto', data.repoProjeto);

        if (imgProjeto) {
            formData.append('imgProjeto', imgProjeto);
        }

        //Validações
        if (data.tituloProjeto === '' || data.sobreProjeto === '' || data.imgProjeto === '') {
            setError("Preencha os campos obrigatórios!")
        } else {

            //Caso a condição seja verdadeira, faz o POST na api 
            api.post('/api/projetos/criar', formData, { headers: { 'Content-Type': 'multipart/form-data' } })
                .then((res) => {
                    //Caso o POST seja completado exibe o alerta
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
                    Toast.fire({ icon: 'success', title: `Projeto ${data.tituloProjeto} criado com sucesso!'`, })

                    //Limpa os campos do formulario
                    setData({ tituloProjeto: '', subProjeto: '', sobreProjeto: '', repoProjeto: '', })
                    setImgProjeto();

                    //Mova a pagina para o top
                    window.scrollTo(0, 0)
                })
                .catch(err => {
                    //Caso não seja concluido retorna o alerta de erro
                    Swal.fire({ icon: 'error', title: 'Ocorreu um erro ' + err })
                })
        }
    }

    return (
        <Fade top cascade>
            <section className=" flex flex-col h-auto items-center justify-center xl:mr-96 xl:ml-96">
                <h1 className="title text-lg xl:text-3xl text-center my-16 mb-14">Registrar Projetos</h1>

                <form method='PUT' className="flex flex-col xl:flex-row xl:flex-wrap items-center justify-between" enctype="multipart/form-data">

                    <label className="text-md xl:text-md flex flex-col font-bold subtitle">
                        Titulo *
                        <input
                            type="text"
                            name="tituloProjeto"
                            value={data.tituloProjeto}
                            placeholder='Digite o titulo do projeto'
                            onChange={handleInput}
                            className=" border-2 font-bold text-sm border-slate-400 shadow my-2 rounded w-60 xl:w-96 pl-1.5 h-8 "
                        />
                        <span className="text-sm font-light text-red animate_animated animate__shakeX">{error}</span>
                    </label>

                    <label className="text-md xl:text-md flex flex-col font-bold subtitle">
                        Repositorio do Projeto
                        <input
                            type="text"
                            name="repoProjeto"
                            value={data.repoProjeto}
                            placeholder='Digite a url do seu repositorio'
                            onChange={handleInput}
                            className=" border-2 font-bold text-sm border-slate-400 shadow my-2 rounded w-60 xl:w-96 pl-1.5 h-8 "
                        />
                    </label>

                    <label className="text-md xl:text-md flex flex-col font-bold subtitle my-5">
                        Descrição *
                        <textarea
                            className="peer block min-h-[auto] w-full xl:w-96 text-sm font-bold rounded border border-slate-400 my-2 py-[0.32rem] px-3 leading-[1.6] transition-all duration-200 ease-linear focus:placeholder data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            rows="5"
                            name="sobreProjeto"
                            value={data.sobreProjeto}
                            onChange={handleInput}
                        ></textarea>
                        <span className="text-sm font-light text-red animate_animated animate__shakeX">{error}</span>
                    </label>
                    {
                        !imgProjeto
                            ?
                            <div className="flex flex-col items-center justify-center w-full">
                                <label className="text-md xl:text-md flex flex-col font-bold subtitle mb-2" >Insira as Imagens do projeto *</label>
                                <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-slate-400 border-dashed rounded cursor-pointer hover:bg-slate-400 ease-in-out duration-500">
                                    <div className="flex flex-col items-center justify-center w-60 xl:w-full">
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            {/* <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokelinecap="round" strokelinejoin="round" strokewidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg> */}
                                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Insira uma imagem</span> ou arraste e solte</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG ou JPG (MAX. 224x224px)</p>
                                        </div>
                                        <input id="dropzone-file" name='imgProjeto' accept="image/*" onChange={inputImage} type="file" className="hidden" />
                                    </div>
                                </label>
                            </div>
                            :
                            <div class="flex border-2 justify-center border-slate-400 rounded w-full pt-5 pb-6">
                                <img src={URL.createObjectURL(imgProjeto)} alt="imgProjeto" className="w-24 ml-5 border-2 rounded " />
                                <button
                                    type="button"
                                    onClick={removeImage}
                                >
                                    <FaTrashAlt
                                        className="ml-5 w-8 h-8"
                                    ></FaTrashAlt>
                                </button>
                            </div>

                    }
                    <span className="text-sm font-light text-red animate_animated animate__shakeX my-2">{error}</span>
                </form>
                <button
                    type="button"
                    onClick={criarProjetos}
                    className="my-14 text-white text-sm font-bold text-center w-40 h-14 border-2 rounded-lg bg-slate-400 ease-in-out duration-500 hover:bg-fourth-color">
                    Criar Projeto
                </button>
            </section>
        </Fade>
    )
}