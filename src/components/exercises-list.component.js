import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import img1 from './images/diet3.jpg'


const Exercise = props => (
  <tr bgcolor="#ADD8E6">
    <td>{props.exercise.username}</td>
    <td>{props.exercise.weight}</td>
    <td>{props.exercise.calorie_intake}</td>
    <td>{props.exercise.exercise_type}</td>
    <td>{props.exercise.calorie_loss}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.date.substring(0,10)}</td>
    <td>
      <a href="https://www.healthline.com/health/exercise-fitness/how-to-do-crunches" target="_blank"> Info </a> | <Link to={"/edit/"+props.exercise._id}>edit</Link> | <a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
    </td>
  </tr>
)

const divStyle = {
  width: '100%',
  height: '800px',
  backgroundImage: `url(${img1})`,
  backgroundSize: 'cover',
  opacity: 0.8
};

export default class ExercisesList extends Component {
	constructor(props) {
  super(props);
  this.deleteExercise = this.deleteExercise.bind(this);
  this.state = {exercises: []};
}
componentDidMount() {
  axios.get('http://localhost:5000/exercises/')
   .then(response => {
     this.setState({ exercises: response.data });
   })
   .catch((error) => {
      console.log(error);
   })
}
deleteExercise(id) {
  axios.delete('http://localhost:5000/exercises/'+id)
    .then(res => console.log(res.data));
  this.setState({
    exercises: this.state.exercises.filter(el => el._id !== id)
  })
}
exerciseList() {
  return this.state.exercises.map(currentexercise => {
    return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
  })
}


  render() {
    return (

<div style={divStyle}>
  <h3>Planner Log</h3>
  <table style={{color:"black"}} className="table">
    <thead className="thead-light">
      <tr>
        <th>Username</th>
        <th>Weight (kgs)</th>
        <th>Calorie Intake (cal)</th>
        <th>Exercise Type</th>
        <th>Calorie Loss (cal)</th>
        <th>Duration (mins)</th>
        <th>Date</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      { this.exerciseList() }
    </tbody>
  </table>
</div>
    )
  }
}