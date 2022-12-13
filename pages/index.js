import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Head from "next/head";
import Dashboard from "../Components/Dashboard";
import Login from "../Components/Login";

function App() {
  const [code, setCode] = useState(null);
  useEffect(() => {
    setCode(new URLSearchParams(window.location.search).get("code"));
  }, []);

  return (
    <div>
      <Head>
        <title>Music & Lyrics</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {code ? <Dashboard code={code} /> : <Login />};
    </div>
  );
}

export default App;
