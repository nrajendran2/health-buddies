import React, { Component } from 'react';
import axios from 'axios'

class MedicalCondition extends Component {
    state = {
        name: '',
        description: '',
        symptoms: '',
        dateStarted: '',
    

    }

    handleChange = (event) => {
        const newState = { ...this.state }
        newState[event.target.name] = event.target.value
        this.setState(newState)
    }
    saveNewMedicalCondition = (event) => {

        event.preventDefault()
        const payload = {
            name: this.state.name,
            description: this.state.description,
            symptoms: this.state.symptoms,
            dateStarted: this.state.dateStarted
        }

        console.log(payload)


        axios.post(`/api/users/${this.props.userID.userid}/medicalcondition`, payload).then((res) => {
            console.log("data", res.data)
            //this.setState({ redirectToUserProfilePage: true, newUserId: res.data._id })
        })
    }

    render() {
        return (
            <div>
                <h1>Create A New User</h1>
                <form onSubmit={this.saveNewMedicalCondition}>
                    <div>
                        <ul>
                            <li><label htmlFor="name">Name of Condition</label>
                                <input type="text" name="name"
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                /></li>

                            <li><label htmlFor="description">Description</label>
                                <input type="text" name="description"
                                    value={this.state.description}
                                    onChange={this.handleChange}
                                /></li>

                            <li> <label htmlFor="symptoms">Symptoms </label>
                                <input type="text" name="symptoms"
                                    value={this.state.symptoms}
                                    onChange={this.handleChange}
                                /></li>

                            <li><label htmlFor="dateStarted"> Date Started</label>
                                <input type="text" name="dateStarted"
                                    value={this.state.dateStarted}
                                    onChange={this.handleChange}
                                /> </li>
                        </ul>
                    </div>
                    
          <button type="submit">Create Medical Condition</button>
                </form>
            </div>
        );
    }
}

export default MedicalCondition;