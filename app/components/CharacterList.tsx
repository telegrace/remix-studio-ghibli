import { NavLink } from "@remix-run/react";
import { FilmCharacter } from "~/api/films";

interface CharacterListProps {
  characters: FilmCharacter[];
}

const CharacterList: React.FC<CharacterListProps> = ({ characters }) => {
  return (
    <>
      <div className="flex-1 max-w-md mx-5">
        <h3 className="text-3xl">Characters</h3>

        <ul className="flex flex-col space-y-3 my-3">
          {characters?.map((character) => (
            <li key={character.id}>
              <NavLink
                to={"characters/" + character.id}
                prefetch="intent" //automatic preloading
                className={({ isActive }) =>
                  `w-full hover:underline p-3 rounded border border-slate-400 inline-block ${
                    isActive
                      ? "bg-slate-300 text-black font-bold border-2"
                      : "text-blue-500 "
                  } `
                }
              >
                {character.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CharacterList;
// getting issues with the key prop not being unique?
