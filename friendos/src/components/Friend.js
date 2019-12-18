import React from 'react';
import styled from 'styled-components';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Friend = ({friend}) => {

    const deleteFriend = e => {
        e.preventDefault();
        axiosWithAuth()
            .delete(`friends/${friend.id}`)
    }

    return (    
        <FriendCard>
            <h1>{friend.name}</h1>
            <p>Age: {friend.age}</p>
            <p>email: {friend.email}</p>
            <button onClick = {deleteFriend} >Delete Friend</button>
        </FriendCard>
    )
}

export default Friend

const FriendCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 300px;
    border: 2px solid grey;
    background: lightblue;
`