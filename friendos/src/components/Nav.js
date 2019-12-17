import React from 'react';
import styled from 'styled-components';

const Nav = () => {

    return (
        <NavContain>
            <div>
                <TitleH>All Your Friends Are Here!!!</TitleH>
            </div>
            <Clickers>
                <Text>Login</Text>
                <Text>Friends</Text>
            </Clickers>
        </NavContain>
    )
}

export default Nav;

const NavContain = styled.nav`
    display: flex;
    justify-content: space-around;
`

const Clickers = styled.div`
    display: flex;
    
`

const Text = styled.h2`
    font-size: 2rem;
    margin: auto 5%;
`

const TitleH = styled.h1`
    font-size: 2rem;
`