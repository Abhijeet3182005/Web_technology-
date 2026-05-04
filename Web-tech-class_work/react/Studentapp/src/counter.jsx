function Counter(){
    const [Count, setCount] = React.useState(0);
    

 return (
    <>
    <h1>Count : {Count}</h1>
    <button onClick = {() => setCount(Count + 1)}>Increment</button>
    </>
 )
}

export default Counter;