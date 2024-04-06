import {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'
import {IoMdHome} from 'react-icons/io'
import {IoReorderThree} from 'react-icons/io5'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'

import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Language from '../../context/lang'
import Trends from '../Trends'
import Header from '../Header'
import {
  Main,
  Back1,
  Back2,
  Back3,
  Main2,
  Main3,
  Main5,
  Container,
  Image,
  Heading,
  Paragraph,
  Param,
  Button,
} from './style.js'

import './index.css'

class Trending extends Component {
  state = {
    ground: localStorage.getItem('values'),
    matrix: [],
    fail: false,
    load: false,
  }

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

  componentDidMount() {
    this.getDetails()
  }

  success = data => {
    const update = data.map(each => ({
      id: each.id,
      title: each.title,
      thumbnailUrl: each.thumbnail_url,
      name: each.channel.name,
      profileImageUrl: each.channel.profile_image_url,
      viewCount: each.view_count,
      publishedAt: each.published_at,
    }))
    this.setState({matrix: update, load: false})
  }

  failure = () => {
    this.setState({fail: true, load: false})
  }

  getDetails = async () => {
    this.setState({load: true})
    const token = Cookies.get('jwt_token')
    const opt = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch('https://apis.ccbp.in/videos/trending', opt)
    const data = await response.json()
    if (response.ok === true) {
      this.success(data.videos)
    } else {
      this.failure()
    }
  }

  loading = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#00BFFF" height={100} width={100} />
    </div>
  )

  failing = () => {
    const {ground} = this.state
    return (
      <Container lose={ground}>
        <Image
          lose1={ground}
          src={
            ground
              ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
          }
          alt="failure view"
        />
        <Heading lose2={ground}>Oops! Something Went Wrong</Heading>
        <Paragraph lose3={ground}>
          We are having some trouble to complete your request.Please try again.
        </Paragraph>
        <Button lose4={ground} onClick={this.getDetails}>
          Retry
        </Button>
      </Container>
    )
  }

  render() {
    const {ground, matrix, load, fail} = this.state
    if (Cookies.get('jwt_token') === undefined) {
      return <Redirect to="/login" />
    }
    if (load) {
      this.loading()
    }
    if (fail) {
      this.failing()
    }
    return (
      <>
        <Header flip={ground} toggle={this.changing} />

        <Main data-testid="trending" color={ground ? '#0f0f0f' : '#f9f9f9'}>
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
                  <FaFire className="coloring" />
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
                  <IoReorderThree
                    className={ground ? 'colored' : 'coloring1'}
                  />
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
          <Main2 colour={ground ? '#181818' : '#e2e8f0'}>
            <Main3 colour={ground ? '#606060' : '#cbd5e1'}>
              <FaFire className={ground ? 'black-class' : 'white-class'} />
              <Param colour={ground ? '#ffffff' : '#000000'}>Trending</Param>
            </Main3>

            <ul className="unorder">
              {matrix.map(each => (
                <Trends item={each} key={each.id} backChange={ground} />
              ))}
            </ul>
          </Main2>
        </Main>
      </>
    )
  }
}
export default Trending
