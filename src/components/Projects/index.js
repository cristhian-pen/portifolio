import React, { useEffect, useState } from "react";

//Animações
import NoData from "../Animations/No-data";

//Serviços de dados da api
import api from "../../Services/Api/api";

export default function ProjectPage() {

    const [dados, setDados] = useState([]);
    const [url, setUrl] = useState();

    //const abort = new AbortController();

    async function getDados() {
        await api.get('/api/projetos')
            .then(res => {
                setDados(res.data.informacoes);
                setUrl(res.data.url);
            })
    }

    //Consumo da api que retorna os dados dos ultimos projetos listados
    useEffect(() => {

        getDados();

    }, [500]);


    return (
        <section className="headline">
            <div className=" mr-20 ml-20 flex flex-col items-center">
                {
                    //Renderização condional das imagens do projeto  
                    dados === undefined ?

                        //Apresenta uma animação Lottie
                        <ul className="flex flex-col items-center xl:flex xl:flex-row xl:flex-wrap xl:justify-between">
                            <li className="flex flex-col justify-center text-center ">
                                <a href="/home/projetos/repositorio">
                                    <div className="h-64 cursor-pointer w-80 text-center rounded xl:w-96 xl:h-96">
                                        <NoData
                                            height={256}
                                            width={320}
                                        />
                                    </div>
                                    <p className="my-5 text-slate text-lg cursor-none font-bold xl:my-10 ">Sem projetos ainda...</p>
                                </a>
                            </li>
                        </ul>

                        :

                        <ul className="flex flex-col items-center xl:flex xl:flex-row xl:flex-wrap xl:justify-between">
                            <li className="flex flex-col justify-center text-center ">
                                <a href="/home/projetos/repositorio">
                                    <img src={url + dados[0]?.IMG_PROJETO} alt="imagemProjetos" className="h-64 w-80 text-center cursor-pointer hover:scale-105 transition ease-in-out delay-500 rounded border-2 border-slate-400  xl:w-96 xl:h-96" />
                                    <p className="my-5 text-slate text-lg cursor-none font-bold xl:my-10 xl:mr-10">{dados[0]?.TITULO_PROJETO}</p>
                                </a>
                            </li>
                            <li className="flex flex-col my-10 mr-10 ml-10 mb-10 justify-center items-center text-center ">
                                <li className="flex flex-col justify-center text-center">
                                    <a href="/home/projetos/repositorio">
                                        <img src={url + dados[1]?.IMG_PROJETO} alt="imagemProjetos" className="h-64 w-80 text-center cursor-pointer hover:scale-105 transition ease-in-out delay-500 rounded border-2 border-slate-400  xl:w-96 xl:h-96" />
                                        <p className="my-5 text-slate text-lg cursor-none font-bold xl:mr-10 xl:my-10">{dados[1]?.TITULO_PROJETO}</p>
                                    </a>
                                </li>
                            </li>
                            <li className="flex flex-col justify-center text-center ">
                                <a href="/home/projetos/repositorio">
                                    <img src={url + dados[2]?.IMG_PROJETO} alt="imagemProjetos" className="h-64 w-80 text-center cursor-pointer hover:scale-105 transition ease-in-out delay-500 rounded border-2 border-slate-400  xl:w-96 xl:h-96" />
                                    <p className="my-5 text-slate text-lg cursor-none font-bold xl:my-10 xl:mr-10 ">{dados[2]?.TITULO_PROJETO}</p>
                                </a>
                            </li>
                        </ul>
                }
            </div >
        </section >
    );
}