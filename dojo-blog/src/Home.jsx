import React from 'react'
import { useState } from 'react';
function Home() {
    const [courses,setCourse] = useState([
        {id:1, name:"React JS", price:2999},
        {id:2, name:"Node JS", price:2599},
        {id:3, name:"Mongo DB", price:1999},
        {id:4, name:"Express JS", price:1499},
        {id:5, name:"JavaScript", price:999},
    ]);
  return (
    <>
    <h1>Generating the List Data</h1>

    <div className='container'>
        <div className='row '>
       {courses.map((course) => (
            <div className="col-md-4">
            <div key={course.id} className='card my-3 p-3  mx-2 d-flex justify-content-center'>
                <h3>{course.name}</h3>
                <h4>Price : {course.price}</h4>
                <button className='btn btn-sm btn-primary'>Buy Now</button>
            </div>
            </div>
        ))}
            </div>
    </div>   
    </>   
  )
}

export default Home