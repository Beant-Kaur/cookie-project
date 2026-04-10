const express = require("express");
const cookieParser = require("cookieParser");

const app = express();
app.use(express.json());
app.use(cookieParser());

app.listen(3000, () =>{
    console.lod("Server running on port 3000");
});