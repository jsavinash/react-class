import React, { useState } from 'react';

export const Parent = (props) => {
    const [name, setName] = useState("Avinash");

    return <div>
        <button onClick={() => setName("Mohok")}>Change Name</button>
        <Child1 name={name} /> <Child2 name={name} /></div>;
}

export const Child1 = (props) => {
    return <div>{props.name}</div>;
}

export const Child2 = (props) => {
    return <div>{props.name}</div>;

}