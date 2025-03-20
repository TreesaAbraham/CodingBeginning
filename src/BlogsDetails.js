import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import supabase from "./supabaseClient";

const BlogDetails = () => {
  const { id } = useParams(); // Get the blog ID from URL
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .eq("id", id) // Fetch only the blog with the matching ID
        .single(); // Ensure it returns a single blog

      if (error) {
        setError("Blog not found");
      } else {
        setBlog(data);
      }
      setIsPending(false);
    };

    fetchBlog();
  }, [id]); // Depend on id to refetch when it changes

  return (
    <div>
      {isPending && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {blog && (
        <div>
          <h2>{blog.title} by {blog.author}</h2>
          <p>{blog.body}</p>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
