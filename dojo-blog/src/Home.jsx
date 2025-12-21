import React, { useEffect, useState } from "react";
import CourseList from "./CourseList";

function Home() {
  const pageTitle = "Special Offer";
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleDelete = (courseId) => {
    setCourses((prev) => prev.filter((course) => course.id !== courseId));
  };

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => {
        const courseData = data.users.slice(0, 6).map((user) => ({
          id: user.id,
          age: user.age,
          name: `${user.firstName} ${user.lastName}`,
          email: user.email,
          mobile: user.phone,
          image: user.image,
          gender: user.gender,
        }));

        setCourses(courseData);
        setLoading(false);
      })
      .catch(() => {
        setCourses([
          { id: 1, name: "Course A", age: 22, email: "coursea@example.com", mobile: "9999999999" },
          { id: 2, name: "Course B", age: 25, email: "courseb@example.com", mobile: "8888888888" },
          { id: 3, name: "Course C", age: 19, email: "coursec@example.com", mobile: "7777777777" },
        ]);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <h1 className="text-center my-3">Send Data Parent To Child</h1>

      <div className="container">
        {/* Parent UI */}
        <div className="row">
          {loading ? (
            <div className="col-12 text-center">
              <p>Loading...</p>
            </div>
          ) : (
            courses.map((course) => (
              <div key={course.id} className="col-md-4">
                <div className="card my-3 p-3 text-center">
                  <h3>{course.name}</h3>
                  <p>Email: {course.email}</p>
                  <p>Mobile: {course.mobile}</p>
                  <button className="btn btn-sm btn-primary">View</button>
                </div>
              </div>
            ))
          )}
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
