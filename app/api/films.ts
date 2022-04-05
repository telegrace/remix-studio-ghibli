export type Film = {
  id: string;
  title: string;
  original_title: string;
  image: string;
  movie_banner: string;
  people: string[];
};

export const getFilms = async () => {
  const response = await fetch("https://ghibliapi.herokuapp.com/films");
  const films: Array<Film> = await response.json();
  //how to error handle?
  return films;
};
