import React, { useState, useEffect } from 'react';

const StateFullComponent = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log("Component loaded");
        return () => {
            console.log("Component Unmount");
        }
    }, [counter]);

    return <div>Counter Value:- {counter}
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
        <button onClick={() => setCounter(counter - 1)}>Decrement</button>
    </div>;
}
export default StateFullComponent;