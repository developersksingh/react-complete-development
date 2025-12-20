import React from "react";

const CourseList = ({ courses, pageTitle }) => {
  return (
    <>
      <h2 className="text-center my-4">
        Course List Component : Received into Child
      </h2>

      <div className="row">
        {courses.map((course) => (
          <div key={course.id} className="col-md-4">
            <div className="card my-3 p-3 text-center">
              <h3>{course.name}</h3>
              <h4>Price : ₹{course.price}</h4>

              <span className="text-success fw-bold mb-2">
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
