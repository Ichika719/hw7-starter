import React, { Component } from 'react';


class UsersPage extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch('/api/users')
      .then(response => {
        return response.json();
      })
      .then(body => {
        this.setState({
          users: body.users,
        })
      });
    // fetch `/api/users` to get users and then set state...
  }

  render() {
    return (
      <div>Users
        { this.state.users.map((user, idx) =>
          <li><a href={`#/users/${idx+1}`}>{user.name}</a></li>)
        }
      </div>
    );
  }
}

export default UsersPage;
