const express = require("express");
const getFilesAndDirectories = require("./listFiles");

const server = express();

server.use(express.json());

server.use("/", (req, res) => {

    let { directories, files } = getFilesAndDirectories("./files");

    res.status(200).send("SpanishPod101 File Viewer")
})

module.exports = server;