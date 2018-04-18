import React, {Component} from 'react';
import axios from 'axios'
import styled from 'styled-components'
import MedicalCondition from './MedicalCondition';
import EditUserPage from './EditUserPage';
import HomeView from './HomeView';

const ProfileEssientals = styled.div`
 display: block;
width: 20vw;
margin:     20px auto;
a{
    margin: auto;
}
.name{
    justify-content: center;
    margin:0 auto;
    }

`

const BodyStyle = styled.div `
 background-image: url('http://seschoolofmovement.com/wp-content/uploads/2015/10/yogafeat-1.jpg'); 
/* background-size: cover; */
background-repeat: no-repeat;




`

const ProfileImage = styled.img `
display:flex;
height: 200px;
max-width: 200px;

display: flex;
border-radius: 50%;
align-items: center;
background-color: white;

`
const FlexContainers = styled.div `
background-size: cover;
display:flex;
flex-direction: column;
/* border: solid black; */
font-family: 'Times New Roman', Times, serif;
/* background-image: url('https://s-media-cache-ak0.pinimg.com/originals/a2/cb/25/a2cb254bc08b248a38eacd116041a45b.jpg'); */
color: black;
height: 350px;
display:flex;
flex-direction: row;


`
const Vitals = styled.div `
display: flex;
font-size: 30px;
flex-direction: column;
flex: flex-end;
align-content: center;
margin:  70px;
text-align:center;
`

const MedicalConditonContainer = styled.div `
display: flex;
flex-direction: column;
color: black;
border: solid;
justify-content: center;
font-family: Arial;
font-size: 18px;
max-width: 400px;
max-height: 400px;
padding: 100px 100px;
background: -webkit-linear-gradient(top, maroon, #d6c5dd);
  background: -moz-linear-gradient(top, maroon, #d6c5dd);
  background: -o-linear-gradient(top, maroon, #d6c5dd);
  background: linear-gradient(top, maroon, #d6c5dd);
  font-family: 'Permanent Marker', cursive;
font-family: 'Sorts Mill Goudy', serif;
background-color: black;
text-align:center;

  /* background: -webkit-linear-gradient(top, purple, #a856c9);
  background: -moz-linear-gradient(top, purple, #a856c9);
  background: -o-linear-gradient(top, purple #a856c9);
  background: linear-gradient(top, purple, #a856c9); */

`

const MedicalConditionBox = styled.div `
display: flex;
flex-direction: row;
justify-content: center;
align-content: center;
margin-top: 25px;


`
const AilmentBox = styled.div `
display:flex;
flex: wrap;
flex-direction: column;
justify-content: center;
background: -webkit-linear-gradient(top, darkgreen, #d6c5dd);
background: -moz-linear-gradient(top, darkgreen, #d6c5dd);
background: -o-linear-gradient(top, darkgreen, #d6c5dd);
background: linear-gradient(top, darkgreen, #d6c5dd);
font-family: 'Permanent Marker', cursive;
font-family: 'Sorts Mill Goudy', serif;
font-size: 18px;
max-width: 400px;
max-height: 400px;
padding: 100px 100px;
border: solid;
text-align: center;


img { 
    height: 200px;
    width: 200px;

}
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

        axios
            .get(`/api/users/${userID}`)
            .then((res) => {
                console.log(res.data)
                this.setState({userinfo: res.data})

            })

    }

    render() {
        return (
            <BodyStyle>

                <FlexContainers>

                    <ProfileEssientals>
                        <ProfileImage src={this.state.userinfo.profilepic}/>
                        <h1>{this.state.userinfo.username}</h1>
                    </ProfileEssientals>

                    <MedicalCondition userID={this.props.match.params}/>

                    <Vitals>


                    </Vitals>

                </FlexContainers>

                {this
                    .state
                    .userinfo
                    .medicalCondition
                    .map((condition, i) => {
                        return (
                            <div key={i}>

                                <MedicalConditionBox>
                                    < MedicalConditonContainer>
                                        <h2>{condition.name}</h2>

                                        <li> Description: {condition.description}</li>
                                        <br/>

                                        <li>Symptoms:{condition.symptoms}</li>
                                            <br/>
                                        <li>{condition.dateStarted}</li>
                                        <br/>
                                        <br/>
                                    </MedicalConditonContainer>

                                    {condition
                                        .treatment
                                        .map((ailment, i) => {
                                            return (
                                                <div key={i}>

                                                    <AilmentBox>
                                                        <h2>{ailment.name}</h2>

                                                        <img src={ailment.image}/>
                                                        <br/>

                                                        
                                                        <li>Symptoms: {ailment.symptoms}</li>
                                                            <li>Doctors Name: {ailment.doctor}</li>
                                                        <li>Medications: {ailment.medications}</li>
                                                        <li>Comments:{ailment.otherComments}</li>

                                                    </AilmentBox>

                                                </div>
                                            )
                                        })}

                                </MedicalConditionBox>

                            </div>

                        )

                    })
}
                <EditUserPage userId={this.props.match.params}/>

            </BodyStyle>
        );
    }
}

export default UserProfilePage;
