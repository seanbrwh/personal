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
      // console.log(res.data);
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
    let user = this.props.session.user_id
    let cpu = Number(this.props.cpu)
    let compcase = Number(this.props.compcase)
    let cpucooler = Number(this.props.cpucooler)
    let memory = Number(this.props.memory)
    let motherboard = Number(this.props.motherboard)
    let powersupply = Number(this.props.psu)
    let storage = Number(this.props.storage)
    let videocard = Number(this.props.videoCard)
    axios.post('/api/addList',{compcase,cpu,cpucooler,memory,motherboard,powersupply,storage,videocard,user}
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
  updateList(oldcpu,oldCompcase,oldCooler,oldMb,oldMem,oldPsu,oldStorage,oldVid,list_id){
    let user = this.props.session.user_id
    this.state.cpu.map(e=>{      
      let newCpu = e.cpu_id
      if(oldcpu !== newCpu){
        axios.put('/api/update_cpu',{newCpu,user,list_id}).then(res=>{
          console.log(res.data);
        })
        this.getData()
      }
    })
    this.state.compcase.map(e=>{
      let newCompCase = e.case_id
      if(oldCompcase !== newCompCase){
        axios.put('/api/update_case',{newCompCase,user,list_id}).then(res=>{
          console.log(res.data);
        })
        this.getData()
      }
    })
    this.state.cpuCooler.map(e=>{
      let newCooler = e.cooler_id
      if(oldCooler !== newCooler){
        axios.put('/api/update_cooler',{newCooler,user,list_id}).then(res=>{
          console.log(res.data);
        })
        this.getData()
      }
    })
    this.state.motherboard.map(e=>{
      let newMb = e.mb_id
      if(oldMb !== newMb){
        axios.put('/api/update_mb',{newMb,list_id,user}).then(res=>{
          console.log(res.data);
        })
        this.getData()
      }
    })
    this.state.memory.map(e=>{
      let newMem = e.mem_id
      if(oldMem !== newMem){
        axios.put('/api/update_mem',{newMem,list_id,user}).then(res=>{
          console.log(res.data);
        })
        this.getData()
      }
    })
    this.state.psu.map(e=>{
      let newPsu = e.psu_id
      if(oldPsu !== newPsu){
        axios.put('/api/update_psu',{newPsu,list_id,user}).then(res=>{
          console.log(res.data);
        })
        this.getData()
      }
    })
    this.state.storage.map(e=>{
      let newStorage = e.storage_id
      if(oldStorage !== newStorage){
        axios.put('/api/update_storage',{newStorage,list_id,user}).then(res=>{
          console.log(res.data);
        })
        this.getData()
      }
    })
    this.state.videoCard.map(e=>{
      let newVid = e.vid_id
      if(oldVid !== newVid){
        axios.put('/api/update_vid',{newVid,list_id,user}).then(res=>{
          console.log(res.data);
        })
        this.getData()
      }
    })
    
  }
  render() {
    return (
      <div style={{width:'100%', height:'100%', display:'flex', justifyContent:'space-around', alignItems:'center', flexDirection:'column', background:'rgb(127,127,127)'}}>
        <div style={{width:'100%', height:'100%'}}>
        {      
          this.state.list.map(e=>{
            return(
              <div style={{background:'rgb(64,64,64)', display:'flex',justifyContent:'space-evenly', alignItems:'center', flexDirection:'column', borderRadius:'10px', padding:'10px',marginTop:'20px'}}>  
                <p style={{color:'rgb(229,229,229)'}}>{e.cpumodel}</p>
                <p style={{color:'rgb(229,229,229)'}}>{e.ccmodel}</p>
                <p style={{color:'rgb(229,229,229)'}}>{e.mbmodel}</p>
                <p style={{color:'rgb(229,229,229)'}}>{e.memmodel}</p>
                <p style={{color:'rgb(229,229,229)'}}>{e.stmodel}</p>
                <p style={{color:'rgb(229,229,229)'}}>{e.casemodel}</p>
                <p style={{color:'rgb(229,229,229)'}}>{e.psumodel}</p>
                <p style={{color:'rgb(229,229,229)'}}>{e.vidmodel}</p>
                <span style={{margin:'5px'}} onClick={()=> this.delete_list(e.list_id)}><i style={{color:'rgb(225,225,225'}} class="fa fa-trash-o" aria-hidden="true"></i>

                </span>
                <span style={{margin:'5px'}} key={e.list_id} onClick={()=>this.updateList(e.cpu_id,e.case_id,e.cooler_id,e.mb_id,e.mem_id,e.psu_id,e.storage_id,e.vid_id,e.list_id)}><i style={{color:'rgb(225,225,225'}} class="fa fa-pencil-square-o" aria-hidden="true"></i>
                </span>             
              </div>
            )
          })
          
        }
        <div style={{background:'rgb(64,64,64)', display:'flex',justifyContent:'space-evenly', alignItems:'center', flexDirection:'column', borderRadius:'10px', padding:'10px', marginTop:'10px'}}>
        {
          this.state.cpu.map(e=>{
            return(
              <div key={e.cpu_id}>
              <p style={{color:'rgb(229,229,229)'}}>
                {e.cpumodel}
              </p>
              </div>
            )
          })
        }
        {
          this.state.compcase.map(e=>{
            return(
              <div key={e.case_id}>
              <p style={{color:'rgb(229,229,229)'}}>
                {e.casemodel}
              </p>
              </div>
            )
          })
        }
        {
          this.state.cpuCooler.map(e=>{
            return(
              <div key={e.cooler_id}>
                <p style={{color:'rgb(229,229,229)'}}>
                {e.ccmodel}
                </p>
              </div>
            )
          })
        }
        {
          this.state.memory.map(e=>{
            return(
              <div key={e.mem_id}>
                <p style={{color:'rgb(229,229,229)'}}>
                {e.memmodel}
                </p>
              </div>
            )
          })
        }
        {
          this.state.motherboard.map(e=>{
            return(
              <div key={e.mb_id}>
                <p style={{color:'rgb(229,229,229)'}}>
                {e.mbmodel}
                </p>
              </div>
            )
          })
        }
        {
          this.state.psu.map(e=>{
            return(
              <div key={e.psu_id}>
                <p style={{color:'rgb(229,229,229)'}}>
                {e.psumodel}
                </p>
              </div>
            )
          })
        }
        {
          this.state.storage.map(e=>{
            return(
              <div key={e.storage_id}>
                <p style={{color:'rgb(229,229,229)'}}>
                {e.stmodel}
                </p>
              </div>
            )
          })
        }
        {
          this.state.videoCard.map(e=>{
            return(
              <div key={e.vid_id}>
                <p style={{color:'rgb(229,229,229)'}}>
                {e.vidmodel}
                </p>
              </div>
            )
          })
        }
        <span onClick={
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
          }><i style={{color:'rgb(225,225,225)'}} class="fa fa-floppy-o" aria-hidden="true"></i></span>
        </div>
        </div>                        
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