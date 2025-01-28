import {useState} from 'react';
const  Home = () => {
   // let name = 'katniss';
   const [name, setName] = useState('katniss');
   const [age, setAge] = useState(16);
    const handleClickAgain = ()  => { 
        setName('peeta');
        setAge(17);
    }
    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <p>{name} is {age} years old. </p>
    
            <button onClick={() =>  handleClickAgain('mario') }> Click Me again</button>
        </div>
     );
}
 
export default Home;