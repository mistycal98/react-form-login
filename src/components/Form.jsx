import { useState } from "react";

export default function Form() {
  // State Initialize
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  // Handling onChange Event
  const UserName = (event) => {
    setUserName(event.target.value);
  };

  const Password = (event) => {
    setPassword(event.target.value);
  };

  return (
    <form method="POST">
      <label htmlFor="userName">Username:</label>
      <input type="text" name="userName" value={userName} onChange={UserName} />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" value={password} onChange={Password} />
      <button>Login</button>
    </form>
  );
}
