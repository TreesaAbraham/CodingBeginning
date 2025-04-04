import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import supabase from "./supabaseClient";

const BlogDetails = () => {
  const { id } = useParams();
  const history = useHistory();
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
        setError(error.message || "Blog not found");
      } else {
        setBlog(data);
      }
      setIsPending(false);
    };

    fetchBlog();
  }, [id]);

  const handleDelete = async () => {
    const { error } = await supabase
      .from("blogs")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Failed to delete blog:", error);
      setError("Could not delete the blog. Try again.");
    } else {
      history.push("/"); // Navigate back to home after deletion
    }
  };

  return (
    <div className="blog-details">
      {isPending && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {blog && (
        <div>
          <h2>{blog.title} by {blog.author}</h2>
          <p>{blog.body}</p>
          <button onClick={handleDelete} style={{ color: "white", background: "crimson", border: "none", padding: "8px 12px", marginTop: "10px", cursor: "pointer" }}>
            Delete Blog
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
