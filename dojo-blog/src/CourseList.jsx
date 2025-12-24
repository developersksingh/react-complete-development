import React from "react";
import { Link } from "react-router-dom";

const CourseList = ({ courses, pageTitle, handleDelete, errorMessage }) => {
  return (
    <>
      <h2 className="text-center my-4">
        Course List Component : Received into Child
      </h2>

      <div className="row">
        {/* Error Message */}
        {errorMessage && (
          <div className="col-12">
            <div className="alert alert-danger">{errorMessage}</div>
          </div>
        )}

        {/* Course Cards */}
        {courses.map((course) => (
          <div key={course.id} className="col-md-4">
            <Link
              to={`/blog-details/${course.id}`}
              className="text-decoration-none text-dark"
            >
              <div className="card my-3 p-3 text-center align-items-center">
                <button
                  className="btn btn-sm btn-danger align-self-end"
                  onClick={(e) => {
                    e.preventDefault(); // prevent link navigation on delete
                    handleDelete(course.id);
                  }}
                >
                  X
                </button>

                {course.image && (
                  <img
                    src={course.image}
                    alt={course.name}
                    className="img-fluid rounded-circle mb-2"
                    width="80"
                  />
                )}

                <h5>{course.name}</h5>
                <p><strong>Age:</strong> {course.age}</p>
                <p><strong>Email:</strong> {course.email}</p>
                <p><strong>Mobile:</strong> {course.mobile}</p>
                <p><strong>Gender:</strong> {course.gender}</p>
                <p><strong>DOB:</strong> {course.birthDate}</p>

                <span className="text-success fw-bold">{pageTitle}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default CourseList;
