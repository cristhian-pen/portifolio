import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Efeitos e animações
import NtFound from "../../Animations/Not-found";

//Componentes
import api from "../../../Services/Api/api";
import Navigator from "../../Navigator";
import Component from './sComponent';

export default function Showroom() {

    const [data, setData] = useState([]);
    const [url, setUrl] = useState();

    //Pega os parametros da rota
    const params = useParams();

    function getInformacao() {

        api.get(`/api/projetos/${params.nomeProjeto}`)
            .then(res => {
                setData(res.data.informacoes);
                setUrl(res.data.url);
                console.log(res.data.informacoes);
            })
    }

    useEffect(() => {
        getInformacao();
    }, [500])

    return (
        <div className="opacity-100 headline h-screen">
            <Navigator />

            {
                //Condicional que entrega uma animação caso não tenha conteudo na API
                data === undefined ?

                    <NtFound
                        height={234}
                        width={234}
                    />
                    :
                    <Component
                        tituloProjeto={data[0]?.TITULO_PROJETO}
                        imagem={url + data[0]?.IMG_PROJETO}
                        descricao={data[0]?.DS_PROJETO}
                        repoProjeto={data[0]?.REP_PROJETO}
                    />
            }

        </div >

    );
}