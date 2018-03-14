import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Signup from './Signup'
import styled from 'styled-components'
import axios from 'axios'

 const state = {
    users: []
}


const SignupWrapper = styled.div`
color: black;
background-image: url('https://dingo.care2.com/pictures/greenliving/1415/1414934.large.jpg');
background-size: cover;
`



axios.get(`/api/users`).then((res) => {
    console.log(res.data)
    this.setState({users:res.data})
})



class HomeView extends Component {


    render() {
        return (
            <SignupWrapper >
                <div>


                    <h1>ofdjasoid

                    </h1>
               

                <h1>Hello World from HomeView </h1>
                <Signup />

                </div>
            </SignupWrapper>
        );
    }
}

export default HomeView;