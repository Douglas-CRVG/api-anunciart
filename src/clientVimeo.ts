import dotenv from "dotenv";
import pkg from "vimeo"
dotenv.config()

let client = new pkg.Vimeo(process.env.VIMEO_client_id, process.env.VIMEO_client_secret, process.env.VIMEO_access_token);

export default client;

