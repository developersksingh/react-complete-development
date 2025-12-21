import React, { useState } from "react";
import CourseList from "./CourseList";

function Home() {
  const [courses, setCourses] = useState([
    { id: 1, name: "React JS", price: 2999 },
    { id: 2, name: "Node JS", price: 2599 },
    { id: 3, name: "Mongo DB", price: 1999 },
    { id: 4, name: "Express JS", price: 1499 },
    { id: 5, name: "JavaScript", price: 999 },
  ]);

  const pageTitle = "Special Offer";

  const handleDelete = (courseId) => {
    setCourses(courses.filter(course => course.id !== courseId));
  };

  return (
    <>
      <h1 className="text-center my-3">
        Send Data Parent To Child
      </h1>

      <div className="container">
        <div className="row">
          {courses.map(course => (
            <div key={course.id} className="col-md-4">
              <div className="card my-3 p-3 text-center">
                <h3>{course.name}</h3>
                <h4>Price : ₹{course.price}</h4>
                <button className="btn btn-sm btn-primary">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <hr />

        {/* First Child */}
        <CourseList
          courses={courses}
          pageTitle={pageTitle}
          handleDelete={handleDelete}
        />

        {/* Second Child with filtered data */}
        <CourseList
          courses={courses.filter(course => course.price > 1500)}
          pageTitle={pageTitle}
          handleDelete={handleDelete}
        />
      </div>
    </>
  );
}

export default Home;
