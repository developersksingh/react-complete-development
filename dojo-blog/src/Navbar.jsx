import React from 'react'

function Navbar() {
     const hadlerClick= ()=>{
        alert(`Welcome My Dear Friends`);
    }
    const hadlerClickAgain = (a,b)=>{
        alert(`You have getting Score Like : ${a}, ${b}`);
    }
     const hadlerClickEvent = (a,b,e)=>{
        alert(`You have getting Score Like : ${a}, ${b} : Event :${e.type}`);
    }
  return (
    <>
    <h1 style={{color:"blue",padding:"4px", fontSize:"20px"}}>Blog World</h1>
    <div>Navbar</div>
    <button className="btn btn-sm btn-success mr-4" onClick={hadlerClick}>Button1</button> &nbsp;
    <button className="btn btn-sm btn-success my-5" onClick={()=>{hadlerClickAgain(101,268)}}>Button 2 </button> &nbsp;
    <button className="btn btn-sm btn-success my-5" onClick={(e)=>hadlerClickEvent(101,268,e)}>Button 3 </button>

    </>
  )
}

export default Navbar