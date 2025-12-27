import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch"; // adjust path if needed

const BlogDetails = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(
    `https://dummyjson.com/users/${id}`
  );

  if (loading) {
    return <h3 className="text-center mt-4">Loading...</h3>;
  }

  if (error) {
    return (
      <div className="alert alert-danger text-center mt-4">
        {error}
      </div>
    );
  }

  return (
    <div className="container-fluid mt-4">
      <h2 className="text-center mb-4">Blog Details</h2>

      {data && (
        <div className="card p-4 text-center">
          <img
            src={data.image}
            alt={data.firstName}
            className="rounded-circle mb-3"
            width="120"
          />

          <h4>
            {data.firstName} {data.lastName}
          </h4>

          <p><strong>Email:</strong> {data.email}</p>
          <p><strong>Phone:</strong> {data.phone}</p>
          <p><strong>Age:</strong> {data.age}</p>
          <p><strong>Gender:</strong> {data.gender}</p>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
