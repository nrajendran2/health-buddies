import React, { Component } from 'react';
import styled from 'styled-components'
import axios from 'axios'

const FlexContainer = styled.div`
margin-top: 30px;
margin-bottom: 30px;
display: flex;
flex-direction: column;
align-items: center;
background-color: maroon;
color: white;
`
const EditUser= styled.div`
margin-top: 30px;
color:white;
`



class EditUserPage extends Component {

    state = {
        user: {
            username: '',
            name: '',
            age: '',
            profilepic: ''
        }

    }


    handleChange = (event) => {
        const editState = { ...this.state.user }
        editState[event.target.name] = event.target.value

        this.setState({user: editState})
    }


    submitNewUserName = (event) => {
        event.preventDefault()
        const payload = {
            username: this.state.user.username,
            name: this.state.user.name,
            age: this.state.user.age,
            profilepic: this.state.user.profilepic
        }

        axios.patch(`/api/users/${this.props.userId.userid}`, payload).then((res) => {

            console.log(res.data)
            this.setState({ user: res.data})
            window.location.reload()

        })
    }

    render() {

        //handlechange and submit 


        return (
            <EditUser>
                <h1>Edit User </h1>
                <form onSubmit={this.submitNewUserName}>
                    <div>

                        <FlexContainer>
                            <ul>



                                <li><label htmlFor="username">User Name</label>
                                    <input type="text" name="username" onChange={this.handleChange} value={this.state.username} />
                                </li>

                                <li><label htmlFor="name">Name</label>
                                    <input type="text" name="name" onChange={this.handleChange} value={this.state.name} />
                                </li>

                                <li> <label htmlFor="age">Age </label>
                                    <input type="text" name="age" onChange={this.handleChange} value={this.state.age} />
                                </li>

                                <li><label htmlFor="profielpic"> Profile Pic </label>
                                    <input type="text" name="profilepic" onChange={this.handleChange} value={this.profilepic} />
                                </li>
                            </ul>
                        </FlexContainer>
                    </div>


                    <button type="submit">Update User</button>
                </form>

            </EditUser>
        );
    }
}

export default EditUserPage;

// form 
// handlechange stuff
