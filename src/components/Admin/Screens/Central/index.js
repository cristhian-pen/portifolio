import React from "react";
import { Fade } from 'react-reveal';

export default function Central() {
    return (
        <Fade top cascade>
            <section className="flex flex-col items-center xl:mr-96 xl:ml-96">
                <h1 className="title text-lg xl:text-3xl text-center my-16 mb-16 ">Informações da Pagina Central</h1>

                <form className="flex flex-col xl:flex-row xl:flex-wrap items-center justify-between">

                    <label className="text-md xl:text-xl  items-center flex flex-col font-bold mb-5">
                        Titulo Central:
                        <input
                            type="text"
                            name="tituloCentral"
                            className=" border font-light text-sm border-slate-900 shadow-lg rounded-md w-60 xl:w-96 xl:ml-1.5 pl-1.5 h-8 "
                        />
                    </label>

                    <label className="text-md xl:text-xl  items-center flex flex-col font-bold my-5 ">
                        Sub-titulo Central:
                        <input
                            type="text"
                            name="subtituloCentral"
                            className=" border font-light text-sm border-slate-900 shadow-lg rounded-md mb-5 w-60 xl:w-96 pl-1.5 xl:ml-1.5 h-8 "
                        />
                    </label>

                    <label className="text-md xl:text-xl  items-center flex flex-col font-bold mb-5">
                        Sobre:
                        <textarea
                            className="peer block min-h-[auto] w-full font-light text-sm rounded border border-black my-2 py-[0.32rem] px-3 leading-[1.6] transition-all duration-200 ease-linear focus:placeholder data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            rows="3"
                        ></textarea>
                    </label>

                    <div class="flex flex-col items-center justify-center w-60 xl:w-full">
                        <label className="text-md xl:text-xl  items-center flex flex-col font-bold my-5 mb-5" >Imagem central</label>
                        <label for="dropzone-file" class="flex flex-col text-center items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:bg-slate-400 ease-in-out duration-500">
                            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Insira uma imagem</span> ou arraste e solte</p>
                                <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG ou JPG (MAX. 224x224px)</p>
                            </div>
                            <input id="dropzone-file" type="file" class="hidden" />
                        </label>
                    </div>
                </form>
                <button type="submit" className="my-14 text-white text-sm font-bold text-center w-40 h-14 border-2 rounded-lg bg-slate-400 ease-in-out duration-500 hover:bg-fourth-color">
                    Registrar Alterações
                </button>
            </section>
        </Fade>
    );
}