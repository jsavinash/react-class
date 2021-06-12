import React from 'react';

export const Dump = (props) => {
    return <div onClick={props.onNameClick}>Name : {props.name}</div>;
}

export const Dump2 = (props) => {
    return <div>Name : {props.name}</div>;
}

export const ListAndKeys = () => {
    const numbers = [1, 2, 3, 4, 5];
    return <div>Name : {numbers.map((number, idx) => <div key={idx}>{number}</div>)}</div>;
}

export const Demo = (props) => {
    return <div>Name : {props.name}</div>;
}
export const Demo2 = (props) => {
    return <React.Fragment>Name : {props.name}</React.Fragment>;
}
export const Demo3 = (props) => {
    return <>Name : {props.name}</>;
}


