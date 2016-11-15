import React, { Component } from 'react';

import HomePage from './HomePage';
import UsersPage from './UsersPage';
import SingleUserPage from './SingleUserPage';

class App extends Component {
  state = {
    route: window.location.hash.substr(1),
  };

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: window.location.hash.substr(1),
      });
    });
  }

  renderRoute() {
    if (this.state.route === '/users') {
      return <UsersPage />;
    }

    if (this.state.route.startsWith('/users/')) {
      const id = this.state.route.split('/users/')[1];
      return <SingleUserPage id={id} />;
    }

    return <HomePage />;
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Pusheen</a>
          </div>
          <div className="container-fluid">
            <ul className="nav navbar-nav">
              <li><a href="#/">Home</a></li>
              <li><a href="#/users">Users</a></li>
            </ul>
          </div>
        </nav>
        {this.renderRoute()}
      </div>
    );
  }
}


export default App;
