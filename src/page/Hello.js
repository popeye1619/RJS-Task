import React, { useState } from 'react';
import styled from 'styled-components';
import Rectangle from '../component/Rectangle';

const Button = styled.button`
position: fixed;
top: 80%;
left: 50%;
transform: translate(-50%, -50%);
cursor: pointer;
background-color: red;
color: white;
width: 5rem;
height: 2rem;
outline: none;
border: none;
`;

const Text = styled.div`
position: fixed;
top: 85%;
left: 50%;
transform: translate(-50%, -50%);
`;

const Hello = () => {
    const [text, setText] = useState();
    const [color, setColor] = useState(false);
    const toggle = () => {
        setText("Button Clicked");
        setColor(true);
    }

    return (
        <>
            <Rectangle color={color} ></Rectangle>
            <Button onClick={toggle}>Press</Button>
            <Text>{text}</Text>
        </>
    );
}

export default Hello;