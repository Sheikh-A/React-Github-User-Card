import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import UserCard from './components/UserCard';
import FollowersList from './components/FollowersList';

class App extends Component {

  state = {
    user: [],
    followers: [],
    userText: ""
  };

  componentDidMount() {
    axios
      .get("https://cors-anywhere.herokuapp.com/https://api.github.com/users/Sheikh-A")
      .then(res => {
        console.log("user response: ", res.data)
        this.setState({ ...this.state, user: res.data })
      })
      .catch(err => console.log("error ", err))

    axios
      .get("https://cors-anywhere.herokuapp.com/https://api.github.com/users/Sheikh-A/following")
      .then(res => {
        console.log("follower response: ", res.data)
        this.setState({ ...this.state, followers: res.data })
      })
  }

  componentDidUpdate() {
    this.handleSubmit = event => {
      event.preventDefault()
      axios
        .get(`https://cors-anywhere.herokuapp.com/https://api.github.com/users/${this.state.userText}`)
        .then(res => {
          console.log("new user: ", res)
          this.setState({ ...this.state, user: res.data })
        })

      axios
        .get(`https://cors-anywhere.herokuapp.com/https://api.github.com/users/${this.state.userText}/following`)
        .then(res => {
          console.log("follower response: ", res.data)
          if (res.data !== "error") {
            this.setState({ ...this.state, followers: res.data })
          }
        })

      this.setState({ ...this.state, userText: "" })
    }
  }

  handleChange = event => {
    this.setState({ ...this.state, userText: event.target.value })
  }

  render() {
    return (
      <div className="App" >
        <h1>Friends & Followings of Github</h1>
        <form>
          <input type="text" value={this.state.userText} onChange={this.handleChange} />
          <button onClick={this.handleSubmit}>Git user</button>
        </form>
        <UserCard user={this.state.user} />
        <FollowersList followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
