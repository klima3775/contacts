import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ContactList from "./components/сontactList/contactList";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContactList />
  </React.StrictMode>
);
