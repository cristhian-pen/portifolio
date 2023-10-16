import React, { useEffect, useState } from "react";

//animações e efeitos
import Fade from 'react-reveal';
import NoPhoto from "../Animations/No-photo";

//componentes e serviços
import API from '../../Services/Api/api';
import Navigator from "../Navigator";
import ProjectPage from "../Projects";
import Footer from "../Footer";

//icons
import { FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';

export default function Home() {

    const [info, setInfo] = useState([]);
    const [url, setUrl] = useState('');

    async function getInformacao() {
        await API.get('/api/central')
            .then((res) => {
                //API retorna as informações no state data que recebe um objeto
                setInfo(res.data.informações[0])
                setUrl(res.data.url);
            })
            .catch((err) => {
                console.log(err);
            });

    }

    //consumo da api que retorna as informações na tela de admin
    useEffect(() => {

        getInformacao();

    }, [500]);

    //const imagem = info.IMG_CENTRAL;

    return (
        <div className="opacity-100 headline">
            {/* componente header*/}
            <Navigator />

            <Fade bottom>
                <section className="flex my-24 flex-col scroll-smooth56 justify-center items-center md:my-56">
                    {
                        //renderização condicional que define se a imagem for nula retorna uma animação
                        !url
                            ?
                            <div className="rounded-full border-2 border-white w-56 h-56 mb-8 bg-slate-400">
                                <NoPhoto
                                    height={224}
                                    width={224}
                                />
                            </div>
                            :
                            <img src={url + info?.IMG_CENTRAL} className="rounded-full border-2 border-white w-56 h-56 mb-8" alt="perfil" />
                    }

                    <div className="text-white text-center title text-3xl xl:text-8xl">
                        <code>{info.TITULO_CENTRAL}</code>
                        <br />
                        <code >{info.SUBTITULO_CENTRAL}</code>
                    </div>
                </section>
            </Fade>
            <section className="flex flex-col headline w-screen shadow-2xl bg-white rounded-lg justify-center items-center xl:h-auto xl:rounded-t-[150px]">
                <Fade bottom>

                    {/*um pouco sobre*/}
                    <div id="About" className="flex title text-center my-20 mb-10 text-3xl xl:text-4xl">
                        <h2>Sobre</h2>
                    </div>
                    <div className="mr-5 ml-5 xl:mr-20 xl:ml-20">
                        <p className="title text-slate text-center mb-8 text-xl w-fit">
                            {info.SOBRE_CENTRAL}
                        </p>
                    </div>

                    {/*Projetos e desings feitos */}
                    <Fade bottom>
                        <div id="projects" className="flex title text-center text-3xl my-24 xl:text-4xl xl:flex-col">
                            <h2>Últimos Projetos e Designs</h2>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <ProjectPage />
                    </Fade>

                    {/* Principais tecnologias de desenvolvimento */}
                    <div id="Tecs" className="my-36 items-center justify-center xl:my-36 xl:mb-20 xl:flex xl:flex-col">
                        <h2 className="title text-center text-3xl xl:text-4xl ">Principais Tecnologias de Desenvolvimento</h2>
                        <div className="my-20 flex flex-col items-center justify-center xl:flex xl:justify-between xl:flex-row">

                            <div className="flex flex-col items-center text-center w-64 xl:mr-28">
                                <FaNodeJs className="cursor-none mb-8 w-16 h-16" ></FaNodeJs>
                                <h4 className="text-slate text-lg font-bold">
                                    Desenvolvimento de projetos
                                    utilizando o melhor das ferramentas
                                    que a linguagem javascript disponibiliza.</h4>
                            </div>
                            <div className="flex flex-col items-center text-center w-64 my-14 mb-14 xl:mr-28">
                                <SiTailwindcss className="cursor-none mb-8 w-16 h-16"></SiTailwindcss>
                                <h4 className="text-slate text-lg font-bold">
                                    Estilização funcional com
                                    uma variedade de plugins para
                                    melhorar a aparência das paginas.</h4>
                            </div>

                            <div className=" flex flex-col items-center text-center w-64 ">
                                <GrMysql className="cursor-none mb-8 w-16 h-16"></GrMysql>
                                <h4 className=" text-slate text-lg font-bold">
                                    Um dos bancos de dados mais
                                    utilizados no mercado de desenvolvimento,
                                    seguro e confiavel.</h4>
                            </div>
                        </div>
                    </div>
                </Fade>

                {/*Footer da página */}
                <Footer />

            </section>
        </div>
    );
}