import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Signup from './Signup'
import styled from 'styled-components'
import axios from 'axios'





const ullPage = styled.div`
color:black;`

const SignupWrapper = styled.div`
color: black;
background-image: url('https://s-media-cache-ak0.pinimg.com/originals/a2/cb/25/a2cb254bc08b248a38eacd116041a45b.jpg');
background-size: fit;
height: 800px;
font-family: 'Lobster', cursive;
`
const UsersContainer = styled.div`
color:green;
display:flex;
justify-content: center;
margin: 10px 10px;
padding: 20px 20px;
border:solid;
background-color: white;
max-width: 300px;
`
const ContainerofUsers = styled.div`
display:flex;
justify-content: center;

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
             
                <SignupWrapper>
                    <div>



                   

                        <h1>HealthBuddies </h1>


                        <Signup />

                    </div>
               

<ContainerofUsers>
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
                </ContainerofUsers>
                </SignupWrapper>
            </div>
        );
    }
}

export default HomeView;