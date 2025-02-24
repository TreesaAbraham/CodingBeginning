import './index.css'
import Navbar from './navbar';
import Home from './home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './create';



function App() {
  const title = 'Welcome to the new blog';
  const likes = 50;
  const link = "http://www.google.com";
  //numbers and strings are allowed, persons and objects aren't
  //create a variable and assign it to a string, and refer to it later on
  return (
    <Router>
      <div className="App">
      <Navbar />
      <div className="content">
         <Switch>
           <Route exact path="/">
             <Home />
           </Route>
           <Route path="/create">
             <Create />
           </Route>
         </Switch>
      </div>

    </div>
    </Router>
    
  );
}
//this is called jsx, create style templates, babble will convert this to html
//I will delete the template and create my own
export default App;

//Notes for JSON server
// /blogs/{id} - GET - get a single blog
// /blogs - POST - add a new blog
// /blogs/{id} - DELETE - delete a blog