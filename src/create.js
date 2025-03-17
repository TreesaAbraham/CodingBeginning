/* this page helps to create a new blog */
import {useState} from 'react';
import {useHistory} from 'react-router-dom';

const  Create = () => {
    const [title, setTitle] = useState(''); 
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};
        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        })
        .then((res) => {
            if (!res.ok) {
                throw Error('Could not add the blog');
            }
            return res.json();
        })
        .then(() => {
            console.log('new blog added');
            setIsPending(false);
            history.push('/');
        })
        .catch((err) => {
            console.error('Error:', err);
        }
        )



}
    return (
        <div className = "create">
            <h2>Create a new blog</h2>
            <form onSubmit = {handleSubmit}>

                <label>Blog title:</label>
                <input 
                type="text" 
                required 
                value = {title}
                onChange={(e) => setTitle(e.target.value)}
                /> 

                <label>Blog body:</label>
                <textarea
                   required
                   value = {body}
                onChange={(e) => setBody(e.target.value)}
                ></textarea>

                <label>Author:</label>
                <input
                     type="text"
                     required
                     value = {author}
                onChange={(e) => setAuthor(e.target.value)}
                >
                </input>

               { !isPending &&  <button>Add Blog</button>}
               { isPending &&  <button>Adding</button>}
                <p>{title}
                {body}
                {author}</p>
            </form>
        </div>
    );
}
 
export default Create;