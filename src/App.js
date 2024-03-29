import { useState } from "react";
import "./App.css";
import Registration from "./components/form";
import Registered from "./components/registered";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  const [isRegistered, setIsRegistered] = useState(
    localStorage.getItem("isRegisteredMeta")
  );
  const [error, setError] = useState(false);
  return (
    <>
      <div>
        <Header />
      </div>

      <div className="App col-lg-8 col-md-8 col-sm-10 col-10 m-auto mb-5">
        {!error && !isRegistered ? (
          <Registration setIsRegistered={setIsRegistered} setError={setError} />
        ) : error && !isRegistered ? (
          <Registered error={error} isRegistered={isRegistered} />
        ) : !error && isRegistered ? (
          <Registered error={error} isRegistered={isRegistered} />
        ) : null}
      </div>
      <hr style={{ color: "gray", height: "2px", marginBottom: "6vh" }} />
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
