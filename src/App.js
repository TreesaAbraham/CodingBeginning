import './index.css'
import Navbar from './navbar';
import Home from './home';


function App() {
  const title = 'Welcome to the new blog';
  const likes = 50;
  const link = "http://www.google.com";
  //numbers and strings are allowed, persons and objects aren't
  //create a variable and assign it to a string, and refer to it later on
  return (
    <div className="App">
      <Navbar />
      <div className="content">
         
        <Home />
      </div>

    </div>
  );
}
//this is called jsx, create style templates, babble will convert this to html
//I will delete the template and create my own
export default App;

//Notes for JSON server
// /blogs/{id} - GET - get a single blog
// /blogs - POST - add a new blog
// /blogs/{id} - DELETE - delete a blog