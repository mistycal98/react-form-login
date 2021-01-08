import { useState } from "react";
import { authUrl } from "../api/apiCall";
import styles from "./Form.module.scss";
import Cookies from "js-cookie";
import logo from "../logo.svg";
import { useHistory } from "react-router-dom";

function Form() {
	// State Initialize
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	// eslint-disable-next-line
	const [isLogged, setLog] = useState(false);
	// const [err, setError] = useState(false);

	const history = useHistory();

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
			Cookies.set("jwt", result.data[0].jwt);
			console.log(history);
			if (result.status === "Sucessfull") {
				setLog(true);
				history.push("/dashboard");
			} else {
				setLog(false);
			}
		} catch (err) {
			event.preventDefault();
			// setError(true);
			setLog();
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

export default Form;
