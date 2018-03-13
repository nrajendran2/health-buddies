import React, { Component } from 'react'
import axios from 'axios'
import { Link , Redirect} from 'react-router-dom'



class SignUp extends Component {
    state = {
        name: '',
        username: '',
        age: '',
        profilepic: '',
        redirectToUserProfilePage: false,
        newUserId: ''

    }




    handleChange = (event) => {
        const newState = { ...this.state }
        newState[event.target.name] = event.target.value
        this.setState(newState)
    }

    saveNewUser = (event) => {

        event.preventDefault()
        const payload = {
            name: this.state.name,
            username: this.state.username,
            age: this.state.age,
            profilepic: this.state.profilepic
        }

        axios.post(`/api/users`, payload).then((res) => {
            console.log(res.data)
       
        this.setState({ redirectToUserProfilePage: true, newUserId: res.data._id })
    })
    }

    

    render() {
        if (this.state.redirectToUserProfilePage) {
            return <Redirect to ={`/healthbuddies/${this.state.newUserId}`} />
        }

        return (
            <div>
                <h1>Create A New User</h1>
                <form onSubmit={this.saveNewUser}>
                    <div>
                        <ul>
                            <li><label htmlFor="username">User Name</label>
                                <input type="text" name="username"
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                /></li>

                            <li><label htmlFor="name">Name</label>
                                <input type="text" name="name"
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                /></li>

                            <li> <label htmlFor="age">Age </label>
                                <input type="text" name="age"
                                    value={this.state.age}
                                    onChange={this.handleChange}
                                /></li>

                            <li><label htmlFor="profielpic"> Profile Pic </label>
                                <input type="text" name="profilepic"
                                    value={this.state.profilepic}
                                    onChange={this.handleChange}
                                /> </li>
                        </ul>
                    </div>
                    
          <button type="submit">Create New User</button>
                </form>
            </div>

        )
    }
}

export default SignUp

