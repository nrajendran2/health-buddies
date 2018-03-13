import React, { Component } from 'react';



class UserProfilePage extends Component {
state = {
    userinfo: {}
}

getuserinfo = () => {
    axios.get('/api/users/:userid')
}

axios.get(/)


    render() {
        return (
            <div>

                <h1>PaperBoys United </h1>
                
            </div>
        );
    }
}

export default UserProfilePage;