import {Link} from 'react-router-dom';
//this is a link component, it will allow us to navigate to different pages
//we will use this in place of the anchor tag
//this will prevent the page from refreshing and reloading


const Navbar = () => {
    return ( 
       <nav className="navbar">
        <h1>The Book Blog</h1>
        <div className="links">
            <Link to = "/">Home</Link>
            <Link to = "/create">New Blog</Link>
        </div>
       </nav>
     );
}
 
export default Navbar;  