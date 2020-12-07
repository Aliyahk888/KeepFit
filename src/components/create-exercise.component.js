
import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

      const footerStyle = {
  position: 'fixed',
  left: 0,
  bottom: 0,
  width: '100%',
  height: '6%',
  backgroundColor: 'white',
  color: 'white',
  opacity: 0.65,
  textAlign: 'center'


};

const contactStyle={
  color:'black',
  display:'inline',
  font: 'Open Sans',
  fontWeight:'bold',
 

}

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeHeight = this.onChangeHeight.bind(this);
    this.onChangeWeight = this.onChangeWeight.bind(this);
    this.onChangeCalorieIntake = this.onChangeCalorieIntake.bind(this);
    this.onChangeExerciseType = this.onChangeExerciseType.bind(this);
    this.onChangeCalorieLoss = this.onChangeCalorieLoss.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);



          /*</div>
          <div className="form-group"> 
            <label>Exercise Type: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.exercise_type}
                onChange={this.onChangeExerciseType}
                />
          </div>*/

    this.state = {
      username: '',
      height: 0,
      weight: 0,
      calorie_intake: 0,
      exercise_type: '',
      calorie_loss: 0,
      date: new Date(),
      users: []
    }
  }

  componentDidMount() {
axios.get('http://localhost:5000/users/')
  .then(response => {
    if (response.data.length > 0) {
      this.setState({ 
        users: response.data.map(user => user.username),
        username: response.data[0].username
      });
    }
  })
  .catch((error) => {
    console.log(error);
  })
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

    onChangeWeight(e) {
    this.setState({
      weight: e.target.value
    });
  }

    onChangeCalorieIntake(e) {
    this.setState({
      calorie_intake: e.target.value
    });
  }
    onChangeCalorieLoss(e) {
    this.setState({
      calorie_loss: e.target.value
    });
  }

  onChangeExerciseType(e) {
    this.setState({
      exercise_type: e.target.value
    });
  }

  onChangeHeight(e) {
    this.setState({
      height: e.target.value
    });
  }

  onChangeDate(date) {
    this.setState({
      date: date
    });
  }

  onSubmit(e) {
    e.preventDefault();
  
    const exercise = {
      username: this.state.username,
      height: this.state.height,
      weight: this.state.weight,
      calorie_intake: this.state.calorie_intake,
      exercise_type: this.state.exercise_type,
      calorie_loss: this.state.calorie_loss,
      date: this.state.date,
    };
  
    console.log(exercise);
    axios.post('http://localhost:5000/exercises/add', exercise)
  .then(res => console.log(res.data));
    
    window.location = '/';
  }



  render() {
    return (
      <div>
      <div>
        <h3>Create New Exercise Log</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <select ref="userInput"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}>
                {
                  this.state.users.map(function(user) {
                    return <option 
                      key={user}
                      value={user}>{user}
                      </option>;
                  })
                }
            </select>
          </div>

             <div className="form-group">
            <label>Height(in metres): </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.height}
                onChange={this.onChangeHeight}
                />
          </div>

                    <div className="form-group">
            <label> Weight (in kgs): </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.weight}
                onChange={this.onChangeWeight}
                />
          </div>

                    <div className="form-group">
            <label> Calorie Intake: </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.calorie_intake}
                onChange={this.onChangeCalorieIntake}
                />
                </div>

            <div className="form-group">
            <label>Exercise: </label>
            <div>
            <input list="tasks" className="form-control" value = {this.state.exercise_type} onChange={this.onChangeExerciseType}/>
            <datalist id="tasks">
            <option value="Jogging"/>
            <option value="Running"/>
            <option value= "Cycling"/>
            <option value= "Squats"/>
            <option value= "Push-ups"/>
            <option value= "Planks"/>
            <option value= "Squats"/>
            <option value= "Other"/>
            </datalist>
            </div>
          </div>


                    <div className="form-group">
            <label>Calorie Loss: </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.calorie_loss}
                onChange={this.onChangeCalorieLoss}
                />
          </div>


          <div className="form-group">
            <label>Date: </label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>





          <div className="form-group">
            <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
          </div>
        </form>
      </div>

<div class="footer" style={footerStyle}>
<div class="copyright" style={contactStyle}>© Copyright 2020 Aliyah and Anwesha.</div>
<br/>
<div class="contact" style={contactStyle}>Contact us at: </div>
<img src={require('./images/phone.jpeg')} width= '24px'height= '24px'/><div class="contact" style={contactStyle}>9663022882&nbsp;&nbsp;&nbsp;&nbsp;</div>

<img src={require('./images/phone.jpeg')} width= '24px'height= '24px'/><div class="contact" style={contactStyle}>8787667898</div>

  <p>Footer</p>
</div>

</div>
    )
  }
}

