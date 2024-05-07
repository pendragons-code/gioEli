const express = require("express");
const app = express();
const { join } = require("path");

port = 3000;


app.use(express.static(join(__dirname, "public")));

app.get("/", (req, res) => {
	res.sendFile("index.html");
});

app.get("/stage1", (req, res) => {
	res.sendFile(join(__dirname, "public/stage1.html"));
})

app.get("/eye", (req, res) => {
	res.sendFile(join(__dirname, "public/stage2.html"));
});

app.get("/hint", (req, res) => {
	res.send("The text seems to be encoded in some code... Maybe base 64??? Maybe I can search up online to find a way to decode it??? Maybe there are decoders online???");
});

app.get("/asdfghjkl", (req, res) => {
	res.sendFile(join(__dirname, "public/elicopter.html"));
});

app.get("/qwertyuiop", (req, res) => {
	res.sendFile(join(__dirname, "public/giogio.html"));
});

app.use(function(req, res) {
	res.send("🍌 Error 404! Go back! You probably got the wrong password!");
});

app.listen((port), () => {
	console.log(`Hanging onto dear life at ${process.pid}\nCurrently listening at http://localhost:${port}!`);
});
