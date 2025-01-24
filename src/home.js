const  Home = () => {
    const handleClick = (e) => { 
        console.log('hello, book nerds', e);
    }
    const handleClickAgain = (name)  => { 
        console.log('hello ' + name);
    }
    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleClick}> Click Me</button>
            <button onClick={() =>  handleClickAgain('mario') }> Click Me again</button>
        </div>
     );
}
 
export default Home;