import React, {useState, useEffect} from 'react';

//utils
import {axiosWithAuth} from '../utils/axiosWithAuth';

const initialState = {
        username: '', 
        password: '', 
    // isFetching: false
}

const Login = props => {
    // console.log(props)
    const [user, setUser] = useState(initialState);
    const [fetching, setFetching] = useState(false);

    const changeHandler = e => {
        e.preventDefault();
        setUser({
                ...user, 
                [e.target.name]: e.target.value  
                       
        })
        // console.log('success!')
        console.log(props.creds);
    }

    const SubmitHandler = e => {
        e.preventDefault();
        setFetching(true);
        axiosWithAuth()
            .post('/login', user)
            .then(res => {
                console.log(res)
                localStorage.setItem('token', res.data.payload)
                props.history.push('/friends')
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <form onSubmit = {SubmitHandler}>
            <input type = 'text' placeholder = 'username' onChange = {changeHandler} value = {user.username} name = 'username' required />
            <input type = 'text' placeholder = 'password' onChange = {changeHandler} value = {user.password} name = 'password' required />
            <button>Submit</button>
        </form>
    )
}

export default Login;