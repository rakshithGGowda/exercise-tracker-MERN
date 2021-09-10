import React from 'react'
import axios from 'axios'

export default class ExerciseEdit extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            description:'',
            duration: 0,
            date: new Date(),
            users: []
        }


        this.handleChange = this.handleChange.bind(this)
        this.submitExercise = this.submitExercise.bind(this)
    }
    
    componentDidMount() {
        axios.get('http://localhost:5000/exercise/'+this.props.match.params.id)
        .then(response => {
            this.setState({
                username: response.data.username,
                description: response.data.description,
                duration: response.data.duration,
                date: new Date(response.data.date)
            })
        })

        
    }
    
    handleChange(event) {
        const { name , value } = event.target
        this.setState({
            [name]: value
        })
    }

    submitExercise(event) {
        event.preventDefault();
        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }

        
        axios.post('http://localhost:5000/exercise/update/'+this.props.match.params.id , exercise)
        .then(Response => console.log(Response.data))

        
        // console.log(exercise);

        window.location = '/';
    }

    render() {
        return (
        <form className = "exercise-from">
        <h3>Edit Exercise Log</h3>
        <label>Your Name: </label><input type = "text"  name = 'username' placeholder = "User Name" value = {this.state.username} onChange = {this.handleChange} /> <br/>
        <label>What did you do: </label><input type = "text" name = 'description' placeholder = "Description" value = {this.state.description} onChange = {this.handleChange} /><br/>
        <label>How Long: </label><input type = "number" name = 'duration' placeholder = "Duration" value = {this.state.duration} onChange = {this.handleChange} /><br/>
        <label>When: </label><input type = "date" name = 'date' value = {this.state.date} onChange = {this.handleChange} /><br/>
        <button className = "submitBtn" onClick = {this.submitExercise} >Submit</button>
        </form>
        )
    }
}