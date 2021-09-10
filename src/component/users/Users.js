import React from 'react';
import axios from 'axios';

export default class Users extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            username: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitUsers =this.submitUsers.bind(this);
    }

    handleChange(event) {
        const { name , value } = event.target
        this.setState({
            [name]: value
        })
    }

    submitUsers(event) {
        event.preventDefault();
        const user = {
            username: this.state.username,
        }

        console.log(user);

        axios.post('http://localhost:5000/users/add' , user)
        .then(Response => console.log(Response.data))


        this.setState({username:''})
    }

    render() {
        return (
        <form className = "exercise-from">
            <label>Your Name: </label><input type = "text" name = 'username' placeholder = "User Name" value = {this.state.username} onChange = {this.handleChange} /> <br/>
            <button className = "submitBtn" onClick = {this.submitUsers} >Submit</button>
        </form>)
    }


}
