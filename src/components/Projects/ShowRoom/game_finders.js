import React from "react";
import Fade from 'react-reveal';

import {
    SiReact,
    SiMysql,
    SiExpress,
    SiSequelize,
    SiAxios,
    SiInsomnia,
    SiTailwindcss
} from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa';

import Footer from "../../Footer";
import Navigator from "../../Navigator";

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import image1 from '../../../assets/projects/gamefinders/home.png';
import image3 from '../../../assets/projects/gamefinders/home2.png';
import image4 from '../../../assets/projects/gamefinders/footer.png';
import image5 from '../../../assets/projects/gamefinders/profile.png';
import image6 from '../../../assets/projects/gamefinders/register.png';


function GameFinder() {
    return (
        <div className="opacity-100 headline h-screen">
            <Navigator />
            <section className="flex animate_animated  flex-col shadow-2xl h-auto my-40 justify-center items-center flex-col rounded-t-[150px] bg-white">
                <Fade bottom>
                    <p className="text-center text-4xl title my-20 underline">Projeto Gamefinders</p>
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
                                O projeto gamefinders nasceu com a finalidade de se tornar uma espécie de buscador online de jogadores
                                respeitando as caracteristicas e niveis de cada pessoa para que voce ache o seu match perfeito das partidas online.
                            </p>
                            <p className="my-5 mb-5">
                                Para desenvolver este projeto utilizei o framework front-end de javascript ReactJS, utilizando a componentização
                                e os famosos Hooks que a linguagem permite, na API como e de costume foi desenvolvido em NodeJS modelado na arquitetura MVC
                                usando o ORM Sequelize para conectar ao banco Mysql e o cors para receber as informações que vem do front, o diferencial
                                deste projeto e que nele eu tive a experiencia de trabalhar com o metodo de autenticação JWT - JSON Web Token e para captar as
                                informações que vem da api utilizei o Axios para realizar o fetch dos dados.
                            </p>
                            <p>
                                O projeto encontra-se em andamento, tenho bastante trabalho para finaliza-lo, uma das coisas mais desafiadoras será
                                implementar a logica para fazer os jogadores se conectar de acordo com informações em comum, outro desafio será deixar
                                este site responsivo para que possa funcionar em qualquer tipo de plataforma.
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
                                <SiAxios className="cursor-none mb-2 w-14 h-14 rounded-lg" />
                                <p className="text-slate text-center text-lg">Axios</p>
                            </li>
                            <li className="flex flex-col justify-center mr-14 items-center">
                                <FaNodeJs className="cursor-none mb-2 w-14 h-14 rounded-lg" />
                                <p className="text-slate text-center text-lg">NodeJs</p>
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
                                <SiTailwindcss className="cursor-none mb-2 w-14 h-14 rounded-lg" />
                                <p className="text-slate text-center text-lg">Tailwindcss</p>
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


export default GameFinder;