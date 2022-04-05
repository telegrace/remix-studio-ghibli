import { LinksFunction, LoaderFunction, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Film, getFilms } from "~/api/films";
// import styles from "./tailwind.css";

export const meta: MetaFunction = () => ({
  title: "Films | Studio Ghilbi",
  description: "List of Studio Ghilbi films",
});

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: "styles" }];
};

//SERVER SIDE, you can use secrets here!
export const loader: LoaderFunction = async () => {
  return getFilms();
};

//CLIENT SIDE
const FilmsIndex = () => {
  const films = useLoaderData<Array<Film>>();
  console.log(films);
  return (
    <>
      <h1>Films</h1>
      <ul>
        {films.map((film) => (
          <li>{film.title}</li>
        ))}
      </ul>
    </>
  );
};

export default FilmsIndex;
