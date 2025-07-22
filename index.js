const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
 // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");  // ✅ Fix here
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    { id: uuidv4(), username: 'shakti', content: "i love coding" },
    { id: uuidv4(), username: 'gaurv kuamr', content: "i love coding" },
    { id: uuidv4(), username: 'ashutosh', content: "i love coding" }
];

app.get('/post', (req, res) => {
    res.render("index.ejs", { posts });
});

app.get("/post/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/post", (req, res) => {
    let { username, content } = req.body;
    let id = uuidv4();
    posts.push({ id, username, content }); // added id
    res.redirect("/post");
});

app.get("/post/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);  // ✅ fix here
    console.log(post);
    res.render("show.ejs", { post});
});

app.listen(port, () => {
    console.log("Listening on port: 8080");
});
