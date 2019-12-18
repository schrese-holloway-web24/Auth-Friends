import React from 'react';
//For editing the friends
const Friend = ({friend}) => {
    return (
        <div>
            <h1>{friend.name}</h1>
            <p>Age: {friend.age}</p>
            <p>email: {friend.email}</p>
        </div>
    )
}

export default Friend