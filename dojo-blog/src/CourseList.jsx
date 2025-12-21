import React from "react";

const CourseList = ({ courses, pageTitle, handleDelete }) => {
  return (
    <>
      <h2 className="text-center my-4">
        Course List Component : Received into Child
      </h2>

      <div className="row">
        {courses.map((course) => (
          <div key={course.id} className="col-md-4">
            <div className="card my-3 p-3 text-justify-content-left align-items-center">
              
              {/* Delete Button */}
              <button
                className="btn btn-sm btn-danger mb-2" title="Delete Record"
                onClick={() => handleDelete(course.id)}
              >
                X
              </button>

              {/* User Image */}
              {course.image && (
                <img
                  src={course.image}
                  alt={course.name}
                  className="img-fluid rounded-circle mb-2"
                  width="80"
                />
              )}

              {/* User Details */}
              <h5>{course.name}</h5>
              <p className="mb-1"><strong>Age:</strong> {course.age}</p>
              <p className="mb-1"><strong>Email:</strong> {course.email}</p>
              <p className="mb-1"><strong>Mobile:</strong> {course.mobile}</p>
              <p className="mb-1"><strong>Gender:</strong> {course.gender}</p>
              <p className="mb-2"><strong>DOB:</strong> {course.birthDate}</p>

              {/* Course Price (Optional) */}
              {course.price && (
                <h6>Price : ₹{course.price}</h6>
              )}

              <span className="text-success fw-bold">
                {pageTitle}
              </span>

               <button
                className="btn btn-sm btn-danger mb-2" title="Delete Record"
                onClick={() => handleDelete(course.id)}
              >
                X
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CourseList;
