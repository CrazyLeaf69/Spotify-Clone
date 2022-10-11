import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

const Callback = () => {
  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");
    if (code != null) {
      window.location = "/?code=" + code;
    } else {
      window.location = "/";
    }
  }, []);

  return <p>Redirecting</p>;
};

export default Callback;
