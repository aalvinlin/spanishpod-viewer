const express = require("express");
const getFilesAndDirectories = require("./listFiles");

const server = express();

server.use(express.json());

server.set("view engine", "pug");

server.use(express.static("public"));

server.use("/:level/:lesson", (req, res) => {

    const level = req.params.level;
    const lesson = req.params.lesson;
    
    res.status(200).render("index", getFilesAndDirectories(`./files/${level}/${lesson}`));
})

server.use("/:level", (req, res) => {

    const level = req.params.level;

    res.status(200).render("index", getFilesAndDirectories(`./files/${level}`));
})


server.use("/", (req, res) => {

    res.status(200).render("index", getFilesAndDirectories(`./files`));
})

// handle errors
server.use((err, req, res, next) => {

    console.error(err);

    res.status(500).send(err);
})

module.exports = server;