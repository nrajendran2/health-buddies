import React, {Component} from 'react';
import axios from 'axios'
import styled from 'styled-components'

const FormWrapper = styled.div`
font-size: 10px;
width: 50vw;`

const Form = styled.div `
background: black;
font-family: 'Permanent Marker', cursive;
font-family: 'Sorts Mill Goudy', serif;
text-align:center;
align-content:center;
width: 10vw;
margin-left: 300px;
font-size: 10px;
height: 10vh;
max-height: 50px;
opacity: 0.5;
text-align: center;

`

const Input = styled.input`
background-color:white;
width: 20vw;
height: 5vh;
display:flex;
justify-content: space-between;
text-align: center;

`






const Header = styled.div `
background-color: white;
font-family: 'Permanent Marker', cursive;
font-family: 'Sorts Mill Goudy', serif;
text-align: center;
width: 30vw;
margin-left: 250px;
font-size: 10px;
opacity: 0.5;
font-family: 'Lobster', cursive;



h1{
    font-size: 30px;
}

`
const Button = styled.button`
margin-left: 120px;
margin-top: 30px;
font-family: 'Lobster', cursive;`


class MedicalCondition extends Component {

    state = {
        name: '',
        description: '',
        symptoms: '',
        dateStarted: ''
    }

    handleChange = (event) => {
        const newState = {
            ...this.state
        }
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

        axios
            .post(`/api/users/${this.props.userID.userid}/medicalcondition`, payload)
            .then((res) => {
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
                <div>

                    <FormWrapper>
                        <Form onSubmit={this.saveNewMedicalCondition}>
                            <div class="row">
                                <form class="col s12">
                                    <div class="row">
                                        <div classname="input-field col s6">
                                            <Input
                                                className="inputs"
                                                name="name"
                                                onChange={this.handleChange}
                                                type="text"
                                                placeholder="Name of Medical Condition"
                                                id="inputline"
                                                value={this.state.name}
                                                required/>
                                            
                                        </div>

                                    </div>

                                    <div className="input-field col s7">
                                        <Input
                                            className="input"
                                            placeholder="description"
                                            name="description"
                                            type="text"
                                            id="inputline"
                                            onChange={this.handleChange}
                                            value={this.state.descriptiont}/>

                                    </div>

                                    <div class="row">
                                        <div className="input-field col s12">
                                            <Input
                                                className="input"
                                                placeholder="symptoms"
                                                id="inputline"
                                                name="symptoms"
                                                onChange={this.handleChange}
                                                value={this.state.symptoms}/>

                                        </div>
                                    </div>
                                    <div class="row">
                                        <div className="input-field col s12">
                                            <Input
                                                className="input"
                                                placeholder="dateStarted"
                                                id="inputline"
                                                name="dateStarted"
                                                onChange={this.handleChange}
                                                value={this.state.dateStarted}/>

                                        </div>
                                    </div>

                                </form>
                            </div>
                            <Button>
                            <button>Submit</button>
                            </Button>
                        </Form>

                    </FormWrapper>

                </div>

            </div>

        );
    }
}

export default MedicalCondition;

{/* <form onSubmit={this.saveNewMedicalCondition}>
<div>
    <ul>
        <Form>

            <li>
                <label htmlFor="name">Name of Condition</label>
                <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}/></li>

            <li>
                <label htmlFor="description">Description</label>
                <input
                    type="text"
                    name="description"
                    value={this.state.description}
                    onChange={this.handleChange}/></li>

            <li>
                <label htmlFor="symptoms">Symptoms
                </label>
                <input
                    type="text"
                    name="symptoms"
                    value={this.state.symptoms}
                    onChange={this.handleChange}/></li>

            <li>
                <label htmlFor="dateStarted">
                    Date Started</label>
                <input
                    type="text"
                    name="dateStarted"
                    value={this.state.dateStarted}
                    onChange={this.handleChange}/>
            </li>

            <button type="submit">Create Medical Condition</button>
        </Form>
    </ul>
</div>

</form> */
}