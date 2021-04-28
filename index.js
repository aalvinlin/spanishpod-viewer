const server = require("./server");

const port = 3101;

server.listen(port, () => {
    console.log("Server running on port", port);
})