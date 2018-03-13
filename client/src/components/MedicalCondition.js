import React, { Component } from 'react';
import axios from 'axios'

class MedicalCondition extends Component {
    state = {
        name: '',
        description: '',
        symptoms: '',
        dateStarted: '',
        profilepic: ''

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
            description: this.state.description,
            symptoms: this.state.symptoms,
            dateStarted: this.state.profilepic
        }

        axios.post(`/api/users`, payload).then((res) => {
            console.log(res.data)
       
        this.setState({ redirectToUserProfilePage: true, newUserId: res.data._id })
    })
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default MedicalCondition;