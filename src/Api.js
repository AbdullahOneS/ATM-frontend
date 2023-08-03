import axios from "axios";

const FUNCTION_URL = "http://localhost:5000/"

export default axios.create({
    baseURL: FUNCTION_URL
});