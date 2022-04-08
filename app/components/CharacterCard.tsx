import { FilmCharacter } from "~/api/films";

interface CharacterCardProps {
  character: FilmCharacter;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <>
      <div className="mb-3">
        <div className="text-3xl mb-2"> {character.name}</div>
        <div className="p-4 rounded shadow-lg border">
          <div className="text-gray-700 font-bold text-xl mb-2">
            Character Details
          </div>
          <ul className="py-2">
            <li>Age: {character.age}</li>
            <li>Gender: {character.gender}</li>
            <li>Eye Color:{character.eye_color}</li>
            <li>Hair Color:{character.hair_color}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CharacterCard;
