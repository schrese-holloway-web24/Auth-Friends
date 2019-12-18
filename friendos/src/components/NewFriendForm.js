import React, {useState, useEffect} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const friend = {
    name: '', 
    age: '',
    email: ''

}

const NewFriendForm = () => {
   
    const [newFriend, setNewFriend] = useState(friend)

    const changeHandler = e => {
        e.preventDefault();
        setNewFriend({
            ...newFriend, 
            [e.target.name]: e.target.value
        })
    }

    const SubmitHandler = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/friends', newFriend)
            .then(res => {
                console.log('res from submitHandler', res)
                setNewFriend({...newFriend, name: '', age: '', email: '' })
            })
            .catch(err => {
                console.log('error in submitHandler', err)
            })
    }

    return (
        <form onSubmit = {SubmitHandler}>
            <input type = 'text' placeholder = 'name' onChange = {changeHandler} value = {newFriend.name} name = 'name' required />
            <input type = 'text' placeholder = 'age' onChange = {changeHandler} value = {newFriend.age} name = 'age' required />
            <input type = 'text' placeholder = 'email' onChange = {changeHandler} value = {newFriend.email} name = 'email' required />
            <button>Submit</button>
        </form>
    )
}

export default NewFriendForm;