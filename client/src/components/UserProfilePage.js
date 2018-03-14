import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import MedicalCondition from './MedicalCondition';

const ProfileImage = styled.img`
height: 300px;
width: 300px;
display: flex;
border-radius: 50%;

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
              <h1>{this.state.userinfo.username}</h1>
               <ProfileImage src = {this.state.userinfo.profilepic}/>
                <h1>PaperBoys United </h1>

                <MedicalCondition userID = {this.props.match.params}/>

        {
            this.state.userinfo.medicalCondition.map((condition, i) => {
                return(
                    <div key = {i}>

                   <li> {condition.name}</li>
                    <li>{condition.description}</li>
                    <li> {condition.symptoms}</li>
                    <li>{condition.dateStarted}</li>
                    </div>
                )

            }) 
            
        }

                
            </div>
        );
    }
}

export default UserProfilePage;

