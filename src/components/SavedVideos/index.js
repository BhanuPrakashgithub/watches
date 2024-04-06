import {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'
import {IoMdHome} from 'react-icons/io'
import {IoReorderThree} from 'react-icons/io5'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'

import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Language from '../../context/lang'
import SavedList from '../SavedList'
import Header from '../Header'
import {
  Main,
  Back1,
  Back2,
  Back3,
  Main2,
  Main4,
  Main5,
  Container,
  Image,
  Heading,
  Paragraph,
} from './style.js'

import './index.css'

class Saved extends Component {
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
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png "
          alt="no saved videos"
        />
        <Heading lose2={ground}>No saved videos found</Heading>
        <Paragraph lose3={ground}>
          You can save your videos while watching them
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
      <Language.Consumer>
        {value => {
          const {activeArray} = value
          return (
            <>
              <Header flip={ground} toggle={this.changing} />

              <Main
                data-testid="savedVideos"
                color={ground ? '#0f0f0f' : '#f9f9f9'}
              >
                <Back1>
                  <Back2>
                    <li className="rabbit1" key="home">
                      <Link to="/" className="rabbit">
                        <IoMdHome
                          className={ground ? 'colored' : 'coloring1'}
                        />
                        <p className={ground ? 'paragraph' : 'para2'}>Home</p>
                      </Link>
                    </li>
                    <li className="rabbit1" key="trending">
                      <Link to="/trending" className="rabbit">
                        <FaFire className={ground ? 'colored' : 'coloring1'} />
                        <p className={ground ? 'paragraph' : 'para2'}>
                          Trending
                        </p>
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
                        <p className={ground ? 'paragraph' : 'para1'}>
                          Saved videos
                        </p>
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
                {activeArray.length === 0 ? (
                  this.nosave()
                ) : (
                  <Main2 colour={ground ? '#0f0f0f' : '#f9f9f9'}>
                    <Main4 colour={ground ? '#383838' : '#cbd5e1'}>
                      <FaFire className={ground ? 'fire1' : 'fire2'} />
                      <h1 className={ground ? 'head-fire1' : 'head-fire2'}>
                        Saved Videos
                      </h1>
                    </Main4>
                    <Main5 colour={ground ? '#212121' : ' #d7dfe9'}>
                      {activeArray.map(each => (
                        <SavedList key={each.id} each={each} win={ground} />
                      ))}
                    </Main5>
                  </Main2>
                )}
              </Main>
            </>
          )
        }}
      </Language.Consumer>
    )
  }
}
export default Saved
