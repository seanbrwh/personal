import React, { Component } from 'react'
import axios from 'axios'

export default class Case extends Component {
  constructor(){
    super()
    this.state={
      case:[]
    }
  }
  componentDidMount(){
    axios.get('/api/getdatabase').then(res=>{
      this.setState({case:res.data[0]})
    })
  }
  render() {
    return (
      <div>
        {
          this.state.case.map(e=>{
            return(
              <div key={e.id}>
                <h4>{e.casemodel}</h4>
              </div>
            )
          })
        }
      </div>
    )
  }
}
