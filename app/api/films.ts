import { Comment, getComments } from "./comments";

export type Film = {
  id: string;
  title: string;
  original_title: string;
  description: string;
  image: string;
  movie_banner: string;
  people: string[];
  characters?: Array<FilmCharacter>;
  comments?: Array<Comment>;
};

export type FilmCharacter = {
  id: string;
  name: string;
  gender?: string;
  age?: string;
  eye_color?: string;
  hair_color?: string;
  url: string;
};

export const getFilms = async (title?: string | null) => {
  const response = await fetch("https://ghibliapi.herokuapp.com/films");
  const films: Array<Film> = await response.json();

  return films.filter((film) =>
    title ? film.title.toLowerCase().includes(title.toLowerCase()) : true
  );
};

export const getFilmById = async (filmId: string) => {
  const response = await fetch(
    `https://ghibliapi.herokuapp.com/films/${filmId}`
  );
  const film: Film = await response.json();
  const comments = await getComments(filmId);

  const characters = await Promise.all(
    film.people
      .filter((url) => url !== "https://ghibliapi.herokuapp.com/people/")
      .map((url) => fetch(url).then((res) => res.json()))
  );

  return { ...film, characters, comments };
};

export const getCharacterById = async (characterId?: string) => {
  const response = await fetch(
    `https://ghibliapi.herokuapp.com/people/${characterId}`
  );

  if (!response.ok) {
    throw response;
  }

  const character: FilmCharacter = await response.json();

  return character;
};
