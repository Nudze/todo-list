axios
	.get("/api/todos")
	.then(({ data }) => {
		for (const todo of data) {
			displayTodo(todo);
		}
	})
	.catch((err) => {
		console.log(err);
	});

function displayTodo (todo) {
	const li = document.createElement("li");
	li.classList.add("task");
	li.dataset.id = todo._id;
	li.dataset.completed = todo.completed;
	li.innerHTML = `${todo.name}<span>X</span>`;
	if (todo.completed) li.classList.add("done");
	document.querySelector(".list").appendChild(li);
}

document.querySelector("#todoInput").addEventListener("keydown", function ({ key }) {
	if (key === "Enter") {
		createTodo(this);
		this.value = "";
	}
});

function createTodo (input) {
	axios
		.post("/api/todos", {
			name : input.value
		})
		.then(({ data }) => {
			displayTodo(data);
		})
		.catch((err) => {
			console.log(err);
		});
}

document.querySelector(".list").addEventListener("click", ({ target: { tagName, parentElement } }) => {
	if (tagName === "SPAN") {
		removeTodo(parentElement);
	}
});

function removeTodo (todo) {
	axios
		.delete(`/api/todos/${todo.dataset.id}`)
		.then(() => {
			todo.remove();
		})
		.catch((err) => {
			console.log(err);
		});
}

document.querySelector(".list").addEventListener("click", ({ target }) => {
	if (target.tagName === "LI") {
		updateTodo(target);
	}
});

function updateTodo (todo) {
	todo.dataset.completed = todo.dataset.completed === "true" ? false : true;

	axios
		.put(`/api/todos/${todo.dataset.id}`, {
			completed : todo.dataset.completed
		})
		.then(() => {
			todo.classList.toggle("done");
		})
		.catch((err) => {
			console.log(err);
		});
}
