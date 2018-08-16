import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Landing extends Component {
  login(){
    let {REACT_APP_DOMAIN,REACT_APP_CLIENT_ID} = process.env
    let url = encodeURIComponent(`http://localhost:3099/auth/callback`)
    window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${url}&response_type=code`
  }
  render() {
    return (
      <div>
        <Link to='/biglist'><span>BUILD</span></Link>
        <span onClick={this.login}>Login</span>
      </div>
    )
  }
}
