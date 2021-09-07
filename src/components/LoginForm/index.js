import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: 'Please enter a valid Email & Password',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <div className="input-container">
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <div className="only-input">
          <input
            type="password"
            id="password"
            className="password-input-field"
            value={password}
            onChange={this.onChangePassword}
          />
        </div>
      </div>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <div className="input-container">
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <div className="only-input">
          <input
            type="text"
            id="username"
            className="username-input-field"
            value={username}
            onChange={this.onChangeUsername}
          />
        </div>
      </div>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    return (
      <div className="login-form-container">
        <div className="heading-container">
          <div className="login-heading">
            <h className="m">M</h>
          </div>
          <div className="login-heading">
            <h className="O">O</h>
          </div>
          <div className="login-heading">
            <h className="V">V</h>
          </div>
          <div className="login-heading">
            <h className="I">I</h>
          </div>
          <div className="login-heading">
            <h className="E">E</h>
          </div>
          <div className="login-heading">
            <h className="S">S</h>
          </div>
        </div>
        <div className="sign-container">
          <form className="form-container" onSubmit={this.submitForm}>
            <div className="sign-heading-container">
              <h className="sign-heading">Sign in</h>
            </div>
            <div className="pad">{this.renderUsernameField()}</div>
            <div className="pad">{this.renderPasswordField()}</div>
            {showSubmitError && <p className="error-message">*{errorMsg}</p>}
            <div className="button-container">
              <button type="submit" className="login-button">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
