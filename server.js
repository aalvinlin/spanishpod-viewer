express = require("express");

const server = express();

server.use(express.json());

server.use("/", (req, res) => {
    res.status(200).send("SpanishPod101 File Viewer")
})

module.exports = server;