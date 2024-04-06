import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import './index.css'

class Trends extends Component {
  render() {
    const {item, backChange} = this.props
    return (
      <li className="skins">
        <Link to={`/videos/${item.id}`} className="paint">
          <img
            src={item.thumbnailUrl}
            className="cursor"
            alt="video thumbnail"
          />
          <div className="actor1">
            <p className={backChange ? 'rain1' : 'heat1'}>{item.title}</p>
            <p className={backChange ? 'rain2' : 'heat2'}>{item.name}</p>
            <div className="actor2">
              <p className={backChange ? 'rain3' : 'heat3'}>
                {item.viewCount} views
              </p>

              <p className={backChange ? 'rain4' : 'heat4'}>
                {formatDistanceToNow(new Date(item.publishedAt))} ago
              </p>
            </div>
          </div>
        </Link>
      </li>
    )
  }
}
export default Trends
