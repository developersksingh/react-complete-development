import React from "react";
import { useState } from "react";

const Navbar = () => {
  const [pageName, setPageName] = useState("Web Development");
  const [exprience, setExperience] = useState(16);

  const handlerClick = () => {
    alert("Welcome My Dear Friends");
  };

  const handlerClickAgain = (a, b) => {
    alert(`You have getting Score Like : ${a}, ${b}`);
  };

  const handlerClickEvent = (a, b, e) => {
    alert(`You have getting Score Like : ${a}, ${b} : Event : ${e.type}`);
  };
  const changePageName = () => {
    setPageName("Mobile Development");
    setExperience(20);
  }

  return (
    <>
      <h1>Current Choic is : {pageName}, Experiece :  {exprience}</h1>
      <h1
        style={{
          color: "blue",
          padding: "4px",
          fontSize: "20px",
        }}
      >
        Blog World
      </h1>
      <button className="btn btn-sm btn-success mr-4" onClick={handlerClick}>
        Button 1
      </button>
      &nbsp;
      <button
        className="btn btn-sm btn-success my-5"
        onClick={() => handlerClickAgain(101, 268)}
      >
        Button 2
      </button>
      &nbsp;
      <button
        className="btn btn-sm btn-success my-5"
        onClick={(e) => handlerClickEvent(101, 268, e)}
      >
        Button 3
      </button>
      <button className="btn btn-sm btn-primary mx-4" onClick={changePageName}>
        Change Page Name
      </button>
    </>
  );
};

export default Navbar;
