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
/* background: -webkit-linear-gradient(top, purple, #a856c9);
  background: -moz-linear-gradient(top, purple, #a856c9);
  background: -o-linear-gradient(top, purple #a856c9);
  background: linear-gradient(top, purple, #a856c9); */
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

  /* background: -webkit-linear-gradient(top, purple, #a856c9);
  background: -moz-linear-gradient(top, purple, #a856c9);
  background: -o-linear-gradient(top, purple #a856c9);
  background: linear-gradient(top, purple, #a856c9); */

`



const MedicalConditionBox = styled.div`
display: block;
flex-direction: row;
justify-content: space-between;
align-content: center;

`


class UserProfilePage extends Component {
state = {
    userinfo: {
        medicalCondition: []
    }
}

componentDidMount(){
    this.getuserinfo()
}




getuserinfo = () => {
    const userID = this.props.match.params.userid
    console.log(userID)

    axios.get(`/api/users/${userID}`)
   .then((res)=> {
         console.log(res.data) 
         this.setState({userinfo:res.data})

   })

}







    render() {
        return (
            <div>
            <FlexContainers>
              <h1>{this.state.userinfo.username}'s Health Log</h1>
               <ProfileImage src = {this.state.userinfo.profilepic}/>


         
               

                <MedicalCondition userID = {this.props.match.params}/>

        {
            this.state.userinfo.medicalCondition.map((condition, i) => {
                return(
                    <div key = {i}>
                    <MedicalConditionBox>
                   < MedicalConditonContainer>

                   <li> {condition.name}</li>
                    <li>{condition.description}</li>
                    <li> {condition.symptoms}</li>
                    <li>{condition.dateStarted}</li>

                  </MedicalConditonContainer>
                  </MedicalConditionBox>
                  
                  

                    
                    </div>

                    
                )
          

            }) 
        
            
        }
        <EditUserPage userId = {this.props.match.params}/>
        </FlexContainers>

            </div>
        );
    }
}

export default UserProfilePage;

