import React, {useState, useEffect} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import styled from 'styled-components';

//components
import Friend from './Friend';
import NewFriendForm from './NewFriendForm';

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

//setFriendos is what is used to make things actually respond without having to refresh the page
    return (
        <FriendsListContainer>
            <FormContainer >
                <NewFriendForm setFriendos = {setFriendos} />
            </FormContainer>
            
            {friendos.map(friend => (
                <Something key = {friend.id}>
                    <Friend friend = {friend} setFriendos = {setFriendos} />
                </Something>
            ))}
        </FriendsListContainer>
    )
}

export default FriendsList;

const FriendsListContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 5%;
`

const Something = styled.div`
    width: 350px;
    height: 350px;
`

const FormContainer = styled.div`
    width: 90%;
    height: 70px;
`