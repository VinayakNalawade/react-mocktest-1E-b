import {Component} from 'react'

import {Route, Switch} from 'react-router-dom'

import ReactContext from './components/context/RegisterContext'

import './App.css'

import Register from './components/Register'

import NotFound from './components/NotFound'

import Home from './components/Home'

class App extends Component {
  state = {name: '', registered: false, topic: ''}

  changeRegistered = (name, topic) =>
    this.setState({topic, name, registered: true})

  render() {
    const {name, topic, registered} = this.state
    return (
      <ReactContext.Provider
        value={{
          name,
          topic,
          registered,
          changeRegistered: this.changeRegistered,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route component={NotFound} />
        </Switch>
      </ReactContext.Provider>
    )
  }
}

export default App
