import { useState } from "react";
import { useHistory } from "react-router-dom";
import supabase from "./supabaseClient";
 // Ensure correct import

const Create = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("");
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setIsPending(true); // Indicate loading state

        let { error } = await supabase.from("blogs").insert([blog]);

        if (error) {
            console.error("Error inserting data:", error);
        } else {
            console.log("New blog added");
            setIsPending(false);
            history.push("/");  // Correct navigation for React Router v5
        }
    };  

    return (
        <div className="create">
            <h2>Create a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>

                <label>Author:</label>
                <input
                    type="text"
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />

                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding...</button>}
            </form>
        </div>
    );
};

export default Create;
