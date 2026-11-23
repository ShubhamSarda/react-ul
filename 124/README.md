# Lecture 124 · CodeBook

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

This snapshot has a reducer export typo in `src/reducers/index.js`. The build reports that `cartReduccer` is missing. [Lecture 125](../125/) has the corrected export.
