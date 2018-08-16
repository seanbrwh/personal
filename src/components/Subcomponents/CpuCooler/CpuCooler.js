import React, { Component } from 'react'
import axios from 'axios'

export default class CpuCooler extends Component {
  constructor(){
    super()
    this.state={
      cpucooler:[]
    }
  }
  componentDidMount(){
    axios.get('/api/getdatabase').then(res=>{
      this.setState({cpucooler:res.data[2]})
    })
  }
  render() {
    return (
      <div>
        {
          this.state.cpucooler.map(e=>{
            return(
              <div key={e.id}>
                <h4>{e.ccmodel}</h4>
              </div>
            )
          })
        }
      </div>
    )
  }
}
