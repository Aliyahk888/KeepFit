
import React, { Component } from 'react';
import axios from 'axios';
import img1 from './images/diet3.jpg'

const divStyle = {
  width: '100%',
  height: '800px',
  backgroundImage: `url(${img1})`,
  backgroundSize: 'cover',
  //opacity: 0.5
};

export default class CreateUser extends Component {
	constructor(props) {
  super(props);
  this.onChangeUsername = this.onChangeUsername.bind(this);
  this.onSubmit = this.onSubmit.bind(this);
  this.state = {
    username: ''
  };
}


onChangeUsername(e) {
  this.setState({
    username: e.target.value
  });
}
onSubmit(e) {
  e.preventDefault();
  const newUser = {
    username: this.state.username,
  };
  console.log(newUser);
  axios.post('http://localhost:5000/users/add', newUser)
  .then(res => console.log(res.data));
  
  this.setState({
    username: ''
  })

  window.location = '/create';
}
//style={{display: 'flex',  justifyContent:'center'}}
//style={divStyle}
  render() {
    return (
<div>
  <h3 style={{display: 'flex',justifyContent:'center'}}>Welcome to Keepfit! We'll help you keep track of your diet, fitness and health goals. </h3>
  <h4 style={{display: 'flex',justifyContent:'center'}}> Start by simply creating a username! </h4>
  <form onSubmit={this.onSubmit}>
    <div className="form-group"> 
      <label>Username: </label>
      <input  type="text"
          required
          className="form-control"
          value={this.state.username}
          onChange={this.onChangeUsername}
          />
    </div>
    <div  className="form-group">
      <input type="submit" value="Create new user" className="btn btn-primary" />
      <br/><br/>
      <p  style={divStyle}></p>
    </div>
  </form>
</div>






    )
  }
}