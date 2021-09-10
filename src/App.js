import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ExerciseList from './component/exercise/ExerciseList'
import CreateExercise from './component/exercise/ExerciseCreate'
import EditExercise from './component/exercise/ExerciseEdit'
import Users from './component/users/Users'
import Navbar from './component/Navbar'
import './App.css';

class App extends React.Component {
  constructor(){
    super();
  
    this.state = {
      users : []
    }
  }

  // componentDidMount() {
  //   fetch('')
  // }


  render(){
    return(
      
      <Router>
        <Navbar/>
        <br/>
        <Route path = '/' exact component={ExerciseList}/>
        <Route path = '/edit/:id' exact component={EditExercise}/>
        <Route path = '/create' exact component={CreateExercise}/>
        <Route path = '/users' exact component={Users}/>

      </Router>)
  }
  



}

export default App;
