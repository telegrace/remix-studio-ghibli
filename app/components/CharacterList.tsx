import { FilmCharacter } from "~/api/films";

interface CharacterListProps {
  characters: FilmCharacter[];
}

const CharacterList: React.FC<CharacterListProps> = ({ characters }) => {
  return (
    <>
      <h3>
        <strong>W</strong>
      </h3>
    </>
  );
};

export default CharacterList;
