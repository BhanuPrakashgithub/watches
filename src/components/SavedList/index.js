import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'

import './index.css'

class SavedList extends Component {
  render() {
    const {each, win} = this.props
    return (
      <li className="lists-items">
        <Link to={`/videos/${each.id}`} className="paint">
          <img
            src={each.thumbnailUrl}
            className="cursor"
            alt="video thumbnail"
          />
          <div className="actor1">
            <p className={win ? 'rain1' : 'heat1'}>{each.title}</p>
            <p className={win ? 'rain2' : 'heat2'}>{each.name}</p>
            <div className="actor2">
              <p className={win ? 'rain3' : 'heat3'}>{each.viewCount} views</p>

              <p className={win ? 'rain4' : 'heat4'}>
                {formatDistanceToNow(new Date(each.publishedAt))} ago
              </p>
            </div>
          </div>
        </Link>
      </li>
    )
  }
}
export default SavedList
