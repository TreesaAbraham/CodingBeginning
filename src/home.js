import {useState, useEffect } from 'react';
import BlogList from './BlogList';
const  Home = () => {
    const [blogs, setBlogs] = useState(null);

    const [name, setName] = useState('katniss');
    const [isPending, setISPending] =useState(true);
    //
   // let name = 'katniss';
   //props are way to pass content from parent to child components
   const [age, setAge] = useState(16);
    const handleClickAgain = ()  => { 
        setName('peeta');
        setAge(17);
    }
    
    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
         })
         .then(data => {
            setBlogs(data);
            setISPending(false);
        });
        }, 1000);
    }, []);
    return ( 
        <div className="home">
           {blogs && <BlogList blogs={blogs} title = "All Blogs"/>}
           {isPending && <div> Loading...</div>}
            
            <h2>Home Page</h2>
        
            <p>{name} is {age} years old. </p>
    
            <button onClick={() =>  handleClickAgain('mario') }> Click Me again</button>

        <button onClick={() =>  setName('Katniss') }> change name</button>

        
        <p>{name}</p>
        </div>
     );
}
 
export default Home;