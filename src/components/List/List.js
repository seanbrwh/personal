import React, { Component } from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import axios from 'axios'

class List extends Component {
  saveList(){
    let cpu = this.props.cpu
    let compcase = '1'
    let cpucooler = '2'
    let memory = '3'
    let motherboard = '4'
    let powersupply = '5'
    let storage = '6'
    let videocard = '7'
    axios.post('/api/addList',{compcase,cpu,cpucooler,memory,motherboard,powersupply,storage,videocard}
  ).then(res=>{
    console.log(res.data);
  })
  }
  render() {
    return (
      <div>
        <button onClick={()=>this.saveList()}>Save</button>
      </div>
    )
  }
}
function mapState(state){
  let {cpu} = state
  return{
    cpu
  }
}
export default withRouter(connect(mapState)(List))