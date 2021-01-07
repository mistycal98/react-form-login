import { useState } from "react";
import { authUrl } from "../api/apiCall";

export default function Form() {
  // State Initialize
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    const data = JSON.stringify({
      email,
      password,
    });
    console.log(data);
    try {
      let response = await fetch(`${authUrl}/users/login`, {
        method: "POST",
        body: data,
        redirect: "follow",
        header: JSON.stringify({
          "Authorization":
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pc3RyeS50dXNoYXI5OEBnbWFpbC5jb20iLCJpYXQiOjE2MTAwMTQzNjYsImV4cCI6MTYxMDEwMDc2Nn0.z9GRdpVI_dAhkQM2Dd71IzEfolASE8T1T3hrqdrLa-U",
          "Content-type": "application/json",
          "Cookie":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pc3RyeS50dXNoYXI5OEBnbWFpbC5jb20iLCJpYXQiOjE2MTAwMTQzNjYsImV4cCI6MTYxMDEwMDc2Nn0.z9GRdpVI_dAhkQM2Dd71IzEfolASE8T1T3hrqdrLa-U",
        }),
      });

      let result = await response.json();
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">email:</label>
      <input type="text" name="email" value={email} onChange={handleEmail} />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" value={password} onChange={handlePassword} />
      <button>Login</button>
    </form>
  );
}
