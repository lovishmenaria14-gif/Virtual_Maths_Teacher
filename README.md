# Virtual Maths Teacher

An AI-powered web app that solves maths problems from uploaded images using the Gemini API.

## Setup

1. Get a free Gemini API key from Google AI Studio:
   https://aistudio.google.com/app/apikey

2. Open `script.js` and replace:

```js
const API_KEY = "YOUR_GEMINI_API_KEY";
```

with your own API key:

```js
const API_KEY = "AIzaSy...";
```

3. Open the app locally or deploy it.

## Important

* This project is a frontend-only application hosted on GitHub Pages.
* Your API key runs in the browser and is visible to anyone using the app.
* Do **not** use a production or sensitive API key.
* For a secure deployment, create a backend server and keep the API key in environment variables.
