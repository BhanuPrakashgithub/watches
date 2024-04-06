import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'
import {Redirect} from 'react-router-dom'
import {Main, Back1, Button} from './skill.js'

class Login extends Component {
  state = {
    username: '',
    password: '',
    attribute: false,
    active: false,
    error: '',
  }

  user = event => this.setState({username: event.target.value})

  pass = event => this.setState({password: event.target.value})

  success = jwt => {
    const {history} = this.props
    Cookies.set('jwt_ token', jwt, {expires: 1})
    console.log(Cookies.get('jwt_token'))
    history.replace('/')
  }

  failure = err => {
    this.setState({error: err, active: true})
  }

  but = async () => {
    const {username, password} = this.state
    const url = 'https://apis.ccbp.in/login'
    const userdetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userdetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.success(data.jwt_token)
    } else {
      this.failure(data.error_msg)
    }
  }

  check = () => {
    const {attribute} = this.state
    this.setState({attribute: !attribute})
  }

  render() {
    const {username, password, active, attribute, error} = this.state
    if (Cookies.get('jwt_token') !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <Main>
        <Back1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
            className="im1"
          />
          <form>
            <div className="version1">
              <label htmlFor="root1" className="label1">
                USERNAME
              </label>
              <input
                type="text"
                value={username}
                onChange={this.user}
                id="root1"
                placeholder="Username"
                className="input1"
              />
            </div>
            <div className="version1">
              <label htmlFor="root2" className="label1">
                PASSWORD
              </label>
              <input
                type={attribute ? 'text' : 'password'}
                value={password}
                onChange={this.pass}
                id="root2"
                placeholder="Password"
                className="input1"
              />
            </div>
            <div className="version2">
              <input
                type="checkbox"
                onChange={this.check}
                id="root3"
                checked={attribute}
              />
              <label htmlFor="root3" className="apple">
                Show Password
              </label>
            </div>
            <Button type="submit" onClick={this.but}>
              Login
            </Button>
            {active && <p className="para">*{error}</p>}
          </form>
        </Back1>
      </Main>
    )
  }
}
export default Login
