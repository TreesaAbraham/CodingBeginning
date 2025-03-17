/*in case user goes to a page that doesn't exist, will bring them back to homepage */
import {Link} from 'react-router-dom';
const NotFound = () => {
    return ( 
       < div className="not-found">
        <h1>404</h1>
         <h2>Sorry</h2>
         <p>That page cannot be found</p>

         <Link to="/">
    <button>Back to Home</button>
         </Link>
        </div>
     );
}
 
export default NotFound;