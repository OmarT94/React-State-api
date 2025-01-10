import React from "react";

type Character = {
    id: number;
    name: string;
    image: string;
    species: string;
};
const CharacterCard: React.FC<{ character: Character }> = ({ character }) => {
    return (
        <div className="character-card">
            <img src={character.image} alt={character.name}/>
            <h3>{character.name}</h3>
            <p>{character.species}</p>
        </div>

    );
};

export default CharacterCard;