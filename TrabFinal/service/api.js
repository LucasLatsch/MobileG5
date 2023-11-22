import axios from "axios";

const api = axios.create({
  baseURL: "https://65495a57dd8ebcd4ab2483d2.mockapi.io/login",
});

export default api;
