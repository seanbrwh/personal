import React, { Component } from 'react'
import axios from 'axios'

export default class Storage extends Component {
  constructor(){
    super()
    this.state={
      storage:[]
    }
  }
  componentDidMount(){
    axios.get('/api/getdatabase').then(res=>{
      this.setState({storage:res.data[6]})
    })
  }
  render() {
    return (
      <div>
        {
          this.state.storage.map(e=>{
            return(
              <div key={e.id}>
                <h4>{e.stmodel}</h4>
              </div>
            )
          })
        }
      </div>
    )
  }
}
