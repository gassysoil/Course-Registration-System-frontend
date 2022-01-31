import axios from "axios";
import cookies from "react-cookies";

const token = cookies.load("jwt_token");
export default axios.create({
    baseURL: 'http://localhost:8080/',
    headers:{
        "Authorization": `Bearer ${token}`
    }
})