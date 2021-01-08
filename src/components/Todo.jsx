import React, { useEffect, useState } from "react";
import { todoUrl } from "../api/apiCall";
import styles from "./Todo.module.scss";

export default function Todo() {
	const [tasks, setTasks] = useState([]);
	const [task, setTask] = useState("");

	useEffect(() => {
		fetchItems();
		// eslint-disable-next-line
	}, []); 

	const fetchItems = async () => {
		let data = await fetch(`${todoUrl}/todos/`);
		let result = await data.json();
		setTasks(result);
		console.table(tasks);
	};

	const handleSubmit = async (event) => {
		console.log(task);
		event.preventDefault();
		let data = await fetch(`${todoUrl}/todos/`, {
			method: "POST",
			body: JSON.stringify({
				task,
			}),
			headers: {
				"Content-type": "application/json",
			},
			redirect: "follow",
		});
		let result = await data.json();
		console.log(result);
	};

	const handleTaskField = (event) => {
		setTask(event.target.value);
	};

	return (
		<div className={styles.todos}>
			<h1>Tasks</h1>
			<form onSubmit={handleSubmit} action="">
				<label htmlFor="task">Task</label>
				<input id="task" type="text" name="task" value={task} onChange={handleTaskField} />
				<input type="submit" value="Submit" />
			</form>
			{tasks.map((task) => (
				<p key={task.taskid}>{task.task}</p>
			))}
		</div>
	);
}
