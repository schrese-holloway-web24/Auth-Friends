import React, {useState, useEffect} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

//component
import Friend from './Friend';

const FriendsList = () => {
    const [friendos, setFriendos] = useState([]);

    useEffect(() => {
        console.log('what?')
        axiosWithAuth()
            .get('/friends')
            .then(res => {
                console.log('res from FriendsList axios', res)
                setFriendos(res.data)
            })
            .catch(err => {
                console.log('err from FriendsList axios', err)
            })
    }, [])


    return (
        <div>
            <h1>Will Login redirect here? </h1>
            {friendos.map(friend => (
                <div key = {friend.id}>
                    <Friend friend = {friend} />
                </div>
            ))}
        </div>
    )
}

export default FriendsList