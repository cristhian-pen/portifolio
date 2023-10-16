import React from "react";

//Efeitos e animações
import Fade from 'react-reveal';

//componentes 
import Footer from "../../Footer";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

//Icones
import {
    SiSequelize,
    SiMysql,
    SiJavascript,
    SiHandlebarsdotjs,
    SiExpress,
    SiInsomnia,
    SiBootstrap
} from 'react-icons/si';

export default function ShowComponent({ tituloProjeto, imagem, descricao, repoProjeto }) {
    return (
        <div>
            <section className="flex my-24 flex-col headline w-screen shadow-2xl bg-white rounded-lg justify-center items-center xl:h-auto xl:my-40 xl:rounded-t-[150px]">
                <Fade bottom>
                    <p className="text-center text-3xl title my-20 underline xl:text-4xl">{tituloProjeto}</p>
                </Fade>
                <Fade bottom>
                    <div className="flex flex-col justify-center items-center border-2 rounded-3xl shadow ml-1.5 mr-1.5 mb-10 xl:mb-20 xl:mr-24 xl:ml-24">

                        {/*Carousel de imagens */}
                        <Carousel
                            autoPlay={true}
                            infiniteLoop={true}
                            interval={5000}
                            showStatus={false}
                            showThumbs={false}
                            dynamicHeight={true}
                            showArrows={false}
                        >
                            <div>
                                <img src={imagem} className="rounded-3xl" alt="image1" />
                            </div>
                            {/* <div>
                                <img src={imagem} className="rounded-3xl" alt="image2" />
                            </div>
                            <div>
                                <img src={imagem} className="rounded-3xl" alt="image3" />
                            </div>
                            <div>
                                <img src={imagem} className="rounded-3xl" alt="image4" />
                            </div> */}
                        </Carousel>

                    </div>
                </Fade>
                <div className="flex flex-col text-center">
                    <Fade bottom>
                        <p className="text-3xl title mb-20 xl:text-4xl">Descrição do Projeto</p>
                    </Fade>
                    <Fade bottom>
                        <article className="mr-5 ml-5 title text-slate text-center mb-8 text-xl xl:ml-24 xl:mr-24">
                            <p>
                                {descricao}
                            </p>
                            <center className="my-20 underline hover:text-slate-900 cursor-pointer"><a href={repoProjeto} target={"_blank"}>Voce pode acessar o codigo fonte clicando aqui</a></center>
                        </article>
                        <h2 className="title text-3xl text-center my-10 xl:my-20 xl:text-4xl">Tecnologias do Projeto</h2>

                        <ul className="flex flex-col justify-center items-center mb-24 xl:mb-44 xl:flex-wrap xl:flex-row">

                            <li className="flex flex-col my-8 mb-8 justify-center items-center xl:mr-14">
                                <SiJavascript className="cursor-none mb-2 w-14 h-14 rounded-lg" />
                                <p className="text-slate text-center text-lg">Javascript</p>
                            </li>
                            <li className="flex flex-col mb-8 justify-center items-center xl:mr-14">
                                <SiHandlebarsdotjs className="cursor-none mb-2 w-14 h-14 rounded-lg" />
                                <p className="text-slate text-center text-lg">Handlebars</p>
                            </li>
                            <li className="flex flex-col mb-8 justify-center items-center xl:mr-14">
                                <SiSequelize className="cursor-none mb-2 w-14 h-14 rounded-lg" />
                                <p className="text-slate text-center text-lg">Sequelize</p>
                            </li>
                            <li className="flex flex-col mb-8 justify-center items-center xl:mr-14">
                                <SiExpress className="cursor-none mb-2 w-14 h-14 rounded-lg" />
                                <p className="text-slate text-center text-lg">ExpressJs</p>
                            </li>
                            <li className="flex flex-col mb-8 justify-center items-center xl:mr-14">
                                <SiBootstrap className="cursor-none mb-2 w-14 h-14 rounded-lg" />
                                <p className="text-slate text-center text-lg">Bootstrap</p>
                            </li>
                            <li className="flex flex-col mb-8 justify-center items-center xl:mr-14">
                                <SiMysql className="cursor-none mb-2 w-14 h-14 rounded-lg" />
                                <p className="text-slate text-center text-lg">Mysql</p>
                            </li>
                            <li className="flex flex-col justify-center items-center xl:mr-14">
                                <SiInsomnia className="cursor-none mb-2 w-14 h-14 rounded-lg" />
                                <p className="text-slate text-lg">Insomnia</p>
                            </li>
                        </ul>
                    </Fade>
                </div>
                <Footer />
            </section >
        </div>
    );
}