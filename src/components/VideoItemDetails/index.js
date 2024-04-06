import {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'
import {IoMdHome} from 'react-icons/io'
import {IoReorderThree} from 'react-icons/io5'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {formatDistanceToNow} from 'date-fns'
// import { BsHandThumbsUp} from "react-icons/bs";
import {BiDislike, BiLike} from 'react-icons/bi'
import {BsList} from 'react-icons/bs'
import ReactPlayer from 'react-player'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Language from '../../context/lang'
import {
  Main2,
  Para,
  Like,
  Dislike,
  Save,
  Main,
  Back1,
  Back2,
  Back3,
} from './style.js'
import Header from '../Header'

import './index.css'

class Video extends Component {
  state = {
    obj: {},
    loading: false,
    like: false,
    dislike: false,
    save: false,
    fail: false,
    ground: localStorage.getItem('values'),
  }

  entry = () => this.getDetails()

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

  kick1 = () => {
    const {like, dislike} = this.state
    if (like === false && dislike === true) {
      this.setState({like: true, dislike: false})
    } else if (like === false && dislike === false) {
      this.setState({like: true})
    } else if (like === true && dislike === false) {
      this.setState({like: false})
    }
  }

  kick2 = () => {
    const {like, dislike} = this.state
    if (like === false && dislike === true) {
      this.setState({dislike: false})
    } else if (like === false && dislike === false) {
      this.setState({dislike: true})
    } else if (like === true && dislike === false) {
      this.setState({dislike: true, like: false})
    }
  }

  failure = () => {
    this.setState({fail: true, loading: false})
  }

  success = data => {
    const update = {
      id: data.id,
      title: data.title,
      videoUrl: data.video_url,
      thumbnailUrl: data.thumbnail_url,
      name: data.channel.name,
      profileimageUrl: data.channel.profile_image_url,
      subscriberCount: data.channel.subscriber_count,
      viewCount: data.view_count,
      publishedAt: data.published_at,
      description: data.description,
    }
    this.setState({obj: update, loading: false})
  }

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    this.setState({loading: true})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/videos/${id}`
    const jwt = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    console.log(data.video_details.published_at)
    if (response.ok) {
      this.success(data.video_details)
    } else {
      this.failure()
    }
  }

  loader = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#00BFFF" height={100} width={100} />
    </div>
  )

  kick = (adds, subs, lists) => {
    const {obj} = this.state
    const indexs = lists.findIndex(each => each.id === obj.id)
    if (indexs === -1) {
      adds(obj)
    } else {
      subs(obj)
    }
  }

  render() {
    const {obj, loading, like, dislike, save, fail, ground} = this.state

    if (Cookies.get('jwt_token') === undefined) {
      return <Redirect to="/login" />
    }

    if (loading) {
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
            We are having some trouble to complete your request. Please try
            again.
          </p>
          <button className="polyster" type="button" onClick={this.entry}>
            Retry
          </button>
        </div>
      )
    }

    return (
      <Language.Consumer>
        {value => {
          const {activeArray, addItem, removeItem} = value
          const index = activeArray.findIndex(each => each.id === obj.id)
          let saving
          if (index === -1) {
            saving = false
          } else {
            saving = true
          }

          console.log(activeArray)
          return (
            <>
              <Header flip={ground} toggle={this.changing} />

              <Main
                data-testid="videoItemDetails"
                color={ground ? '#0f0f0f' : '#f9f9f9'}
              >
                <Back1>
                  <Back2>
                    <li className="rabbit1">
                      <Link to="/" className="rabbit">
                        <IoMdHome className="coloring" />
                        <p className={ground ? 'paragraph' : 'para1'}>Home</p>
                      </Link>
                    </li>
                    <li className="rabbit1">
                      <Link to="/trending" className="rabbit">
                        <FaFire className={ground ? 'colored' : 'coloring1'} />
                        <p className={ground ? 'paragraph' : 'para2'}>
                          Trending
                        </p>
                      </Link>
                    </li>
                    <li className="rabbit1">
                      <Link to="/gaming" className="rabbit">
                        <SiYoutubegaming
                          className={ground ? 'colored' : 'coloring1'}
                        />
                        <p className={ground ? 'paragraph' : 'para2'}>Gaming</p>
                      </Link>
                    </li>
                    <li className="rabbit1">
                      <Link to="/saved-videos" className="rabbit">
                        <IoReorderThree
                          className={ground ? 'colored' : 'coloring1'}
                        />
                        <p className={ground ? 'paragraph' : 'para2'}>
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
                <Main2 colour={ground ? '#0f0f0f' : '#f9f9f9'}>
                  <ReactPlayer
                    url={obj.videoUrl}
                    className="react-play"
                    height="100%"
                    width="100%"
                    controls
                  />
                  <Para colour={ground ? '#ffffff' : '#0f0f0f'}>
                    {obj.title}
                  </Para>
                  <div className="first">
                    <div className="second">
                      <p className={ground ? 'oasis' : 'oasis1'}>
                        {obj.viewCount} views
                      </p>
                      <p className={ground ? 'oasis' : 'oasis2'}>
                        {console.log(obj.publishedAt)}
                        ago
                      </p>
                    </div>
                    <div className="third">
                      <Like val1={like} onClick={this.kick1}>
                        <BiLike /> Like
                      </Like>
                      <Dislike val2={dislike} onClick={this.kick2}>
                        <BiDislike /> Dislike
                      </Dislike>
                      <Save
                        val3={saving}
                        onClick={() => {
                          this.kick(addItem, removeItem, activeArray)
                        }}
                      >
                        <BsList /> {saving ? 'Saved' : 'Save'}
                      </Save>
                    </div>
                  </div>
                  <hr className="hor" />
                  <div className="fourth">
                    <img
                      src={obj.profileimageUrl}
                      className="pro1"
                      alt="channel logo"
                    />
                    <div className="fifth">
                      <p className={ground ? 'forest' : 'forest1'}>
                        {obj.name}
                      </p>
                      <p className={ground ? 'oasis' : 'forest2'}>
                        {obj.subscriberCount} subscribers
                      </p>
                      <p className={ground ? 'forest' : 'forest3'}>
                        {obj.description}
                      </p>
                    </div>
                  </div>
                </Main2>
              </Main>
            </>
          )
        }}
      </Language.Consumer>
    )
  }
}
export default Video
