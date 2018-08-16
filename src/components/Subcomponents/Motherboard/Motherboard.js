import React, { Component } from 'react'
import axios from 'axios'

export default class Motherboard extends Component {
  constructor(){
    super()
    this.state={
      motherboard:[]
    }
  }
  componentDidMount(){
    axios.get('/api/getdatabase').then(res=>{
      this.setState({motherboard:res.data[4]})
    })
  }
  render() {
    return (
      <div>
        {
          this.state.motherboard.map(e=>{
            return(
              <div key={e.id}>
                <h4>{e.mbmodel}</h4>
              </div>
            )
          })
        }
      </div>
    )
  }
}
