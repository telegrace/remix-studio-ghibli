# Welcome to remix-studio-ghibli!

- [Remix Docs](https://remix.run/docs)
- [Tutorial used](https://www.youtube.com/watch?v=HOlYQu_r4Io&t=4474s)



## Development

From your terminal:

```sh
npm i
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

## Notes

### Folders let you use Layout Routes 

When a nested route has the same name as its directory for example parent folder, parent.tsx is the layout and needs the Outlet component (the nested routing)

### Dot Delimiters

parent.other.tsx, export Other, this won't have the wrapper of parent since it is a flat route file

- Nested files, nested urls + nested laytouts

- Flatfiles give nested URLS with no layouts

### Dynamic Paths

use $ for a dynamic path, useParams to get the params from the URL



### Entry Files

entry.client.tsx hydrates our app

entry.server.tsx server rendering 

### EXTRACTING FROM A FORM

- use ActionFunction
- information ist aken from the body of the request

- build a comment object using the get method, `body.get('name')`

- redirects are common in actions

### UseTransistion

Used when mutating forms, good for disabling buttons when submitting

