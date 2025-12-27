import React, { useEffect, useState } from "react";
import CourseList from "./CourseList";
import useFetch from "./useFetch";

function Home() {
  const pageTitle = "Special Offer";
  const { data, loading, error } = useFetch("./users.json");
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    if (data?.users) {
      const mappedCourses = data.users.slice(0, 6).map((user) => ({
        id: user.id,
        age: user.age,
        name: `${user.firstName} ${user.lastName}`,
        email: user.email,
        mobile: user.phone,
        image: user.image,
        gender: user.gender,
        birthDate: user.birthDate,
      }));

      setCourses(mappedCourses);
    }
  }, [data]);

  const handleDelete = (id) => {
    setCourses((prev) => prev.filter((course) => course.id !== id));
  };

  return (
    <>
    
      <div className="container">
        {loading && <p className="text-center">Loading...</p>}
        {error && <div className="alert alert-danger">{error}</div>}

        {!loading && !error && (
          <CourseList
            courses={courses}
            pageTitle={pageTitle}
            handleDelete={handleDelete}
          />
        )}
      </div>
    </>
  );
}

export default Home;
