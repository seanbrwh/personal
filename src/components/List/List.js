import React, { Component } from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import axios from 'axios'

class List extends Component {
  constructor(){
    super()
    this.state = {
      list:[],
      compcase:[],
      cpu:[],
      cpuCooler:[],
      memory:[],
      motherboard:[],
      psu:[],
      storage:[],
      videoCard:[]
    }
  }
  getData(){
    let user_id = this.props.session.user_id
    axios.post('/api/getlist',{user_id}).then(res=>{
      this.setState({list:res.data})
      // console.log(res.data);
    })
  }
  componentDidMount(){
    let caseid = Number(this.props.compcase)
    let cpuid = Number(this.props.cpu)
    let coolerid = Number(this.props.cpucooler)
    let memid = Number(this.props.memory)
    let mbid = Number(this.props.motherboard)
    let psuid = Number(this.props.psu)
    let stid = Number(this.props.storage)
    let vidid = Number(this.props.videoCard)
    let user_id = this.props.session.user_id
    axios.post('/api/getlist',{user_id}).then(res=>{
      this.setState({list:res.data})
      console.log(res.data);
    })
    axios.post('/api/getitems',
    {caseid,cpuid,coolerid,memid,mbid,psuid,stid,vidid}).then(res=>{
      // console.log(res.data);
      this.setState({
        compcase:res.data[0],
        cpu:res.data[1],
        cpuCooler:res.data[2],
        memory:res.data[3],
        motherboard:res.data[4],
        psu:res.data[5],
        storage:res.data[6],
        videoCard:res.data[7]
      })
    })
  }
  saveList(){
    let cpu = Number(this.props.cpu)
    let compcase = Number(this.props.compcase)
    let cpucooler = Number(this.props.cpucooler)
    let memory = Number(this.props.memory)
    let motherboard = Number(this.props.motherboard)
    let powersupply = Number(this.props.psu)
    let storage = Number(this.props.storage)
    let videocard = Number(this.props.videoCard)
    axios.post('/api/addList',{compcase,cpu,cpucooler,memory,motherboard,powersupply,storage,videocard}
  ).then(res=>{
    console.log(res.data);
  })
  this.getData()
  }
  delete_list(list_id){
      axios.delete(`/api/deletelist/${list_id}`).then(response=>{
        console.log(response.data);
      })
      this.getData()
  }
  alert(){
    alert('You need a full list to save')
  }
  render() {
    console.log(this.state.list);
    return (
      <div>
        {
          this.state.list.map(e=>{
            return(
              <div key={e.list_id}>
                LIST
                <p>{e.casemodel}</p>
                <p>{e.cpumodel}</p>
                <p>{e.stmodel}</p>
                <p>{e.ccmodel}</p>
                <p>{e.memmodel}</p>
                <p>{e.mbmodel}</p>
                <span onClick={()=> this.delete_list(e.list_id)}>Delete</span>
                <span onClick={()=>this.updateList(e.list_id)}>Update</span>
              </div>
            )
          })
        }
        state LIST
        {
          this.state.cpu.map(e=>{
            return(
              <div key={e.product_id}> 
                {e.cpumodel}
              </div>
            )
          })
        }
        {
          this.state.cpuCooler.map(e=>{
            return(
              <div key={e.product_id}> 
                {e.ccmodel}
              </div>
            )
          })
        }
        <button onClick={
          this.props.compcase === [] &&
          this.props.cpu ===  [] &&
          this.props.cpucooler === [] &&
          this.props.memory === [] &&
          this.props.motherboard === [] &&
          this.props.psu === [] &&
          this.props.storage === [] &&
          this.props.videoCard === []
          ?
          ()=>this.alert()
          :()=>this.saveList()
          }>Save</button>
      </div>
    )
  }
}
function mapState(state){
  let {compcase,cpu,cpucooler,memory,motherboard,psu,storage,videoCard,session} = state
  return{
    compcase,cpu,cpucooler,memory,motherboard,psu,storage,videoCard,session
  }
}
export default withRouter(connect(mapState)(List))