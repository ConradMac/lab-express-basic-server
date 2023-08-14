const path = require("path");

// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require("express");
const logger = require("morgan");

// CREATE EXPRESS APP
// Here you should create your Express app:
const app = express();

app.use(logger("dev"));

app.use(express.static("public"));

// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
// - `express.json()` to parse incoming requests with JSON payloads
// - `morgan` logger to log all incoming requests

// ROUTES
// Start defining your routes here:

// Iteration 2 | Create Home Route
// Create a route handler for GET / that responds back with the provided HTML file home.html.
app.get("/", (req, res, next) => {
    console.log(__dirname);
    const filePath = path.normalize(__dirname + "\\views\\home.html");
    console.log(filePath);
    res.sendFile(filePath);
});

// Iteration 3 | Create Blog Route
// Create a route handler for GET /blog that responds back with the provided HTML file blog.html.
app.get("/blog", (req, res, next) => {
    res.sendFile(__dirname + "/views/blog.html");
});

// Iteration 4 | Server JSON Data for Projects
// Create a route handler for GET /api/projects that responds back with the provided JSON data from projects.json. The JSON data returned in response will be used in the home page to render the projects section.
const projects = require("./data/projects.json");

app.get("/api/projects", (req, res, next) => {
    res.json(projects); // on récupère ici le conteu du fichier projects.json
});

// Iteration 5 | Server JSON Data for Articles
// Create a route handler for GET /api/articles that responds back with the provided JSON data from articles.json. The JSON data returned in response will be used in the blog page to render the projects section.

const articles = require("./data/articles.json");
app.get("/api/articles", (req, res, next) => {
    res.json(articles);
});

// Bonus: Iteration 6 | Create a 404 Route
// Create a route handler for GET * that responds back with the provided HTML file views/not-found.html.

// Note: This route handler should be placed after all the other route handlers as a catch-all for any other routes that are not defined

app.use("*", (req, res, next) => {
    res.statusMessage(404);
    res.sendFile(__dirname + "/views/not-found.html");
});

// Bonus: Iteration 7 | Customize the Home Page
// Update the home page and add your personal information, including your name, photo, short bio, and links to your GitHub and LinkedIn profiles. Additionally, you can update the static JSON data for the projects section to include your own projects

// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(5005, () => console.log("Server listening on port 5005"));
