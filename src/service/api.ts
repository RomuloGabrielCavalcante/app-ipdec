import axios from "axios";

const baseUrl = process.env.BACKEND_URL;

export const api = axios.create({
	baseURL: baseUrl,
});
