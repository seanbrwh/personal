import React, { Component } from 'react'
import axios from 'axios'
import {getUser,logOut} from '../../ducks/reducer'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import List from '../List/List'



class Profile extends Component {
  componentWillMount(){
    axios.get('/api/user').then(res=>{
      this.props.getUser(res.data)
    })
  }
  logOut(){
    axios.get('/api/logout').then(res=>{
      this.props.logOut(res.data)
    })
    window.location = `http:localhost:3000/#/`
  }
  render() {
    
    return (
      <div>
      <h1>List</h1>
      <List/>
      <span>Save List</span>
      <span>Update List</span>
      <span onClick={()=>this.logOut()}>Logout</span>
      </div>
    )
  }
}
function mapState(state){
  let {session} = state
  return{
    session
  }
}
export default withRouter(connect(mapState,{getUser,logOut})(Profile))