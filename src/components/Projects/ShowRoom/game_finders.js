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
            <section className="flex my-24 flex-col headline w-screen shadow-2xl bg-white rounded-lg justify-center items-center xl:h-auto xl:my-40 xl:rounded-t-[150px]">
                <Fade bottom>
                    <p className="text-center text-3xl title my-20 underline xl:text-4xl">Projeto Gamefinders</p>
                </Fade>
                <Fade bottom>
                    <div className="flex flex-col justify-center items-center border-2 rounded-3xl shadow-2xl ml-1.5 mr-1.5 mb-10 xl:mb-20 xl:mr-24 xl:ml-24">
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
                        <p className="text-3xl title mb-20 xl:text-4xl">Descrição do Projeto</p>
                    </Fade>
                    <Fade bottom>
                        <article className="mr-5 ml-5 title text-slate text-center mb-8 text-xl xl:ml-24 xl:mr-24">
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
                        <h2 className="title text-3xl text-center my-10 xl:my-20 xl:text-4xl">Tecnologias do Projeto</h2>

                        <ul className="flex flex-col justify-center items-center mb-24 xl:mb-44 xl:flex-wrap xl:flex-row">

                            <li className="flex flex-col my-8 mb-8 justify-center items-center xl:mr-14">
                                <SiReact className="cursor-none mb-2 w-14 h-14 rounded-lg" />
                                <p className="text-slate text-center text-lg">ReactJs</p>
                            </li>
                            <li className="flex flex-col mb-8 justify-center items-center xl:mr-14">
                                <SiAxios className="cursor-none mb-2 w-14 h-14 rounded-lg" />
                                <p className="text-slate text-center text-lg">Axios</p>
                            </li>
                            <li className="flex flex-col mb-8 justify-center items-center xl:mr-14">
                                <FaNodeJs className="cursor-none mb-2 w-14 h-14 rounded-lg" />
                                <p className="text-slate text-center text-lg">NodeJs</p>
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
                                <SiTailwindcss className="cursor-none mb-2 w-14 h-14 rounded-lg" />
                                <p className="text-slate text-center text-lg">Tailwindcss</p>
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
        </div >
    );
}


export default GameFinder;