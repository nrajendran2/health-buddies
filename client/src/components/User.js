import React, { Component } from 'react';

class User extends Component {

    state = {
        users: []
    }

    componentDidMount() {
        this.getAllUsers()
    }


    getAllUsers = () => {
        axios.get(`/api/users`).then((res) => {
            console.log(res.data)
            this.setState({ users: res.data })
        })
    }
    render() {
        return (
            <div>

            </div>
        );
    }
}

export default User;