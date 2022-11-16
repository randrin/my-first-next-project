import axios from "axios";
import React, { useEffect } from "react";

const Blog = () => {
  useEffect(() => {
    handleOnGetUsers();
  }, []);

  const handleOnGetUsers = async () => {
    await axios
      .get("http://localhost:3000/api/hello")
      .then((response) => {
        console.log("Users: ", response);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  return <div>Blog page</div>;
};

export default Blog;
