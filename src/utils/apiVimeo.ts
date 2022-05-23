import axios from "axios";

const URL = "https://api.vimeo.com";
const access_token = process.env.VIMEO_access_token;

function createConfig() {
    return { headers: { Authorization: `Bearer ${access_token}` } };
}

function getTutorial() {
    return axios.get(`${URL}/tutorial`, createConfig());
}

export { getTutorial };