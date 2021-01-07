import React from "react";
import logo from "../logo.svg";

import { Link } from "react-router-dom";
import styles from "./Navigation.module.scss";

export default function Navigation() {
  return (
    <div className={styles.navigation}>
      <div className={styles.logo}>
        <img src={logo} alt="" srcset="" />
      </div>
      <nav>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/login">
            <li>Login</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
