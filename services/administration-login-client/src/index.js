import ReactDOM from 'react-dom';
import React, { Fragment } from 'react';

class AdministrationLoginPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleLogin(event) {
    const { username, password } = this.state;

    // retrieve access token and redirect
    // fetch('TOKENS_URL', {
    //   method: 'post',
    //   headers: new Headers({
    //     'Authorization': `Basic ${encode(username, password)}`
    //   })
    // });

    event.preventDefault();
  }

  render () {
    return (
      <Fragment>
        <heading>
          <h1>
            administration login
          </h1>
        </heading>
        <main>
          <form onSubmit={this.handleLogin.bind(this)}>
            <label>
              <span>username</span>
              <input type='username' onChange={this.handleUsernameChange.bind(this)} value={this.state.username} name='username' />
            </label>
            <label>
              <span>password</span>
              <input type='password' onChange={this.handlePasswordChange.bind(this)} value={this.state.password} name='password' />
            </label>
            <button type='submit'>
              log in
            </button>
          </form>
        </main>
      </Fragment>
    );
  }
}

function encode(username, password) {
  return btoa(`${username}:${password}`);
}

ReactDOM.render(<AdministrationLoginPage />, document.getElementById('root'));
