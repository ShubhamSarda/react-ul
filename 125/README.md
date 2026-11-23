# Lecture 125 · CodeBook

Use Node.js **26.13.1** for this lecture.

This snapshot uses React and React DOM **19.3.1**.

From this lecture folder, install the locked dependencies.

```sh
npm ci
```

Start the local API in a separate terminal when following the data or authentication steps.

```sh
npm exec -- json-server-auth data/db.json --port 8000
```

Start the app and open [localhost:3000](http://localhost:3000).

```sh
npm start
```

Run `npm run build` to produce a build in `build/`.
