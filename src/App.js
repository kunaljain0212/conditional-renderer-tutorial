import { useState } from "react";
import AuthenticatedUser from "./components/authenticatedUser";
import Admin from "./components/admin";
import User from "./components/user";
import "./App.css";
import ConditionalRenderer from "./hoc/conditionalRenderer";

function App() {
  const [role, setRole] = useState("admin");
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="App">
      <ConditionalRenderer isVisible={isLoggedIn}>
        <AuthenticatedUser />
      </ConditionalRenderer>
      <ConditionalRenderer isVisible={isLoggedIn}>
        <ConditionalRenderer isVisible={role === "admin"}>
          <Admin />
        </ConditionalRenderer>
        <ConditionalRenderer isVisible={role === "user"}>
          <User />
        </ConditionalRenderer>
      </ConditionalRenderer>
    </div>
  );
}

export default App;
