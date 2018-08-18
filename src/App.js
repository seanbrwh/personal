import React, { Component } from 'react';
import Header from './components/Header/Header'
import routes from './routes'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'


class App extends Component {
  render() {
    return (
      <div>
        {
          this.props.session.id
        ?<Header/>
        : null
        }
        {routes}
        
      </div>
    );
  }
}
function mapState(state){
  let {session} = state  
  return{
    session
  }
}
export default withRouter(connect(mapState)(App));
