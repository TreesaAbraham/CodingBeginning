import useFetch from "./useFetch";
import { useParams, useHistory } from "react-router-dom";

/* this page helps to display the details of a blog */
const BlogsDetails = () => {
const {id} = useParams(); 
const {data: blog, error, isPending} = useFetch('http://localhost:8000/blogs/' + id);
const history = useHistory();

const handleClick = () => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
        fetch(`http://localhost:8000/blogs/${blog.id}`, { method: "DELETE" })
            .then(() => history.push("/"))
            .catch((err) => console.error("Error deleting blog:", err));
    }
}


    return ( 
        <div className="blog-details">
            { isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>Delete</button>
                </article>

            )}
        </div>
     );
}
 
export default BlogsDetails;