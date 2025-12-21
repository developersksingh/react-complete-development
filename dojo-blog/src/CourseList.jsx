import React from "react";

const CourseList = ({ courses, pageTitle, handleDelete }) => {
  return (
    <>
      <h2 className="text-center my-4">
        Course List Component : Received into Child
      </h2>

      <div className="row">
        {courses.map(course => (
          <div key={course.id} className="col-md-4">
            <div className="card my-3 p-3 text-center">
              
              <button
                className="btn btn-sm btn-danger mb-2"
                onClick={() => handleDelete(course.id)}
              >
                Delete
              </button>

              <h3>{course.name}</h3>
              <h4>Price : ₹{course.price}</h4>

              <span className="text-success fw-bold">
                {pageTitle}
              </span>

              <button className="btn btn-sm btn-primary mt-2">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CourseList;
