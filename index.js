const express = require("express");
const { createServer } = require("node:http");
const app = express();
const { join } = require("node:path");
const PORT = 3000;

const server = createServer(app);
let data = "Initial Data";

app.get("/", (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
})

app.get("/getData", (req, res) => {
    res.send({data: data});
})

app.get("/updateData", (req, res) => {
    data = "Updated Data " + Math.floor(Math.random() * 4);;
    res.send({data: data});
})


server.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}`);
})


