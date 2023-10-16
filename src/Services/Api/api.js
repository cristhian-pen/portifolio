import axios from "axios";

export default axios.create({
    baseURL: 'http://192.168.0.13:3002',
    timeout: 2500
})

//Definição do caminho da api