import React from "react";

//Efeitos e animações
import ItsWork from "../../Animations/Worker/index";

//Componentes
import Footer from '../../Footer/index';
import Navigator from "../../Navigator";

export default function Worked() {
    return (
        <div className="h-screen">
            <Navigator />
            <section className="flex my-24 flex-col headline w-screen shadow-2xl bg-white rounded-lg justify-center items-center xl:h-auto xl:my-40 xl:rounded-t-[150px]">
                <h1 className="title text-lg xl:text-4xl text-center my-16 mb-16 ">It Works!</h1>
                <div className=" flex justify-center items-center rounded-3xl ml-1.5 mr-1.5 mb-10 xl:mb-20 xl:mr-24 xl:ml-24">
                    <a href="/home">
                        <ItsWork
                            height={500}
                            width={500}
                        />
                    </a>
                </div>
                <Footer />
            </section >
        </div>
    );
}