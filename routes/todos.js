const express = require("express");
const router = express.Router();

const Todo = require("../models");

router
	.route("/")
	.get((req, res) => {
		Todo.find()
			.then((todos) => {
				res.json(todos);
			})
			.catch((err) => {
				res.send(err);
			});
	})
	.post((req, res) => {
		Todo.create(req.body)
			.then((todo) => {
				res.status(201).json(todo);
			})
			.catch((err) => {
				res.send(err);
			});
	});

router
	.route("/:id")
	.put((req, res) => {
		Todo.findByIdAndUpdate(req.params.id, req.body, { new: true })
			.then((todo) => {
				res.json(todo);
			})
			.catch((err) => {
				res.send(err);
			});
	})
	.delete((req, res) => {
		Todo.findByIdAndDelete(req.params.id)
			.then((todo) => {
				res.send(`deleted ${todo}`);
			})
			.catch((err) => {
				res.send(err);
			});
	});

module.exports = router;
