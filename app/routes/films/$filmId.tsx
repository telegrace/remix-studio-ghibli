import {
  ActionFunction,
  LoaderFunction,
  MetaFunction,
  redirect,
} from "@remix-run/node";
import { Film, getFilmById } from "~/api/films";
import invariant from "tiny-invariant";
import { Outlet, useLoaderData } from "@remix-run/react";
import FilmBanner from "~/components/FilmBanner";
import CharacterList from "~/components/CharacterList";
import Comments from "~/components/Comments";
import { addComment } from "~/api/comments";

export const meta: MetaFunction = ({ data }) => {
  return {
    title: data.title,
    description: data.description,
    "od:image": data.image,
  };
}; //from LoaderFunction

export const loader: LoaderFunction = async ({ params }) => {
  //you can add if, or use invariant
  invariant(params.filmId, "expected params.filmId");
  const film = await getFilmById(params.filmId);
  console.log("fetching film... -->", film.title);

  return film;
};

export const action: ActionFunction = async ({ request, params }) => {
  invariant(params.filmId, "expected params.filmId");
  const body = await request.formData();

  const comment = {
    name: body.get("name") as string,
    message: body.get("message") as string,
    filmId: params.filmId,
  };

  const errors = { name: "", message: "" };

  if (!comment.name) {
    errors.name = "Please provide your name";
  }

  if (!comment.message) {
    errors.message = "Please provide a comment";
  }

  if (errors.name || errors.message) {
    const values = Object.fromEntries(body);
    return { errors, values };
  }

  await addComment(comment);

  return redirect(`/films/${params.filmId}`); //anyway of refreshing the component?
};

const Film = () => {
  const film = useLoaderData<Film>();
  return (
    <>
      <FilmBanner film={film} />
      <div className="p-10">
        <p>{film.description}</p>
        <div className="flex py-5 space-x-5">
          {film.characters && <CharacterList characters={film.characters} />}
          <div className="flex-1 flex flex-col justify-between">
            <Outlet />
            <Comments filmId={film.id} comments={film.comments || []} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Film;
//Outlet added because it's a layout route now
