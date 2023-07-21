import React from "react";
import ReactDOM from "react-dom/client";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import App from "./App";

// import { library } from "@fortawesome/fontawesome-svg-core";
// import {
//   faFacebook,
//   faTwitter,
//   faInstagram,
//   faLinkedin,
// } from "@fortawesome/free-brands-svg-icons";

// library.add(faTwitter, faFacebook, faInstagram, faLinkedin);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
