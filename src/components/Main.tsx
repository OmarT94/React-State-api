import './charactercss.css'
import React, { useEffect, useState } from "react";
import {fetchCharacters} from "../data/characters.tsx";
import CharacterCard from "./CharacterCard.tsx";


// Definiere den Typ für die Charaktere
export type Character = {
    id: number;
    name: string;
    image: string;
    species: string;
};

const App: React.FC = () => {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [searchTerm, setSearchTerm] = useState("");

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

    return (
        <div>
            <h1>Rick and Morty Characters!</h1>
            <input
                type="text"
                placeholder="Search characters..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <div>

                {filteredCharacters.length===0?
                    <p>No characters found!</p>
                    :
                    filteredCharacters.map((character: Character) => (
                    <CharacterCard key={character.id} character={character} />
                ))}
            </div>
        </div>
    );
};

export default App;
