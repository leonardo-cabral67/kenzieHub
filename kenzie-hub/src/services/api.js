import axios from "axios";

const kenzieHubApi = axios.create({
  baseURL: "https://kenziehub.herokuapp.com",
});

export default kenzieHubApi;

// KenzieHubApi.post("/users/tech", data, {headers: {Authorization: `Bearer ${}`}});
