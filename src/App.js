import { useState } from "react";
import "./App.css";
import Registration from "./components/form";
import Registered from "./components/registered";

function App() {
  const [isRegistered, setIsRegistered] = useState(
    localStorage.getItem("isRegisteredMeta") === "true"
  );
  return (
    <div className="App col-lg-6 col-md-6 col-sm-10 col-10 m-auto">
      {isRegistered ? (
        <Registered />
      ) : (
        <Registration setIsRegistered={setIsRegistered} />
      )}
    </div>
  );
}

export default App;
