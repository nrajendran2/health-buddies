import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Signup from './Signup'
import styled from 'styled-components'
import axios from 'axios'




const SignupWrapper = styled.div`
color: black;
background-image: url('http://www.env-health.org/IMG/siteon0.jpg?1340900275');
background-size: cover;
height: 300px;

`
const UsersContainer = styled.div`
color:green;
display:flex;
flex-direction: column;
margin: 10px 10px;
padding: 20px 20px;
border:solid;
`




class HomeView extends Component {

    state = {
        users: []
    }

    componentDidMount() {
        this.getAllUsers()
    }


    getAllUsers = () => {
        axios.get(`/api/users`).then((res) => {
            console.log(res.data)
            this.setState({ users: res.data })
        })
    }



    remove = async (userId) => {

        const res = await axios.delete(`/api/users/${userId}`)
        this.getAllUsers()
        //await this.setState({ users: res.data })

    }

    render() {
        return (
            <div>
                <SignupWrapper >
                    <div>



                   

                        <h1>HealthBuddies </h1>


                        <Signup />

                    </div>
                </SignupWrapper>
                <UsersContainer>

                    {
                        this.state.users.map((user, i) => {
                            return (
                                <div key={i}>

                                    <li><Link to={`/healthbuddies/${user._id}`}> {user.name}</Link></li>

                                    <button onClick={() => this.remove(user._id)}> Delete </button>

                                </div>
                            )

                        })

                    }


                </UsersContainer>

            </div>
        );
    }
}

export default HomeView;