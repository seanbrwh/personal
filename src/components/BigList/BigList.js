import React, { Component } from 'react'

import {Link} from 'react-router-dom'

export default class BigList extends Component {
  render() {
    return (
      <div>
        <Link to='/cpu'>
          <h3>Cpu</h3>
        </Link>
        <Link to='/cpucooler'>
          <h3>Cpu Cooler</h3>
        </Link>
        <Link to='/motherboard'>
          <h3>Motherboard</h3>
        </Link>
        <Link to='/memory'>
          <h3>Memory</h3>
        </Link>
        <Link to='/storage'>
          <h3>Storage</h3>
        </Link>
        <Link to='/powersupply'>
          <h3>Power Supply</h3>
        </Link>
        <Link to='/videocard'>
          <h3>Video card</h3>
        </Link>
        <Link to='/case'>
          <h3>Case</h3>
        </Link>
      </div>
    )
  }
}
