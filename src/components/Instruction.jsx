import React from "react";
import styles from "./styles/Instruction.module.scss";
export default function Instruction() {
  return (
    <div className={styles.instruction}>
      <h1>Todo List App</h1>
      <ul>
        <li>
          Register : First Register from Navbar. On Sucessfull Registeration you will be redirected
          to login Page
        </li>
        <li>Login : Login with the email and password</li>
        <li>On Sucessfull Login redirected to the dashboard page with Todo App</li>
      </ul>
    </div>
  );
}
