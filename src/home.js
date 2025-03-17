/*display of homepage */
import { useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const [name, setName] = useState("katniss");
  const [age, setAge] = useState(16);
  const { data: blogs, isPending, error } = useFetch("http://localhost:8000/blogs");

  const handleClickAgain = () => {
    setName("peeta");
    setAge(17);
  };

  return (
    <div className="home">
      <h2>Home Page</h2>

      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blogs && blogs.length === 0 && <p>No blogs available.</p>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}

      <p>{name} is {age} years old.</p>
      
      <button onClick={handleClickAgain}>Click Me Again</button>
      <button onClick={() => setName("Katniss")}>Change Name</button>

      <p>{name}</p>
    </div>
  );
};

export default Home;
