import React, { Component } from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {addVideoCard} from '../../../ducks/reducer'

import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion';

class VideoCard extends Component {
  constructor(){
    super()
    this.state={
      videocard:[],
      itemToggle:false
    }
  }
  componentDidMount(){
    axios.get('/api/getdatabase').then(res=>{
      this.setState({videocard:res.data[7]})
    })
  }
  saveItem(product){
    this.props.addVideoCard(product)
    this.setState({itemToggle:true})    
  }
  render() {
    console.log(this.state);
    return (
      <div>
        {
          this.state.videocard.map(e=>{
            return(
              <div className='videocard' key={e.id}>            
                  <Accordion>
                    <AccordionItem>
                    <AccordionItemTitle>
                      <div style={{
                        display:'flex',
                        justifyContent:'space-evenly',
                        alignItems:'center',
                        flexDirection:'column',    
                      }}>
                        <p>{e.vidmodel}</p>

                      </div>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                      <div style={{
                        display:'flex',
                        justifyContent:'space-evenly',
                        alignItems:'center',
                        flexDirection:'column',                      
                      }}>
                        <p>
                          {e.vidmanufacturer}
                        </p>
                        <p>
                          {e.vidpartnum}
                        </p>
                        <p>
                          {e.vidtdp}
                        </p>
                        <p>
                          {e.vidmem_size}
                        </p>
                        <p>
                          {e.vidcore_clock}
                        </p>
                        <p>
                          {e.vidfan_length}
                        </p>
                        <p>
                          {e.vidoutputs}
                        </p>
                      <span onClick={()=>this.saveItem(e.id)}><i className="fa fa-plus" aria-hidden="true"></i>
                      {
                        this.state.itemToggle === true
                        ? <p>item Added</p>
                        : null
                      }</span>
                      </div>
                    </AccordionItemBody>
                    </AccordionItem>
                  </Accordion>
              </div>
            )
          })
        }
      </div>
    )
  }
}
function mapState(state){
  let {videoCard} = state
  return{
    videoCard
  }
}
export default withRouter(connect(mapState,{addVideoCard})(VideoCard))