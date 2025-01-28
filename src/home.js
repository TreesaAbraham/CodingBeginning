import {useState} from 'react';
const  Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1},
        {title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2},
        {title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3}
    ]);
    //
   // let name = 'katniss';
   const [name, setName] = useState('katniss');
   const [age, setAge] = useState(16);
    const handleClickAgain = ()  => { 
        setName('peeta');
        setAge(17);
    }
    return ( 
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>

            ))}
            <h2>Home Page</h2>
            <p>{name} is {age} years old. </p>
    
            <button onClick={() =>  handleClickAgain('mario') }> Click Me again</button>

        </div>
     );
}
 
export default Home;