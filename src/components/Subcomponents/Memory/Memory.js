import React, { Component } from 'react'
import axios from 'axios'

export default class Memory extends Component {
  constructor(){
    super()
    this.state={
      memory:[]
    }
  }
  componentDidMount(){
    axios.get('/api/getdatabase').then(res=>{
      this.setState({memory:res.data[3]})
    })
  }
  render() {
    return (
      <div>
        {
          this.state.memory.map(e=>{
            return(
              <div key={e.id}>
                <h4>{e.memmodel}</h4>
              </div>
            )
          })
        }
      </div>
    )
  }
}
