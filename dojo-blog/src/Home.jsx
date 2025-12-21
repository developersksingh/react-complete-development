import React, { useEffect, useState } from "react";
import CourseList from "./CourseList";

function Home() {
  const [courses, setCourses] = useState([]);
  const pageTitle = "Special Offer";

  const handleDelete = (courseId) => {
    setCourses((prev) =>
      prev.filter((course) => course.id !== courseId)
    );
  };

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => {
        // Convert users → courses

      


        const courseData = data.users.slice(0, 6).map((user) => ({
          id: user.id,
          age: user.age,
          name: user.firstName + " " + user.lastName,
          email : user.email,
          mobile : user.phone,
          image: user.image,
          birthDate: user.birthDate,
          gender: user.gender,

        }));
        setCourses(courseData);
      })
      .catch(() => {
        // Fallback data
        setCourses([
          { id: 1, name: "Course A", email: "coursea@example.com", mobile: "9999999999" },
          { id: 2, name: "Course B", email: "courseb@example.com", mobile: "8888888888" },
          { id: 3, name: "Course C", email: "coursec@example.com", mobile: "7777777777" },
          { id: 4, name: "Course D", email: "coursed@example.com", mobile: "6666666666" },
          { id: 5, name: "Course E", email: "coursee@example.com", mobile: "5555555555" },
          { id: 6, name: "Course F", email: "coursef@example.com", mobile: "4444444444" }
        ]);
      });
  }, []);

  return (
    <>
      <h1 className="text-center my-3">
        Send Data Parent To Child
      </h1>

      <div className="container">
        {/* Parent UI */}
        <div className="row">
          {courses.map((course) => (
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

        {/* Child 1 */}
        <CourseList
          courses={courses}
          pageTitle={pageTitle}
          handleDelete={handleDelete}
        />

        {/* Child 2 – Filtered */}
        <CourseList
          courses={courses.filter((course) => course.age > 20)}
          pageTitle="Premium Courses"
          handleDelete={handleDelete}
        />
      </div>
    </>
  );
}

export default Home;
