import axios from "axios";

const API = axios.create({
  baseURL: "https://toqi3-task-tracker.onrender.com",
});

export default API;
