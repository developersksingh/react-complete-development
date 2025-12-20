import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./Navbar";

function App() {
  const title = "Welcome to the my new react blog.";
  const link = "www.google.com";

  return (
    <>
      <div className="container">
        <h1 className="text-success">{title} </h1>
        <p>{"Hello ,World"}</p>
        <a href={link} title={link}>
          Visit Site
        </a>
        <p>{[1, 2, 3, 4, 5]}</p>
        <p>{Math.random() * 100}</p>
        <p>Active User : {100 + 268}</p>
        <Navbar />
      </div>
    </>
  );
}

export default App;
