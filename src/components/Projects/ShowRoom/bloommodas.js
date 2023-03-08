import React from "react";
import Fade from 'react-reveal';

import {
    SiSequelize,
    SiMysql,
    SiJavascript,
    SiHandlebarsdotjs,
    SiExpress,
    SiInsomnia,
    SiBootstrap
} from 'react-icons/si'

import Footer from "../../Footer";
import Navigator from "../../Navigator";

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import image1 from '../../../assets/projects/projct_bloommodas.png';
import image2 from '../../../assets/projects/bloommodas/footer.png';
import image3 from '../../../assets/projects/bloommodas/vendas.png';
import image4 from '../../../assets/projects/bloommodas/carrinho.png';
import image5 from '../../../assets/projects/bloommodas/login.png';
import image6 from '../../../assets/projects/bloommodas/cadastro.png';


function Bloomodas() {
    return (
        <div className="opacity-100 headline h-screen">
            <Navigator />
            <section className="flex animate_animated  flex-col shadow-2xl h-auto my-40 justify-center items-center flex-col rounded-t-[150px] bg-white">
                <Fade bottom>
                    <p className="text-center text-4xl title my-20 underline">Projeto E-commerce Bloomodas</p>
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
                                <img src={image1} className="rounded-3xl" alt="image1" />
                            </div>
                            <div>
                                <img src={image2} className="rounded-3xl" alt="image2" />
                            </div>
                            <div>
                                <img src={image3} className="rounded-3xl" alt="image3" />
                            </div>
                            <div>
                                <img src={image4} className="rounded-3xl" alt="image4" />
                            </div>
                            <div>
                                <img src={image5} className="rounded-3xl" alt="image5" />
                            </div>
                            <div>
                                <img src={image6} className="rounded-3xl" alt="image6" />
                            </div>
                        </Carousel>
                    </div>
                </Fade>
                <div className="flex flex-col text-center">
                    <Fade bottom>
                        <p className="text-4xl title mb-20">Descrição do Projeto</p>
                    </Fade>
                    <Fade bottom>
                        <article className="title text-slate text-center mb-8 text-xl ml-24 mr-24">
                            <p>
                                O projeto de ecommerce bloomodas foi inicialmente desenvolvido para estudos e sem fins lucrativos,
                                a proposta desta loja era um tanto diferente na época, o objetivo era o cliente finalizar a compra em contato direto com o vendedor
                                por meio do redirecionamento de link do Whatsapp, neste caso, toda a finalização das compras seria feito diretamente
                                com vendedor, nossa loja enviaria somente os pedidos em um formato de lista para finalização.
                            </p>
                            <p className="my-5 mb-5">
                                As tecnologias utilizadas neste projeto foram as mais simples possivel,<strong>Handlebars</strong> para o controle
                                dos layouts de página e tambem o framework de css <strong>Bootstrap</strong> para estilização dos elementos,
                                na api deste projeto eu fiz o servidor em <strong>Javascript</strong> puro configurando as rotas com <strong>Express</strong>
                                e para os teste o software <strong>Insomnia</strong> foi essencial,
                                nos dados utilizei um banco de dados <strong>MySql</strong> conectado com o ORM <strong>Sequelize</strong>
                                que foi importantissímo para finalizar a arquitetura <strong>MVC</strong> do projeto.
                            </p>
                            <p>
                                Infelizmente ete projeto não foi para a produção final por conta de se tornar muito custoso e o tempo alocado não era suficiente para prodzir,
                                mas esta na lista para refatorar com uma arquitetura mais atual, caso voce tenha interesse disponibilizarei o codigo fonte no github.
                            </p>
                            <center className="my-20 underline hover:text-slate-900 cursor-pointer"><a href="https://github.com/cristhian-pen/Projeto-Bloom-modas" target={"_blank"}>Voce pode acessar o codigo fonte clicando aqui</a></center>
                        </article>
                        <h2 className="title text-4xl text-center my-20">Tecnologias do Projeto</h2>

                        <ul className="flex flex-row justify-center items-center mb-44 flex-wrap">
                            <li className="flex flex-col justify-center mr-14 items-center">
                                <SiJavascript className="cursor-none mb-2 w-14 h-14 rounded-lg" />
                                <p className="text-slate text-center text-lg">Javascript</p>
                            </li>
                            <li className="flex flex-col justify-center mr-14 items-center">
                                <SiHandlebarsdotjs className="cursor-none mb-2 w-14 h-14 rounded-lg" />
                                <p className="text-slate text-center text-lg">Handlebars</p>
                            </li>
                            <li className="flex flex-col justify-center mr-14 items-center">
                                <SiSequelize className="cursor-none mb-2 w-14 h-14 rounded-lg" />
                                <p className="text-slate text-center text-lg">Sequelize</p>
                            </li>
                            <li className="flex flex-col justify-center mr-14 items-center">
                                <SiExpress className="cursor-none mb-2 w-14 h-14 rounded-lg" />
                                <p className="text-slate text-center text-lg">ExpressJs</p>
                            </li>
                            <li className="flex flex-col justify-center mr-14 items-center">
                                <SiBootstrap className="cursor-none mb-2 w-14 h-14 rounded-lg" />
                                <p className="text-slate text-center text-lg">Bootstrap</p>
                            </li>
                            <li className="flex flex-col justify-center mr-14 items-center">
                                <SiMysql className="cursor-none mb-2 w-14 h-14 rounded-lg" />
                                <p className="text-slate text-center text-lg">Mysql</p>
                            </li>
                            <li className="flex flex-col justify-center mr-14 items-center">
                                <SiInsomnia className="cursor-none mb-2 w-14 h-14 rounded-lg" />
                                <p className="text-slate text-lg">Insomnia</p>
                            </li>
                        </ul>
                    </Fade>
                </div>
                <Footer />
            </section >
        </div >
    );
}


export default Bloomodas;