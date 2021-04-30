const express = require("express");
const getFilesAndDirectories = require("./listFiles");

const server = express();

server.use(express.json());

server.set("view engine", "pug");

server.use(express.static("public"));

server.use("/", (req, res) => {

    let directoriesAndFiles = getFilesAndDirectories("./files");

    res.status(200).render("index", directoriesAndFiles);
})

module.exports = server;