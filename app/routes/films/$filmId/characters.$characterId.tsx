import { LoaderFunction } from "@remix-run/node";
import { useCatch, useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { FilmCharacter, getCharacterById } from "~/api/films";
import CharacterCard from "~/components/CharacterCard";

interface CharacterPageProps {
  character: FilmCharacter;
}

export const loader: LoaderFunction = async ({ params }) => {
  //you can add if, or use invariant
  invariant(params.characterId, "expected params.characterId");
  const character = await getCharacterById(params.characterId);
  console.log("fetching character... -->");
  // throw json("Different message", { status: 404 });
  return character;
};

const CharacterPage: React.FC<CharacterPageProps> = () => {
  const character = useLoaderData<FilmCharacter>();
  return (
    <>
      <CharacterCard character={character} />
    </>
  );
};

export default CharacterPage;

export const CatchBoundary = () => {
  // when we know the error and caught via a hook instead of a prop
  const caught = useCatch();

  if (caught.status === 404) {
    return (
      <div className="mb-3">
        <div className="text-3xl mb-2">Details</div>
        <div className="p-4 rounded shadow-lg border bg-orange-200 border-orange-600">
          <div className="text-gray-700 font-bold text-xl mb-2">
            {caught.statusText}
          </div>
          <p>
            {caught.status} {caught.statusText}
          </p>
        </div>
      </div>
    );
  }

  throw new Error("Unknown error");
};

export const ErrorBoundary = ({ error }: any) => {
  //when we don't know the error
  return (
    <div className="mb-3">
      <div className="text-3xl mb-2">Details</div>
      <div className="p-4 rounded shadow-lg border bg-rose-200 border-rose-600">
        <div className="text-gray-700 font-bold text-xl mb-2">
          Uh oh... Sorry something went wrong!
        </div>
        <p>{error?.message}</p>
      </div>
    </div>
  );
};
// http://localhost:3000/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49/characters/986faac6-67e3-4fb8-a9ee-bad077c2e7fe
