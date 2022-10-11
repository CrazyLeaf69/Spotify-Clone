import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

function callback() {
  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");
    if (code != null) {
      window.location = "/?code=" + code;
    } else {
      window.location = "/";
    }
  }, []);

  return <p>redirecting</p>;
}

export default callback;
