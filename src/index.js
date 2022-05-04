import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "./context/themeContext";
import { EditorProvider } from './context/EditorContext'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <ThemeProvider>
    <EditorProvider>
      <App />
    </EditorProvider>
  </ThemeProvider>
  // </React.StrictMode>
);

reportWebVitals();
