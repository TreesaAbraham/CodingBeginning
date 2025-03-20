/* this page helps to display the list of blogs in the home page */
import { Link } from "react-router-dom";
import useFetch from "./useFetch";

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>

      {/* Check if blogs array is empty */}
      {blogs.length === 0 ? (
        <p>No blogs available.</p>
      ) : (
        blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
              <h2>{blog.title}</h2>
              <p>Written by {blog.author}</p>
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default BlogList;
