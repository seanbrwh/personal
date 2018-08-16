import React, { Component } from 'react'
import axios from 'axios'

export default class VideoCard extends Component {
  constructor(){
    super()
    this.state={
      videocard:[]
    }
  }
  componentDidMount(){
    axios.get('/api/getdatabase').then(res=>{
      this.setState({videocard:res.data[7]})
    })
  }
  render() {
    console.log(this.state);
    return (
      <div>
        {
          this.state.videocard.map(e=>{
            return(
              <div key={e.id}>
                <h4>{e.vidmodel}</h4>
              </div>
            )
          })
        }
      </div>
    )
  }
}
