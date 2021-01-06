import React from 'react';
import styled from 'styled-components';

const Rectangle = styled.div`
background-color: ${props => (props.color ? 'green' : 'red')};
opacity: 0.5;
width: 50vw;
height: 50vh;
`;

const Container = styled.div`
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`;

const Text = styled.div`
position: absolute;
`;

const Hello = (props) => {
    return (
        <Container>
            <Text>
                <h2>Hello</h2>
                <h2>Hello Hello</h2>
                <h2>Hello Hello Hello </h2>
                <h2>Hello Hello Hello Hello</h2>
            </Text>
            <Rectangle color={props.color}></Rectangle>
        </Container>
    );
}

export default Hello;