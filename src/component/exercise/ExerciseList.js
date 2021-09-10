import React from 'react'
import Exercise from './Exercise'
import axios from 'axios'

export default class ExerciseList extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            exerciseList: []
        }

        this.deleteExercise = this.deleteExercise.bind(this)
    }


    componentDidMount(){
        axios.get('http://localhost:5000/exercise')
        .then(Response => {
            this.setState({
                exerciseList: Response.data
            })
            console.log(this.state.exerciseList[0]);
        })
        
    }

    deleteExercise(id) {
        axios.delete('http://localhost:5000/exercise/'+id)
        .then(response => console.log(response.data))
        const newExerciseList = this.state.exerciseList.filter((item) => item._id !== id);
        console.log(newExerciseList);
        this.setState({
            exerciseList: newExerciseList
        })
    }



    render() {
        const exerciseItem = this.state.exerciseList.map(item => <Exercise key = {item._id} data = {item} onDelete = {() => this.deleteExercise(item._id)} />)
        return(
        <div>
            {exerciseItem}                          
        </div>
        )
    }


}