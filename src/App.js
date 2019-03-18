import React, { Component } from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react';
import WestworldMap from './components/WestworldMap'
import Headquarters from './components/Headquarters'

class App extends Component {

  constructor(){
    super()
    this.state = {
      hosts: [],
      areas: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:4000/hosts')
    .then(r => r.json())
    .then(r => this.setState({hosts: r}))

    fetch('http://localhost:4000/areas')
    .then(r => r.json())
    .then(r => this.setState({areas: r}))
  }


  render(){
    return (
      <Segment id='app'>
      <WestworldMap areas={this.state.areas}/>
      <Headquarters hosts={this.state.hosts} areas={this.state.areas}/>
      </Segment>
    )
  }
}

export default App;
