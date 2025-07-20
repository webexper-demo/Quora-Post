// const { log } = require("console");
const express = require("express");
const app = express();

const port = 8080;

const path = require("path");

app.use(express.urlencoded({extended:true}));

app.set("views engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get('/post', (req, res)=>{
    res.render("index.ejs",{posts})
})
app.get("/post/new", (req, res)=>{
    res.render("new.ejs")
})

app.post("/post",(req,res)=>{
    
    let {username, content} = req.body;
    posts.push({username, content});
    res.redirect("/post");
    
})

let posts = [
    {
        username: 'shakti ',
        content: " i love  coding",
        
    },
    {
        username: 'gaurv kuamr',
        content: " i love  coding",

    },
    {
        username: 'ashutosh',
        content: " i love  coding",

    }

]
app.listen(port, ()=>{
    console.log("listenign to port : 8080");
    
})