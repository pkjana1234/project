import axios from "axios";

const AuthInstance = axios.create({
    baseURL: process.env.REACT_APP_AUTH_URL
})
export default AuthInstance