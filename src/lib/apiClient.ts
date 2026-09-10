import { ofetch } from "ofetch";

const Base_URL = process.env.NEXT_PUBLIC_API_URL;

const apiClient = ofetch.create({
    baseURL: Base_URL,
});

export default apiClient;