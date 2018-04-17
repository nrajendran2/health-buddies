import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'


const Form = styled.div`
    background: white;
    font-family: 'Permanent Marker', cursive;
font-family: 'Sorts Mill Goudy', serif;
align-content: center;

    `

const Header = styled.div`
background-color: black;
font-family: 'Permanent Marker', cursive;
font-family: 'Sorts Mill Goudy', serif;


h1 {
    font-size: 60px;
}

`

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
                <Header>
                    <h1>Add New Medical Condition</h1>
                </Header>
                <form onSubmit={this.saveNewMedicalCondition}>
                    <div>
                        <ul>
                            <Form>

                                <li> <label htmlFor="name">Name of Condition</label>
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
                            </Form>
                        </ul>
                    </div>

                    <button type="submit">Create Medical Condition</button>
                </form>
            </div>
        );
    }
}

export default MedicalCondition;