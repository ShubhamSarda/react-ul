# React course lecture code

Each numbered folder is a snapshot of the code for that lecture. Start in the folder that matches the lecture you are following, such as [005](005/) or [006](006/).

## Run a lecture

Use Node.js **26.13.1**. For a React lecture with a `package.json`, open a terminal in that folder and install its locked dependencies.

```sh
npm ci
npm start
```

Open [localhost:3000](http://localhost:3000). Each lecture README gives its own commands and any API or Firebase setup. [Lecture 144](144/) runs a standalone mock API. The [webpack examples starting at lecture 252](252/) use `npm run build`. For plain HTML examples such as [206](206/), open the included `index.html`.

Two snapshots capture work in progress. [Lecture 124](124/) has a reducer export typo that is corrected in [lecture 125](125/). [Lecture 149](149/) starts with empty test files for you to fill in during the lecture.

## Package versions

The React examples use React and React DOM **19.3.1** and keep their existing Create React App scripts. The Redux lessons use Redux Toolkit **2.14.0** and React Redux **9.3.1**. Firebase examples use the Firebase JavaScript SDK **13.4.0**. Tailwind remains on **v3**, and the CodeBook examples keep their existing JSON Server and JSON Server Auth versions.

Commit the lockfile alongside the manifest if you make changes to a lesson's dependencies. Use `npm ci` when setting up another lecture so npm installs the versions selected for that snapshot.
