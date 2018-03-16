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

`
const FlexContainers = styled.div`
background-image: url('https://www.dreamstime.com/stock-images-happy-group-doctors-holding-placard-image16186114');
background-size: cover;
display:flex;
flex-direction: column;
border: solid;
background-color: purple;
font-family: 'Times New Roman', Times, serif;
`

const MedicalConditonContainer = styled.div`
display: flex;
flex-direction: row;
background-color: black;
color: white;`

const MedicalConditionBox = styled.div`
display: flex;
flex-direction: column;
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


                </FlexContainers>
               

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

            </div>
        );
    }
}

export default UserProfilePage;

