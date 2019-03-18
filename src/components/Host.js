import React, {Component} from 'react';
import '../stylesheets/Host.css'
import { Card } from 'semantic-ui-react'
import HostInfo from './HostInfo'

class Host extends Component {
  constructor(){
    super()
    this.state = {
      selected: "host"
    }
  }

  handle = (e) => {
    this.props.hostFunc(this.props.id)
    if (this.state.selected === "host selected"){
      this.setState({selected: "host"})
    }
    else {
      this.setState({selected: "host selected"})
    }
  }

  render(){
    return(
      <div>
      <Card
        id={this.props.id}
        className={this.state.selected}
        onClick={() => this.handle()}
        image={this.props.img}
        raised
      />
      </div>
    )
  }

}

export default Host
