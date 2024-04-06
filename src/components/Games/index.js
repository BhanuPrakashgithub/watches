import {Component} from 'react'
import {Link} from 'react-router-dom'
import {List, Image, Paras, Param} from './style'

class Games extends Component {
  render() {
    const {item, backChange} = this.props
    return (
      <List>
        <Link to={`/videos/${item.id}`} style={{textDecoration: 'none'}}>
          <Image src={item.thumbnailUrl} alt="video thumbnail" />
          <Paras colour={backChange ? '#ffffff' : '#000000'}>
            {item.title}
          </Paras>
          <Param colour={backChange ? '#ebebeb' : '#7e858e'}>
            {item.viewCount} Watching Worldwide
          </Param>
        </Link>
      </List>
    )
  }
}
export default Games
