export type Comment = {
  name: string;
  message: string;
  filmId: string;
};

export const getComments = async (filmId: string) => {
  const response = await fetch(
    `http://localhost:3001/comments?filmId=${filmId}`
  );

  return response.json();
};

export const addComment = async (comment: Comment) => {
  const response = await fetch("http://localhost:3001/comments", {
    method: "POST",
    body: JSON.stringify(comment),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
};
