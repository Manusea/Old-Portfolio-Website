import axios from "axios";

export default axios.create({
  baseURL: "https://chanantaphon-portfolio-backend.herokuapp.com//api",
  headers: {
    "Content-type": "application/json",
  },
});
