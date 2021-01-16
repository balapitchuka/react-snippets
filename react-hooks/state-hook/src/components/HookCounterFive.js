import React, {useState} from 'react';


function HookCounterFive() {

    const [count, setCount] = useState(0);


    const increment = () => {
        setCount(count => count+1)
        setCount(count => count+1)
        setCount(count => count+1)
        setCount(count => count+1)
        setCount(count => count+1)
        

    }

    
    const decrement = () => {
        setCount(count => count-1)
        setCount(count => count-1)
        setCount(count => count-1)
        setCount(count => count-1)
        setCount(count => count-1)
    }

    
    const reset = () => {
        setCount(0)
    }



    return (
        <div>
            <p>Increment And Decrement By 5</p>
            <p>Count : {count}</p>
           {/*
            <button onClick={() => setCount(count+5)}>Increment</button>
            <button onClick={() => setCount(count-5)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
           */}
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>

        </div>
    );
}

export default HookCounterFive;