import React, { useEffect, useState } from "react";
import { todoUrl } from "../api/apiCall";
import styles from "./styles/Todo.module.scss";

//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Todo() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  useEffect(() => {
    fetchItems();
    // eslint-disable-next-line
  }, [task]);

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
    fetchItems();
  };

  const handleTaskField = (event) => {
    setTask(event.target.value);
  };
  const taskDelete = async (id) => {
    // event.preventDefault();
    try {
      let data = await fetch(`${todoUrl}/todos/${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
        redirect: "follow",
      });
      let result = await data.json();
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={styles.todos}>
      <h1>Tasks</h1>
      <form onSubmit={handleSubmit} action="">
        <label htmlFor="task">Task</label>
        <input id="task" type="text" name="task" value={task} onChange={handleTaskField} />
        <input type="submit" value="Submit" className={styles.submit} />
      </form>
      {tasks.map((task) => (
        <div key={task.taskid} className={styles.task}>
          <p>{task.task}</p>
          <FontAwesomeIcon
            icon={faTrash}
            size={"xs"}
            onClick={() => {
              taskDelete(task.taskid);
            }}
          />
        </div>
      ))}
    </div>
  );
}
