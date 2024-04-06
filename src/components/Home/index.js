import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import Loader from 'react-loader-spinner'
import {IoMdHome} from 'react-icons/io'
import {BsX, BsSearch} from 'react-icons/bs'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {IoReorderThree} from 'react-icons/io5'
import {Link, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {Main, Back1, Back2, Back3, Fin1, Fin2, Fin3} from './skills.js'
import './index.css'
import List from '../List'
import Header from '../Header'

class Home extends Component {
  state = {
    dark: localStorage.getItem('values'),
    value: '',
    display: true,
    search: '',
    array: [],
    loading: false,
    fail: false,
  }

  change = event => this.setState({value: event.target.value})

  process = () => {
    const {value} = this.state
    this.setState({search: value}, this.getDetails)
  }

  fast = () => this.setState({display: false})

  componentDidMount() {
    this.getDetails()
  }

  failure = () => {
    this.setState({fail: true, loading: false})
  }

  success = data => {
    const update = data.videos.map(each => ({
      id: each.id,
      title: each.title,
      thumbnailUrl: each.thumbnail_url,
      viewCount: each.view_count,
      name: each.channel.name,
      profileImageUrl: each.channel.profile_image_url,
      publishedAt: each.published_at,
    }))
    this.setState({array: update, loading: false})
  }

  getDetails = async () => {
    this.setState({loading: true})
    const {search} = this.state
    const jwt = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${search}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.success(data)
    } else {
      this.failure()
    }
  }

  entry = () => this.getDetails()

  cycle = () => (
    <div className="boy">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
        className="flight1"
      />
      <h1 className="head2">No Search results found</h1>
      <p className="des">Try different key words or remove search filter</p>
      <button className="polyster" type="button" onClick={this.entry}>
        Retry
      </button>
    </div>
  )

  loader = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#00BFFF" height={100} width={100} />
    </div>
  )

  toggle = () => {
    if (localStorage.getItem('values') === null) {
      localStorage.setItem('values', 'true')
      const tog = localStorage.getItem('values')
      this.setState({dark: tog})
    } else {
      localStorage.removeItem('values')
      this.setState({dark: null})
    }
    // this.setState(prev => ({dark: !prev.dark}))
  }

  render() {
    if (Cookies.get('jwt_token') === undefined) {
      return <Redirect to="/login" />
    }
    const {dark, value, display, loading, array, fail} = this.state
    if (loading === true) {
      return this.loader()
    }

    if (fail) {
      return (
        <div className="boy">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
            alt="failure view"
            className="flight1"
          />
          <h1 className="head2">Oops! Something Went Wrong</h1>
          <p className="des">
            We are having some trouble to complete your request.Please try
            again.
          </p>
          <button className="polyster" type="button" onClick={this.entry}>
            Retry
          </button>
        </div>
      )
    }

    if (dark === null) {
      return (
        <>
          <Header flip={dark} toggle={this.toggle} />
          <Main data-testid="home" color="#f9f9f9">
            <Back1>
              <Back2>
                <li className="rabbit1">
                  <Link to="/" className="rabbit">
                    <IoMdHome className="coloring" />
                    <p className="para1">Home</p>
                  </Link>
                </li>
                <li className="rabbit1">
                  <Link to="/trending" className="rabbit">
                    <FaFire className="coloring1" />
                    <p className="para2">Trending</p>
                  </Link>
                </li>
                <li className="rabbit1">
                  <Link to="/gaming" className="rabbit">
                    <SiYoutubegaming className="coloring1" />
                    <p className="para2">Gaming</p>
                  </Link>
                </li>
                <li className="rabbit1">
                  <Link to="/saved-videos" className="rabbit">
                    <IoReorderThree className="coloring1" />
                    <p className="para2">Saved videos</p>
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
            <Fin1>
              {display ? (
                <Fin2 data-testid="banner">
                  <button
                    className="off1"
                    type="button"
                    onClick={this.fast}
                    data-testid="close"
                  >
                    <BsX />
                  </button>
                  <div className="off2">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                      alt="nxt watch logo"
                      className="mark1"
                    />
                    <p className="mark2">
                      Buy Nxt Watch Premium prepaid plans with UPI
                    </p>
                    <button className="mark3" type="button">
                      GET IT NOW
                    </button>
                  </div>
                </Fin2>
              ) : null}

              <Fin3>
                <div className="track1">
                  <input
                    value={value}
                    type="search"
                    className="input1"
                    placeholder="Search"
                    onChange={this.change}
                  />
                  <button
                    className="up1"
                    onClick={this.process}
                    data-testid="searchButton"
                  >
                    <BsSearch />
                  </button>
                </div>

                <div>
                  {array.length === 0 ? (
                    this.cycle()
                  ) : (
                    <ul className="list1">
                      {array.map(each => (
                        <List each={each} key={each.id} />
                      ))}
                    </ul>
                  )}
                </div>
              </Fin3>
            </Fin1>
          </Main>
        </>
      )
    }
    return (
      <>
        <Header flip={dark} toggle={this.toggle} />
        <Main data-testid="home" color="#181818">
          <Back1>
            <Back2>
              <li className="rabbit1">
                <Link to="/" className="rabbit">
                  <IoMdHome className="coloring" />
                  <p className="paragraph">Home</p>
                </Link>
              </li>
              <li className="rabbit1">
                <Link to="/trending" className="rabbit">
                  <FaFire className="colored" />
                  <p className="paragraph">Trending</p>
                </Link>
              </li>
              <li className="rabbit1">
                <Link to="/gaming" className="rabbit">
                  <SiYoutubegaming className="colored" />
                  <p className="paragraph">Gaming</p>
                </Link>
              </li>
              <li className="rabbit1">
                <Link to="/saved-videos" className="rabbit">
                  <IoReorderThree className="colored" />
                  <p className="paragraph">Saved videos</p>
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
          <Fin1>
            {display ? (
              <Fin2 data-testid="banner">
                <button
                  className="off1"
                  type="button"
                  onClick={this.fast}
                  data-testid="close"
                >
                  <BsX />
                </button>
                <div className="off2">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="nxt watch logo"
                    className="mark1"
                  />
                  <p className="mark2">
                    Buy Nxt Watch Premium prepaid plans with UPI
                  </p>
                  <button className="mark3" type="button">
                    GET IT NOW
                  </button>
                </div>
              </Fin2>
            ) : null}

            <Fin3>
              <div className="track1">
                <input
                  value={value}
                  type="search"
                  className="input1"
                  placeholder="Search"
                  onChange={this.change}
                />
                <button
                  className="up1"
                  onClick={this.process}
                  data-testid="searchButton"
                >
                  <BsSearch />
                </button>
              </div>

              <div>
                {array.length === 0 ? (
                  this.cycle()
                ) : (
                  <ul className="list1">
                    {array.map(each => (
                      <List each={each} key={each.id} />
                    ))}
                  </ul>
                )}
              </div>
            </Fin3>
          </Fin1>
        </Main>
      </>
    )
  }
}
export default Home
