import { LoaderFunction } from "@remix-run/node";
import { Film, getFilmById } from "~/api/films";
import invariant from "tiny-invariant";
import { useLoaderData } from "@remix-run/react";
import FilmBanner from "~/components/FilmBanner";
import CharacterList from "~/components/CharacterList";

export const loader: LoaderFunction = async ({ params }) => {
  //you can add if, or use invariant
  invariant(params.filmId, "expected params.filmId");

  const film = await getFilmById(params.filmId);

  console.log("fetching film... -->", film.title);

  return film;
};

const Film = () => {
  const film = useLoaderData<Film>();
  return (
    <>
      <FilmBanner film={film} />
      <div className="p-10">{film.description}</div>
      <div className="flex py-5">
        <CharacterList characters={film.characters} />
      </div>
    </>
  );
};

export default Film;
