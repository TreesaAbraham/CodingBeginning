const  Create = () => {
    return (
        <div>
            <h2>Create a new blog</h2>
            <form>
                <label>Blog title:</label>
                <input 
                type="text" 
                required 
                /> 
                <label>Blog body:</label>
                <textarea>
                   required

                </textarea>
                <label>Author:</label>
                <select>
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                <button>Add Blog</button>
            </form>
        </div>
    );
}
 
export default Create;