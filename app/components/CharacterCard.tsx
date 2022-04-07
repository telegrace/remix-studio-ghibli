import { FilmCharacter } from "~/api/films";

interface CharacterCardProps {
  character: FilmCharacter;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <>
      <h3 className="text-3xl font-bold">{character.name}</h3>
      <ul>
        <li>Age: {character.age}</li>
        <li>Gender: {character.gender}</li>
        <li>Eye Color:{character.eye_color}</li>
        <li>Hair Color:{character.hair_color}</li>
      </ul>
    </>
  );
};

export default CharacterCard;
