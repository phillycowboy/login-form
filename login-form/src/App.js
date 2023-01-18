import React, { useState } from "react";
import LoginForm from "../src/components/LoginForm";

function App() {
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };

  const login = (details) => {
    console.log(details);

    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      console.log("Logged In");
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      console.log("Details dont match");
      setError("Details dont match");
    }
  };

  const logout = () => {
    console.log("Logout");
    setUser({ name: "", email: "" });
    setError("");
  };

  return (
    <div className="App">
      {user.name !== "" ? (
        <div className="welcome">
          <h2>
            Welcome, <span>{user.name}</span>
          </h2>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <LoginForm login={login} error={error} />
      )}
    </div>
  );
}

export default App;
