import React, { Component } from 'react'
import axios from 'axios'
import {getUser,logOut} from '../../ducks/reducer'
import {connect} from 'react-redux'
import {withRouter,Link} from 'react-router-dom'

class Profile extends Component {
  componentWillMount(){
    axios.get('/api/user').then(res=>{
      this.props.getUser(res.data)
    })
  }
  LogOur(){
    axios.get('/api/logout').then(res=>{
      this.props.logOut(res.data)
    })
    window.location = `http:localhost:3000/#/`
  }
  render() {
    return (
      <div>
        <Link to='/biglist'><span>BUILD</span></Link>
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