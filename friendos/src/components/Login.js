import React, {useState} from 'react';

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
    const [errorMsg, setErrorMsg] = useState('');

    //controls the changes in the form inputs
    const changeHandler = e => {
        e.preventDefault();
        setUser({
                ...user, 
                [e.target.name]: e.target.value  
                       
        })
        // console.log('success!')
        // console.log(props.creds);
    }

    //when submit is clicked, it is controlled, sets fetching to true, makes axios call, on success user is directed to the /friends page
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
                console.log('there was a problem logging in', err)
                setErrorMsg('Try Re-entering Your Information')
            })
    }

    return (
        <form onSubmit = {SubmitHandler}>
            <p>{errorMsg}</p>
            <input type = 'text' placeholder = 'username' onChange = {changeHandler} value = {user.username} name = 'username' required />
            <input type = 'text' placeholder = 'password' onChange = {changeHandler} value = {user.password} name = 'password' required />
            <button>Submit</button>
            {fetching && 'Working...'}
        </form>
    )
}

export default Login;