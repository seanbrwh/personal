import React, { Component } from 'react'
import axios from 'axios'

export default class PowerSupply extends Component {
  constructor(){
    super()
    this.state={
      powerSupply:[]
    }
  }
  componentDidMount(){
    axios.get('/api/getdatabase').then(res=>{
      this.setState({powerSupply:res.data[5]})
    })
  }
  render() {
    return (
      <div>
        {
          this.state.powerSupply.map(e=>{
            return(
              <div key={e.id}>
                <h4>{e.psumodel}</h4>
              </div>
            )
          })
        }
      </div>
    )
  }
}
