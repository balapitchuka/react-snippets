import React, {useState} from 'react';


function HookCounter() {

    const [count, setCount] = useState(0);


    return (
        <div>

            <p>Increment And Decrement By 1</p>
            <p>Count : {count}</p>
            <button onClick={() => setCount(count+1)}>Increment</button>
            <button onClick={() => setCount(count-1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>


        </div>
    );
}

export default HookCounter;