import {useState} from 'react';
import BlogList from './BlogList';
const  Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1},
        {title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2},
        {title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3}
    ]);
    //
   // let name = 'katniss';
   //props are way to pass content from parent to child components
   const [name, setName] = useState('katniss');
   const [age, setAge] = useState(16);
    const handleClickAgain = ()  => { 
        setName('peeta');
        setAge(17);
    }
    const handleDelete = (id) => {  
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }
    return ( 
        <div className="home">
            <BlogList blogs={blogs} title = "All Blogs" handleDelete={handleDelete}/>
            <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title = "Tess's blogs"/>
            <h2>Home Page</h2>
            <p>{name} is {age} years old. </p>
    
            <button onClick={() =>  handleClickAgain('mario') }> Click Me again</button>

        </div>
     );
}
 
export default Home;