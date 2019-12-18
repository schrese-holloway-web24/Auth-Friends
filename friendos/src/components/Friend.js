import React, {useState} from 'react';
import styled from 'styled-components';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Friend = ({friend, setFriendos}) => {
    const [editing, setEditing] = useState(false);
    const [editFriend, setEditFriend] = useState(friend);

    const deleteFriend = e => {
        e.preventDefault();
        axiosWithAuth()
            .delete(`friends/${friend.id}`)
            .then(res => {
                console.log(res)
                setFriendos(res.data)
            })
            .catch(err => {
                console.log('error in deleteFriend axios', err)
            })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .put(`/friends/${friend.id}`, editFriend)
            .then(res => {
                console.log('res in the handleSubmit in Friend', res)
                setEditFriend({...editFriend, name: '', age: '', email: ''})
                setEditing(false)
                setFriendos(res.data)
            })
            .catch(err => {
                console.log('error in the handleSubmit in Friend', err)
            })
    }

    const changeHandler = e => {
        e.preventDefault();
        setEditFriend({
            ...editFriend, 
            [e.target.name]: e.target.value
        })
    }


    const editToggle = e => {
        e.preventDefault();
        setEditing(v => !v)
    }

    return (    
        <FriendCard>
            <h1>{friend.name}</h1>
            <p>Age: {friend.age}</p>
            <p>email: {friend.email}</p>
            <button onClick = {editToggle}>Edit</button>

            {editing && <form onSubmit = {handleSubmit}>
                <input type = 'text' placeholder = 'name' onChange = {changeHandler} value = {editFriend.name} name = 'name' required />

                <input type = 'text' placeholder = 'age' onChange = {changeHandler} value = {editFriend.age} name = 'age' required />

                <input type = 'text' placeholder = 'email' onChange = {changeHandler} value = {editFriend.email} name = 'email' required />

                <button>Submit</button>
            </form>}
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