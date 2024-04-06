import {Component} from 'react'
import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import './index.css'

class List extends Component {
  render() {
    const {each} = this.props
    return (
      <Link to={`videos/${each.id}`} style={{textDecoration: 'none'}}>
        <li className="list-item">
          <img
            src={each.thumbnailUrl}
            className="deer1"
            alt="video thumbnail"
          />
          <div className="rest1">
            <img
              src={each.profileImageUrl}
              className="deer2"
              alt="channel logo"
            />
            <div className="rest2">
              <p className="para-color">{each.title}</p>
              <p className="para-color1">{each.name}</p>
              <div className="rest3">
                <p className="para-color2">{each.viewCount} views</p>
                <p className="para-color2">
                  {formatDistanceToNow(new Date(each.publishedAt))} ago
                </p>
              </div>
            </div>
          </div>
        </li>
      </Link>
    )
  }
}
export default List
