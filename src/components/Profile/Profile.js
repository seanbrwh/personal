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
      <div style={{width:'100%', height:'100vh', display:'flex', justifyContent:'space-around', alignItems:'center', flexDirection:'column',background:'rgb(127,127,127)',paddingTop:'15px'}}>
      <span onClick={()=>this.logOut()}><i style={{color:'rgb(225,225,225)'}} class="fa fa-sign-out" aria-hidden="true"></i>
      </span>
      <List/>    
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