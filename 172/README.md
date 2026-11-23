# Lecture 172 · WriteNode

Use Node.js **26.13.1** for this lecture.

This snapshot uses React and React DOM **19.3.1**.

From this lecture folder, install the locked dependencies.

```sh
npm ci
```

This lecture uses Firebase **13.4.0**.

Put your Firebase web app configuration in `.env.local`. Enable Google sign-in, authorize `localhost`, and configure Firestore as shown in the lesson.

```dotenv
REACT_APP_API_KEY=your_api_key
REACT_APP_AUTH_DOMAIN=your_auth_domain
REACT_APP_PROJECT_ID=your_project_id
REACT_APP_STORAGE_BUCKET=your_storage_bucket
REACT_APP_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_APP_ID=your_app_id
```

Start the app and open [localhost:3000](http://localhost:3000).

```sh
npm start
```

Run `npm run build` to produce a build in `build/`.
