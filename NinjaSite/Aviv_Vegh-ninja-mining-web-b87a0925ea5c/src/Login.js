import React, { Component, JsonTable } from "react";
// import { JsonTable } from 'react-json-table';
// import UserManager from "./globals/managers/UserManager";
import axios from 'axios';
import qs from 'qs';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      userData: null
    };

    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.onLoginClick = this.onLoginClick.bind(this);
  }

  onLoginClick() {
    axios.post('https://stormy-mountain-48556.herokuapp.com/auth/login', qs.stringify({
      email: this.state.email,
      password: this.state.password
    })).then((response) => {
      return axios.get('https://stormy-mountain-48556.herokuapp.com/api/user/' + this.state.email, { headers: { brear_token: response.data.token } })
    }).then((response) => {
      console.log('Response', response.data.data);
      this.setState({ userData: response.data.data });
    });
    // UserManager.login(this.state.email, this.state.password);
  }

  handlePasswordChange(evt) {
    console.log('ddd ' + evt.target.value)
    this.setState({ password: evt.target.value });
  }

  handleEmailChange(evt) {
    this.setState({ email: evt.target.value });
  }

  render() {
    if (this.state.userData !== null) {
      return (
        <div class="login">
          <div class="container">
            {/* <JsonTable rows={qs.stringify(this.state.userData)} /> */}
            {/* <label>{qs.stringify(this.state.userData)}</label> */}
            {/* <table id="excelDataTable" border="1"></table> */}
            <table >
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Age</th>
              </tr>
              <tr>
                <td>Jill</td>
                <td>Smith</td>
                <td>50</td>
              </tr>
              <tr>
                <td>Eve</td>
                <td>Jackson</td>
                <td>94</td>
              </tr>
            </table>
          </div>
        </div>);
    }
    return (
      <div class="login">
        <div class="container">
          <label>Email</label>
          <input onChange={this.handleEmailChange} type="text" placeholder="Enter Username" name="uname" required />

          <label>Password</label>
          <input onChange={this.handlePasswordChange} type="password" placeholder="Enter Password" name="psw" required />

          <button class="login-button" type="submit" onClick={this.onLoginClick}>Login</button>
        </div>
      </div>
    );
  }
}

export default Login;