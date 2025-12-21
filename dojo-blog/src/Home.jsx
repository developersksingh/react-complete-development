import React, { useEffect, useState } from "react";
import CourseList from "./CourseList";

function Home() {
  const pageTitle = "Special Offer";
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleDelete = (courseId) => {
    setCourses((prev) => prev.filter((course) => course.id !== courseId));
  };

  useEffect(() => {
    fetch("https://dummyjson.com/users") // wrong URL intentionally
      .then((response) => {
        console.log("API Response:", response);
        if (!response.ok) {
          throw new Error("API Error");
        }
        return response.json();
      })
      .then((data) => {
        const courseData = data.users.slice(0, 6).map((user) => ({
          id: user.id,
          age: user.age,
          name: `${user.firstName} ${user.lastName}`,
          email: user.email,
          mobile: user.phone,
          image: user.image,
          gender: user.gender,
          birthDate: user.birthDate,
        }));

        setCourses(courseData);
        setErrorMessage(null);
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage(`failed to fetch data: ${error.message}`);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <h1 className="text-center my-3">Send Data Parent To Child</h1>

      <div className="container">
        {/* Parent UI */}
        <div className="row">
          {loading && (
            <div className="col-12 text-center">
              <p>Loading...</p>
            </div>
          )}

          {!loading && errorMessage && (
            <div className="col-12">
              <div className="alert alert-danger">{errorMessage}</div>
            </div>
          )}

          {!loading &&
            !errorMessage &&
            courses.map((course) => (
              <div key={course.id} className="col-md-4">
                <div className="card my-3 p-3 text-center">
                  <h3>{course.name}</h3>
                  <p>Email: {course.email}</p>
                  <p>Mobile: {course.mobile}</p>
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
          errorMessage={errorMessage}
        />

        {/* Child 2 – Filtered */}
        <CourseList
          courses={courses.filter((course) => course.age > 20)}
          pageTitle="Premium Courses"
          handleDelete={handleDelete}
          errorMessage={errorMessage}
        />
      </div>
    </>
  );
}

export default Home;
