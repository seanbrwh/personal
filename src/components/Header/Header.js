import React, { Component } from 'react'
import styled from 'styled-components'
import {withRouter,Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getUser} from '../../ducks/reducer'
import axios from 'axios'

const Wrapper = styled.header`
  width:100%;
  height:15vh;
  background:rgb(35,35,35);
  display:flex;
  justify-content:space-around;
  align-items:center;
`
const textDec = {
  textDecoration:'none',
  color:'rgb(244,244,244)'
}

let picStyle = {
  width:'60px',
  height:'60px', 
  borderRadius:'30px'
}

class Header extends Component {
  componentWillMount(){
    axios.get('/api/user').then(res=>{
      this.props.getUser(res.data)
    })
  }
  render() {
    return (
      <Wrapper>
          <Link style={textDec} to='/biglist'>
            <i className='fa fa-list' style={{width:'10px', height:'10px'}}></i>
          </Link>
          <Link style={textDec} to='/profile'>
            <h3>{this.props.session.uname}</h3>
          </Link>
          <img style={picStyle} src={this.props.session.picture} alt=""/>
      </Wrapper>
    )
  }
}
function mapState(state){
  let {session} = state
  return {
    session
  }
}
export default withRouter(connect(mapState,{getUser})(Header))