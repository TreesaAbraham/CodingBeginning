import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import supabase from "./supabaseClient";

const BlogDetails = () => {
  const { id } = useParams();
  const history = useHistory(); // Using useHistory instead of useNavigate
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        setError("Blog not found");
        setIsPending(false);
      } else {
        setBlog(data);
        setIsPending(false);
      }
    };

    fetchBlog();
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      const { error } = await supabase.from("blogs").delete().eq("id", id);

      if (error) {
        console.error("Error deleting blog:", error);
      } else {
        history.push("/"); // Correct way to navigate in React Router v5
      }
    }
  };

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
