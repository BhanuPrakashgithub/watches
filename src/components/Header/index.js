import {Component} from 'react'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {withRouter, Link} from 'react-router-dom'
import {Main, Back1, Main1} from './skills.js'
import './index.css'

class Header extends Component {
  tray = () => {
    const {history} = this.props
    history.replace('/')
  }

  draw = () => {
    const {toggle} = this.props
    toggle()
  }

  but = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    const {flip} = this.props

    return (
      <Main colour={flip ? '#0f0f0f' : '#f9f9f9'}>
        <Link to="/" style={{textDecoration: 'none'}}>
          <button className="but2" type="button">
            <img
              src={
                flip
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              }
              alt="website logo"
              className="im2"
            />
          </button>
        </Link>
        <Back1>
          <button className="but2" type="button" onClick={this.draw}>
            <img
              src={
                flip
                  ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
              }
              className="im4"
            />
          </button>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
            alt="profile"
            className="im3"
          />

          <Popup
            modal
            trigger={
              <button
                className={flip ? 'but5' : 'but1'}
                type="button"
                data-testid="theme"
              >
                Logout
              </button>
            }
          >
            {close => (
              <div className={flip ? 'water1' : 'water2'}>
                <div>
                  <p className={flip ? 'ut1' : ''}>
                    Are you sure, you want to logout
                  </p>
                </div>
                <div>
                  <button
                    type="button"
                    className={flip ? 'trigger-button1' : 'utensils'}
                    onClick={() => close()}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="trigger-button2"
                    onClick={this.but}
                  >
                    Confirm
                  </button>
                </div>
              </div>
            )}
          </Popup>
        </Back1>
      </Main>
    )
  }
}
export default withRouter(Header)
