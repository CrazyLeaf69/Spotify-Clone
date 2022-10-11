import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login";
import Dashboard from "./Dashboard";
import { useEffect, useState } from "react";

function App() {
  const [code, setCode] = useState(null);
  useEffect(() => {
    setCode(new URLSearchParams(window.location.search).get("code"));
  }, []);

  return code ? <Dashboard code={code} /> : <Login />;
}

export default App;
