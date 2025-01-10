import './charactercss.css'
import React, { useEffect, useState } from "react";
import {fetchCharacters} from "../data/characters.tsx";
import CharacterCard from "./CharacterCard.tsx";


// Definiere den Typ für die Charaktere
type Character = {
    id: number;
    name: string;
    image: string;
    species: string;
};

const App: React.FC = () => {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [error, setError] = useState(false);

    useEffect(() => {
        const getCharacters = async () => {
            const data = await fetchCharacters();
            setCharacters(data);
        };
        getCharacters();
    }, []);

    const filteredCharacters = characters.filter((character) =>
        character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    useEffect(() => {
        if (filteredCharacters.length === 0 && searchTerm !== "") {
            setError(true);
        } else {
            setError(false);
        }
    }, [filteredCharacters, searchTerm]);

    return (
        <div>
            <h1>Rick and Morty Characters!</h1>
            <input
                type="text"
                placeholder="Search characters..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            {error && <p>No characters found!</p>}
            <div>
                {filteredCharacters.map((character: Character) => (
                    <CharacterCard key={character.id} character={character} />
                ))}
            </div>
        </div>
    );
};

export default App;
