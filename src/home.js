/*display of homepage */
import BlogList from "./BlogList";
import useFetch from "./useFetch";
 


const Home = () => {
  const { data: blogs, isPending, error } = useFetch("blogs");


  return (
    <div className="home">
      <h2>Home Page</h2>

      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blogs && blogs.length === 0 && <p>No blogs available.</p>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}

    </div>
  );
};

export default Home;
