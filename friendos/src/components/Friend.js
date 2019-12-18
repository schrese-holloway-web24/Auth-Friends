import React from 'react';
import styled from 'styled-components';

const Friend = ({friend}) => {
    return (
        <FriendContainer>
            <h1>{friend.name}</h1>
            <p>Age: {friend.age}</p>
            <p>email: {friend.email}</p>
        </FriendContainer>
    )
}

export default Friend

const FriendContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    border: 2px solid grey;
    background: lightblue;
    margin: 0 auto;
`