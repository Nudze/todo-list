const express = require("express");
const app = express();

const todosRoutes = require("./routes/todos");

app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/views/index.html");
});

app.use("/api/todos", todosRoutes);

app.listen(3000, () => {
	console.log("todos have started");
});
