import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
// import { fetchUsers } from '../actions';

class UserList extends Component {

  componentWillMount() {
    this.props.fetchUsers();
  }

  renderUser(user, index) {
    const { id, name, company, website } = user;
    return (
      <div key={id} className="card card-block">
        <h4 className="card-title">{name}</h4>
        <p className="card-text">{company.name}</p>
        <a href={website} className="btn btn-primary">Website</a>
      </div>
    );
  }

  render() {
    return (
      <div className="user-list">
        { this.props.users.map(this.renderUser)}
      </div>
    );
  }
}


function mapStateToProps(state) {
  return { users: state.users };
}

export default connect(mapStateToProps, actions)(UserList);
