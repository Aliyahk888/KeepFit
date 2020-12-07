
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

const footerStyle = {
  position: 'fixed',
  left: 0,
  bottom: 0,
  width: '100%',
  height: '7.5%',
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