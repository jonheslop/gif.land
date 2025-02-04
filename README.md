# gif.land

I love [bukk.it](https://bukk.it) ([thanks Ethan!](https://ethanmarcotte.com/)) but I always forget the filenames of my faves, so I’ve made this to store my favourites with extra tags.

I can add new faves from the command line using [Turso’s CLI](https://docs.turso.tech/cli/db/shell):

```sh
  ❯ turso db shell gifland "INSERT INTO favourites (created_at, url, author, tags) VALUES (datetime('now'), 'theandies.gif', 'Jon Heslop', 'hot fuzz');"
```

I plan to make it so I can add my own GIFs too and store them on cloudflare (like images on my blog)


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
