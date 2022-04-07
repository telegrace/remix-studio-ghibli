import { NavLink } from "@remix-run/react";
import { FilmCharacter } from "~/api/films";

interface CharacterListProps {
  characters: FilmCharacter[];
}

const CharacterList: React.FC<CharacterListProps> = ({ characters }) => {
  console.log(characters);
  return (
    <>
      <h3 className="text-3xl font-bold">Characters</h3>
      <div>
        <ul>
          {characters.map((character) => (
            <NavLink to={`character/character.id`}>
              <li key={character.id}>{character.name}</li>
            </NavLink>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CharacterList;
// getting issues with the key prop not being unique?
