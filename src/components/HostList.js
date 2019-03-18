import React from 'react'
import { Card } from 'semantic-ui-react'
import Host from './Host'
const HostList = (props) => {

  return(
    <Card.Group itemsPerRow={6}>
    {props.hosts.map(host => <Host id={host.id} img={host.imageUrl} hostFunc={props.hostFunc}/>)}
    </Card.Group>
  )
}

export default HostList
