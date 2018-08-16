import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Wrapper = styled.div`
  width:100%;
  height:100vh;
  display:flex;
  justify-content:space-around;
  align-items:center;
  flex-direction:column;
`
const linkStyle = {
  textDecoration:'none',
  color:'#000000'
}

export default class BigList extends Component {
  render() {
    return (
      <Wrapper>
        <Link style={linkStyle} to='/cpu'>
          <h3>Cpu</h3>
        </Link>
        <Link style={linkStyle} to='/cpucooler'>
          <h3>Cpu Cooler</h3>
        </Link>
        <Link style={linkStyle} to='/motherboard'>
          <h3>Motherboard</h3>
        </Link>
        <Link style={linkStyle} to='/memory'>
          <h3>Memory</h3>
        </Link>
        <Link style={linkStyle} to='/storage'>
          <h3>Storage</h3>
        </Link>
        <Link style={linkStyle} to='/powersupply'>
          <h3>Power Supply</h3>
        </Link>
        <Link style={linkStyle} to='/videocard'>
          <h3>Video card</h3>
        </Link>
        <Link style={linkStyle} to='/case'>
          <h3>Case</h3>
        </Link>
      </Wrapper>
    )
  }
}
