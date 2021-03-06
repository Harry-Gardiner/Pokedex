// import the library version of axios
import axios from "axios";

// create a version of axios with useful defaults
export default axios.create({
    baseURL: "https://pokeapi.co/api/v2/pokemon/",
    headers: {
        // make sure we get JSON back
        Accept: "application/json",
    },
});