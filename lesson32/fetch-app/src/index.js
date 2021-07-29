import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { ThemeProvider } from "styled-components";

// const theme = {
//   mainColor: "green",
// };

ReactDOM.render(
  <React.StrictMode>
    {/* <ThemeProvider theme={theme}> */}
      <App />
    {/* </ThemeProvider> */}
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
