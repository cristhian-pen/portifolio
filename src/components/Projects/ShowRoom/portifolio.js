import React from "react";
import Fade from 'react-reveal';

import {
    SiReact,
    SiTailwindcss
} from 'react-icons/si'

import Footer from "../../Footer";
import Navigator from "../../Navigator";

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import image2 from '../../../assets/projects/portifolio/hom.png';
import image3 from '../../../assets/projects/portifolio/about.png';
import image4 from '../../../assets/projects/portifolio/projects.png';


function Portifolio() {
    return (
        <div className="opacity-100 headline h-screen">
            <Navigator />
            <section className="flex animate_animated  flex-col shadow-2xl h-auto my-40 justify-center items-center flex-col rounded-t-[150px] bg-white">
                <Fade bottom>
                    <p className="text-center text-4xl title my-20 underline">Projeto Portifolio</p>
                </Fade>
                <Fade bottom>
                    <div className="flex flex-col justify-center items-center mb-20 mr-24 ml-24 border-2 rounded-3xl shadow-2xl">
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
                                <img src={image2} className="rounded-3xl" alt="image2" />
                            </div>
                            <div>
                                <img src={image4} className="rounded-3xl" alt="image4" />
                            </div>
                            <div>
                                <img src={image3} className="rounded-3xl" alt="image3" />
                            </div>
                        </Carousel>
                    </div>
                </Fade>
                <div className="flex flex-col text-center">
                    <Fade bottom>
                        <p className="text-4xl title mb-20">Descri????o do Projeto</p>
                    </Fade>
                    <Fade bottom>
                        <article className="title text-slate text-center mb-8 text-xl ml-24 mr-24">
                            <p>
                                Considerei adicionar o projeto do meu portifolio porque o design foi criado do zero tomando como base o
                                projeto anterior Gamefinders, eu queria criar algo intuitivo e de simples visualiza????o para que qualquer
                                recrutador ou cliente veja minhas habilidades e assim contrate meus servi??os,
                                um dos principais focos deste trabalho e disponibilizar o codigo para os novos desenvolvedores que necessitam de
                                criar um portif??lio mas n??o tem inspira????o ou algo para trabalhar e modificar, espero que meu projeto torne-se um
                                modelo de codigo aberto e que ajude os novos dev's a entrar no mercado de trabalho.
                            </p>
                            <p className="my-5 mb-5">
                                Neste projeto utilizei somente ReactJs para criar todas as p??ginas e componentes, para a estiliza????o eu utilizei
                                Tailwindcss que e um framework poderoso para cria????o das melhores landing pages do mercado.
                            </p>
                            <p>
                                Ainda estou desenvolvendo algumas coisas deste projeto como uma p??gina de Admin que fara a inser????o dos projetos e dados
                                no site, al??m de uma API que fara o controle do conteudo que vem para o site conectado a um banco de dados.
                            </p>
                            <center className="my-20 underline hover:text-slate-900 cursor-pointer"><a href="https://github.com/cristhian-pen/projeto-gamer-finders" target={"_blank"}>Voce pode acessar o codigo fonte clicando aqui</a></center>
                        </article>
                        <h2 className="title text-4xl text-center my-20">Tecnologias do Projeto</h2>

                        <ul className="flex flex-row justify-center items-center mb-44 flex-wrap">
                            <li className="flex flex-col justify-center mr-14 items-center">
                                <SiReact className="cursor-none mb-2 w-14 h-14 rounded-lg" />
                                <p className="text-slate text-center text-lg">ReactJs</p>
                            </li>
                            <li className="flex flex-col justify-center mr-14 items-center">
                                <SiTailwindcss className="cursor-none mb-2 w-14 h-14 rounded-lg" />
                                <p className="text-slate text-center text-lg">Tailwindcss</p>
                            </li>
                        </ul>
                    </Fade>
                </div>
                <Footer />
            </section >
        </div >
    );
}


export default Portifolio;