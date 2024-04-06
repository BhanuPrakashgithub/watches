import {Switch, Route} from 'react-router-dom'
import {Component} from 'react'
import Login from './components/Login'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import Language from './context/lang'
import './App.css'

// Replace your code here
class App extends Component {
  state = {array1: []}

  add = obj => {
    this.setState(prev => ({array1: [...prev.array1, obj]}))
  }

  delete = obj => {
    this.setState(prev => {
      const latest = prev.array1.filter(each => each.id !== obj.id)
      return {array1: latest}
    })
  }

  render() {
    const {array1} = this.state
    return (
      <Language.Provider
        value={{
          activeArray: array1,
          addItem: this.add,
          removeItem: this.delete,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/trending" component={Trending} />
          <Route exact path="/gaming" component={Gaming} />
          <Route exact path="/saved-videos" component={SavedVideos} />
          <Route exact path="/videos/:id" component={VideoItemDetails} />
          <Route component={NotFound} />
        </Switch>
      </Language.Provider>
    )
  }
}

export default App
