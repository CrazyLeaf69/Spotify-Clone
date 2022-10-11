import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login";
import Dashboard from "./Dashboard";
import { useEffect, useState } from "react";
import Head from "next/head";

function App() {
  const [code, setCode] = useState(null);
  useEffect(() => {
    setCode(new URLSearchParams(window.location.search).get("code"));
  }, []);

  return (
    <div>
      <Head>
        <title>Better Spotify</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {code ? <Dashboard code={code} /> : <Login />};
    </div>
  );
}

export default App;
