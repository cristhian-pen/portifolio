import React, { useEffect, useState } from "react";
//animações e efeitos
import Fade from 'react-reveal';
import NoData from "../../Animations/No-data";

//componentes
import Footer from "../../Footer";
import Navigator from "../../Navigator";
import api from "../../../Services/Api/api";

function Repositorio() {

    const [data, setData] = useState([]);
    const [url, setUrl] = useState();

    //listagem dos projetos a partir do endpoint da api
    //const abort = new AbortController();

    function getDados() {
        api.get('/api/projetos')
            .then(res => {
                setData(res.data.informacoes);
                setUrl(res.data.url);
                console.log(res.data);
            });
    }

    useEffect(() => {
        getDados();
    }, [500]);

    return (
        <div className="opacity-100 headline h-screen">
            {/*Header da pagina*/}
            <Navigator />

            <section className="flex my-24 flex-col headline w-screen shadow-2xl bg-white rounded-lg items-center xl:h-screen xl:rounded-t-[150px] ">
                <p className="text-center text-3xl title my-20 underline xl:text-4xl">Projetos</p>
                <Fade bottom>
                    {
                        //renderização condicional da listagem
                        data === undefined ?

                            //animação default caso não tenha resultados
                            <div className="flex my-20 flex-wrap items-center justify-center w-1/2">
                                <ul className="items-center flex flex-col">
                                    <li className="cursor-none mb-5 h-36 w-36">
                                        <NoData
                                            height={144}
                                            width={144}
                                        />
                                    </li>
                                    <li className=" font-bold text-center cursor-none subtitle ">Sem Projetos ainda</li>
                                </ul>
                            </div>
                            :
                            <div className="flex flex-wrap items-center justify-center w-1/2">

                                {
                                    //objeto carregado com os dados da api e mapeado para ser exibido dinamicamente
                                    Object.values(data).map(
                                        item =>
                                            <ul className="items-center flex flex-col" key={item.id}>

                                                {/* Passando a chave de pesquisa atraves do parametro da rota */}
                                                <a href={`/home/repositorio/showroom/${item.TITULO_PROJETO}`}>
                                                    <img src={url + item.IMG_PROJETO} alt="imagemProjeto" className="border-2 border-slate-400 cursor-pointer hover:scale-105 transition delay-300 ease-in-out mb-5 shadow rounded h-36 w-36 mr-20" />
                                                </a>
                                                <li className=" font-bold text-center cursor-pointer subtitle mr-20 mb-20">{item.TITULO_PROJETO}</li>
                                            </ul>
                                    )}
                            </div>
                    }

                </Fade>
                <Footer />
            </section >
        </div >
    );
}


export default Repositorio;