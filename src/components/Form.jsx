import { useState } from "react";
import { authUrl } from "../api/apiCall";
import styles from "./Form.module.scss";
import Cookies from "js-cookie";
import logo from "../logo.svg";

export default function Form() {
	// State Initialize
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	// const [err, setError] = useState(false);

	// Handling onChange Event
	const handleEmail = (event) => {
		setEmail(event.target.value);
	};

	const handlePassword = (event) => {
		setPassword(event.target.value);
	};

	// handle onSubmit Event
	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			let response = await fetch(`${authUrl}/users/login`, {
				method: "POST",
				body: JSON.stringify({
					email: email,
					password: password,
				}),
				redirect: "follow",
				headers: {
					"Content-type": "application/json",
				},
			});

			let result = await response.json();
			console.log(result);
			console.log(result.data[0].jwt);
			Cookies.set("jwt", result.data[0].jwt);
		} catch (err) {
			event.preventDefault();
			// setError(true);
			console.log(err);
		}
	};

	return (
		<div className={styles["form-container"]}>
			<img src={logo} alt="Logo" />
			<h1>Login</h1>
			<form onSubmit={handleSubmit} action="">
				<label htmlFor="email">Email</label>
				<input id="email" type="email" name="email" value={email} onChange={handleEmail} />
				<label htmlFor="password">Password</label>
				<input
					id="password"
					type="password"
					name="password"
					value={password}
					onChange={handlePassword}
				/>
				<input type="submit" className={styles.login} />
			</form>
		</div>
	);
}
