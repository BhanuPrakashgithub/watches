import {Component} from 'react'

import {Link, Redirect} from 'react-router-dom'
import {IoMdHome} from 'react-icons/io'
import {IoReorderThree} from 'react-icons/io5'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'

import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Language from '../../context/lang'
import Header from '../Header'
import {
  Main,
  Back1,
  Back2,
  Back3,
  Container,
  Image,
  Heading,
  Paragraph,
} from './style.js'

class NotFound extends Component {
  state = {ground: localStorage.getItem('values')}

  changing = () => {
    if (localStorage.getItem('values') === null) {
      localStorage.setItem('values', 'true')
      const tog = localStorage.getItem('values')
      this.setState({ground: tog})
    } else {
      localStorage.removeItem('values')
      this.setState({ground: null})
    }
  }

  nosave = () => {
    const {ground} = this.state
    return (
      <Container lose={ground}>
        <Image
          lose1={ground}
          src={
            ground
              ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
          }
          alt="not found"
        />
        <Heading lose2={ground ? '#ffffff' : '#000000'}>Page Not Found</Heading>
        <Paragraph lose3={ground ? '#ffffff' : '#000000'}>
          We are sorry, the page you requested could not be found
        </Paragraph>
      </Container>
    )
  }

  render() {
    const {ground} = this.state
    if (Cookies.get('jwt_token') === undefined) {
      return <Redirect to="/login" />
    }
    return (
      <>
        <Header flip={ground} toggle={this.changing} />

        <Main data-testid="Not Found" color={ground ? '#0f0f0f' : '#f9f9f9'}>
          <Back1>
            <Back2>
              <li className="rabbit1" key="home">
                <Link to="/" className="rabbit">
                  <IoMdHome className={ground ? 'colored' : 'coloring1'} />
                  <p className={ground ? 'paragraph' : 'para2'}>Home</p>
                </Link>
              </li>
              <li className="rabbit1" key="trending">
                <Link to="/trending" className="rabbit">
                  <FaFire className={ground ? 'colored' : 'coloring1'} />
                  <p className={ground ? 'paragraph' : 'para2'}>Trending</p>
                </Link>
              </li>
              <li className="rabbit1" key="gaming">
                <Link to="/gaming" className="rabbit">
                  <SiYoutubegaming
                    className={ground ? 'colored' : 'coloring1'}
                  />
                  <p className={ground ? 'paragraph' : 'para2'}>Gaming</p>
                </Link>
              </li>
              <li className="rabbit1" key="savedvideos">
                <Link to="/saved-videos" className="rabbit">
                  <IoReorderThree className="coloring" />
                  <p className={ground ? 'paragraph' : 'para1'}>Saved videos</p>
                </Link>
              </li>
            </Back2>
            <Back3>
              <p className="head">CONTACT US</p>
              <div className="mango">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                  className="mid1"
                />
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                  className="mid1"
                />
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                  className="mid1"
                />
              </div>
              <p className="para4">
                Enjoy! Now to see your channels and recommendations!
              </p>
            </Back3>
          </Back1>
          <Container lose={ground}>
            <Image
              lose1={ground}
              src={
                ground
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
              }
              alt="not found"
            />
            <Heading lose2={ground ? '#ffffff' : '#000000'}>
              Page Not Found
            </Heading>
            <Paragraph lose3={ground ? '#ffffff' : '#000000'}>
              we are sorry, the page you requested could not be found.
            </Paragraph>
          </Container>
        </Main>
      </>
    )
  }
}
export default NotFound
