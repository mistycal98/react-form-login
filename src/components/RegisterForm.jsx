import React, { useState } from "react";
import styles from "./styles/Form.module.scss";
import logo from "../logo.svg";
// import { authUrl } from "../api/apiCall";
// import { useHistory } from "react-router-dom";

const RegisterForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	// eslint-disable-next-line
	const [isregistered, setReg] = useState(false);
	// const history = useHistory();

	const handleSubmit = async (event) => {
		event.preventDefaults();

		// try {
		// 	let data = await fetch(`${authUrl}/users/signup`, {
		// 		method: "POST",
		// 		headers: {
		// 			"Content-type": "application/json",
		// 		},
		// 		body: JSON.stringify({
		// 			email,
		// 			password,
		// 			confirmPassword,
		// 		}),
		// 		redirect: "follow",
		// 	});
		// 	let result = await data.json();
		// 	console.log(result);
		// 	if (result === "User Created") {
		// 		setReg(true);
		// 		history.push("/login");
		// 	} else {
		// 		setReg(false);
		// 	}
		// } catch (error) {
		// 	console.log(error);
		// }
	};
	const handleEmail = (event) => {
		setEmail(event.target.value);
	};
	const handlePassword = (event) => {
		setPassword(event.target.value);
	};
	const handleConfirmPassword = (event) => {
		setConfirmPassword(event.target.value);
	};
	return (
		<div className={styles["form-container"]}>
			<img src={logo} alt="Logo" />
			<h1>Register</h1>
			<form onSubmit={handleSubmit}>
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
				<label htmlFor="confirmPassword">Confirm</label>
				<input
					id="confirmPassword"
					type="password"
					name="confirmPassword"
					value={confirmPassword}
					onChange={handleConfirmPassword}
				/>
				<input type="submit" className={styles.login} />
			</form>
		</div>
	);
};

export default RegisterForm;
