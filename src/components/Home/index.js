import React from "react";

import Fade from 'react-reveal';
import Navigator from "../Navigator";
import Footer from "../Footer";
import { FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
import Perfil from '../../assets/perfil.jpg';
import ProjectPage from "../Projects";

export default function Home() {
    return (
        <div className="opacity-100 headline">
            <Navigator />
            <Fade bottom>
                <section className="flex my-56 flex-col scroll-smooth56 justify-center items-center">
                    <img src={Perfil} className="rounded-full border-2 border-white w-56 h-56 mb-8" alt="perfil" />
                    <div className="text-white text-center title text-8xl">
                        <code>Cristhian Moura</code>
                        <br />
                        <code>&lt;Desenvolvedor Web/&gt;</code>
                    </div>
                </section>
            </Fade>
            <section className="flex headline shadow-2xl h-auto justify-center items-center flex-col rounded-t-[150px] bg-white">
                <Fade bottom>

                    {/*um pouco sobre*/}
                    <div id="About" className="flex title text-center my-20 mb-10 text-4xl">
                        <h2>Sobre</h2>
                    </div>
                    <div className="mr-20 ml-20">
                        <p className="title text-slate text-center mb-8 text-xl w-fit">
                            Analista e desenvolvedor de sistemas júnior, cursei uma iniciação a análise, exploração e pós exploração
                            de vulnerabilidades em ambientes web utilizando ferramentas do Kali Linux e atualmente sou o Analista de sistemas Jr.
                            sou responsável pelo suporte à eventos adversos e erros relacionados aos sistemas presentes no hospital ,
                            atuo no controle de acesso dos usuários, desenvolvimento de relatórios personalizados utilizando SQL e a
                            ferramenta PL/SQL Developer além de realizar atualizações e monitorar o ambiente dos servidores do sistema MV.
                        </p>
                        <p className="title text-slate text-center mb-8 text-xl w-fit">
                            tenho experiência na criação e controle de acesso do domínio das máquinas da instituição utilizando o
                            software Active Directory e no firewall PFsense a liberação de acesso e monitoramento da rede do hospital,
                            ajudo no gerenciamento e direcionamento da equipe de suporte para manutenções locais nos setores do hospital
                        </p>
                    </div>

                    {/*Projetos e desings feitos */}
                    <Fade bottom>
                        <div id="projects" className="title flex flex-col text-center my-24 text-4xl">
                            <h2>Projetos e Designs</h2>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <ProjectPage />
                    </Fade>

                    {/* Principais tecnologias de desenvolvimento */}
                    <div id="Tecs" className="my-36 mb-20">
                        <h2 className="title text-center text-4xl">Principais Tecnologias de Desenvolvimento</h2>
                        <div className="flex justify-between my-20 ">

                            <div className="flex flex-col items-center mr-28 text-center w-64">
                                <FaNodeJs className="cursor-none mb-8 w-16 h-16" ></FaNodeJs>
                                <h4 className="text-slate text-lg font-bold">
                                    Desenvolvimento de projetos
                                    utilizando o melhor das ferramentas
                                    que a linguagem javascript disponibiliza.</h4>
                            </div>
                            <div className="flex flex-col items-center mr-28 text-center w-64">
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
                <Footer />
            </section>
        </div>
    );
}