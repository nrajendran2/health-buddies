import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'

const ProfileImage = styled.img`
height: 300px;
width: 300px;
display: flex;
border-radius: 50%;

`




class UserProfilePage extends Component {
state = {
    userinfo: {}
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
              {this.state.userinfo.username}
               <ProfileImage src = {this.state.userinfo.profilepic}/>
                <h1>PaperBoys United </h1>

                
            </div>
        );
    }
}

export default UserProfilePage;