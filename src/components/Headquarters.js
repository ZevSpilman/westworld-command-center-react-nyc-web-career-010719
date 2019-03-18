import React, { Component } from 'react';
import '../stylesheets/Headquarters.css';
import { Grid } from 'semantic-ui-react';
import ColdStorage from './ColdStorage'
import HostInfo from './HostInfo'
import LogPanel from './LogPanel'
import Details from './Details'

class Headquarters extends Component {
  // Remember, there's many ways to do this. This doesn't have to be a class component. It's up to you.
  constructor(){
    super()
    this.state = {
      user: ''
    }
  }

  setCurrentHost = (hostID) => {
    let foundHost = this.props.hosts.find(host => host.id === hostID)
    this.setState({user: foundHost})
    console.log(this.state);
  }



  render(){
    return(
      <Grid celled='internally'>
        <Grid.Column width={8}>
        <ColdStorage hosts={this.props.hosts} hostFunc={this.setCurrentHost} />
        {/* Something goes here.... */}

        </Grid.Column>
        <Grid.Column width={5}>
          <Details clickedHost={this.state.user} areas={this.props.areas}/>
        </Grid.Column>
        <Grid.Column width={3}>
        <LogPanel />
        {/* and here. Take visual cues from the screenshot/video in the Readme. */}

        </Grid.Column>
      </Grid>
    )
  }
}

export default Headquarters;
