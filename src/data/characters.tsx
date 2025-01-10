
import axios from "axios";

export const fetchCharacters = async () => {
    const response = await axios.get("https://rickandmortyapi.com/api/character/");
    return response.data.results; // Array of characters
};