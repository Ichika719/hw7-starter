import React, { Component, PropTypes } from 'react';


class SingleUserPage extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  };

  constructor() {
    super();
    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    fetch('/api/users/' + this.props.id)
      .then(response => {
        return response.json();
      })
      .then(body => {
        this.setState({
          user: body
        });
      });
    // fetch `/api/users/${id}` to get user and then set state...
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-4">
            <h2>{this.state.user.name}</h2>
            <p>{this.state.user.age} years old</p>
          </div>
          <div className="col-lg-4">
            <img src={this.state.user.avator} />
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
    );
  }
}

export default SingleUserPage;
