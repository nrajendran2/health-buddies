import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import MedicalCondition from './MedicalCondition';
import EditUserPage from './EditUserPage';

const ProfileImage = styled.img`
height: 300px;
width: 300px;
display: flex;
border-radius: 50%;
align-items: center;
background-color: white;

`
const FlexContainers = styled.div`

background-size: cover;
display:flex;
flex-direction: column;
border: solid black;
/* background: -webkit-linear-gradient(top, red, #d6c5dd);
  background: -moz-linear-gradient(top, red, #d6c5dd);
  background: -o-linear-gradient(top, red, #d6c5dd);
  background: linear-gradient(top, red, #d6c5dd); */
font-family: 'Times New Roman', Times, serif;
background-color: white;

`

const MedicalConditonContainer = styled.div`
display: flex;
flex-direction: column;
color: black;
border: solid;
justify-content: center;
font-family: Arial;
font-size: 18px;
max-width: 200px;
padding: 100px 100px;
background: -webkit-linear-gradient(top, maroon, #d6c5dd);
  background: -moz-linear-gradient(top, maroon, #d6c5dd);
  background: -o-linear-gradient(top, maroon, #d6c5dd);
  background: linear-gradient(top, maroon, #d6c5dd);
  font-family: 'Permanent Marker', cursive;
font-family: 'Sorts Mill Goudy', serif;

  /* background: -webkit-linear-gradient(top, purple, #a856c9);
  background: -moz-linear-gradient(top, purple, #a856c9);
  background: -o-linear-gradient(top, purple #a856c9);
  background: linear-gradient(top, purple, #a856c9); */

`



const MedicalConditionBox = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-content: center;

`
const AilmentBox = styled.div`
display:flex;
flex: wrap;
flex-direction: column;
justify-content: center;
background: -webkit-linear-gradient(top, green, #5df711);
background: -moz-linear-gradient(top, green, #5df711);
background: -o-linear-gradient(top, green, #5df711);
background: linear-gradient(top, green, #5df711);
font-family: 'Permanent Marker', cursive;
font-family: 'Sorts Mill Goudy', serif;
font-size: 18px;
max-width: 200px;
padding: 100px 100px;
border: solid;
`





class UserProfilePage extends Component {
    state = {
        userinfo: {
            medicalCondition: []

        }
    }

    componentDidMount() {
        this.getuserinfo()
    }




    getuserinfo = () => {
        const userID = this.props.match.params.userid
        console.log(userID)

        axios.get(`/api/users/${userID}`)
            .then((res) => {
                console.log(res.data)
                this.setState({ userinfo: res.data })

            })

    }







    render() {
        return (
            <div>
                <FlexContainers>
                    <h1>{this.state.userinfo.username}'s Health Log</h1>
                    <ProfileImage src={this.state.userinfo.profilepic} />





                    <MedicalCondition userID={this.props.match.params} />

                    {
                        this.state.userinfo.medicalCondition.map((condition, i) => {
                            return (
                                <div key={i}>
                                    <MedicalConditionBox>
                                        < MedicalConditonContainer>
                                            <h1>{condition.name}</h1>

                                            <li>{condition.description}</li>
                                            <li> {condition.symptoms}</li>
                                            <li>{condition.dateStarted}</li>
                                            <br/>
                                            <br/>
                                            </MedicalConditonContainer>


                                            {condition.treatment.map((ailment, i) => {
                                                return (
                                                    <div key={i}>

                                                    <AilmentBox>
                                                       <h1> {ailment.name}</h1>


                                                       <li> {ailment.image}</li>
                                                       <li> {ailment.symptoms}</li>
                                                       <li> {ailment.doctor}</li>
                                                       <li> {ailment.medications}</li>

                                                       </AilmentBox>


                                                    </div>
                                                )
                                            })}

                                      
                                    </MedicalConditionBox>




                                </div>


                            )


                        })


                    }
                    <EditUserPage userId={this.props.match.params} />
                </FlexContainers>

            </div>
        );
    }
}

export default UserProfilePage;

