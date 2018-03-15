import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Signup from './Signup'
import styled from 'styled-components'
import axios from 'axios'




const SignupWrapper = styled.div`
color: black;
background-image: url('http://www.env-health.org/IMG/siteon0.jpg?1340900275');
background-size: cover;
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
                <SignupWrapper >
                    <div>


                        <h1>ofdjasoid
    
                    </h1>


                        <h1>Hello World from HomeView </h1>


                        <Signup />


                        {
                            this.state.users.map((user, i) => {
                                return (
                                    <div key={i}>

                                        <Link to = {`/healthbuddies/${user._id}`}> {user.name}</Link>

                                        <button onClick={() => this.remove(user._id)}> Delete </button>
                                        
                                    </div>
                                )

                            })

                        }



                    </div>
                </SignupWrapper>

            );
        }
    }

    export default HomeView;