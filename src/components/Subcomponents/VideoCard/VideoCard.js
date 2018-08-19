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
                  <Accordion  style={{width:'100%',overflow:'hidden'}}>
                    <AccordionItem>
                    <AccordionItemTitle style={{background:'rgb(64,64,64)', color:'rgb(229,229,229)',fontWeight:'bold'}}>
                      <div style={{
                        display:'flex',
                        justifyContent:'space-evenly',
                        alignItems:'center',
                        flexDirection:'column',    
                        textAlign:'center'
                      }}>
                        <p>{e.vidmodel}</p>

                      </div>
                    </AccordionItemTitle>
                    <AccordionItemBody  style={{background:'rgb(127,127,127)'}}>
                      <div style={{
                        display:'flex',
                        justifyContent:'space-evenly',
                        alignItems:'center',
                        flexDirection:'column',                      
                      }}>
                      Manufacturer
                        <p style={{textAlign:'center',color:'rgb(229,229,229)'}}>
                          {e.vidmanufacturer}
                        </p>
                        <hr style={{width:'180px',height:'2px',border:'0',borderTop:'1px solid black',lineHeight:'1px',marginTop:'-5px'}}/>
                        Part Number
                        <p style={{textAlign:'center',color:'rgb(229,229,229)'}}>
                          {e.vidpartnum}
                        </p>
                        <hr style={{width:'180px',height:'2px',border:'0',borderTop:'1px solid black',lineHeight:'1px',marginTop:'-5px'}}/>
                        Thermal Design Power
                        <p style={{textAlign:'center',color:'rgb(229,229,229)'}}>
                          {e.vidtdp}
                        </p>
                        <hr style={{width:'180px',height:'2px',border:'0',borderTop:'1px solid black',lineHeight:'1px',marginTop:'-5px'}}/>
                        Memory
                        <p style={{textAlign:'center',color:'rgb(229,229,229)'}}>
                          {e.vidmem_size}
                        </p>
                        <hr style={{width:'180px',height:'2px',border:'0',borderTop:'1px solid black',lineHeight:'1px',marginTop:'-5px'}}/>
                        Core Clock
                        <p style={{textAlign:'center',color:'rgb(229,229,229)'}}>
                          {e.vidcore_clock}
                        </p>
                        <hr style={{width:'180px',height:'2px',border:'0',borderTop:'1px solid black',lineHeight:'1px',marginTop:'-5px'}}/>
                        Video Card Length
                        <p style={{textAlign:'center',color:'rgb(229,229,229)'}}>
                          {e.vidfan_length}
                        </p>
                        <hr style={{width:'180px',height:'2px',border:'0',borderTop:'1px solid black',lineHeight:'1px',marginTop:'-5px'}}/>
                        Video Outputs
                        <p style={{textAlign:'center',color:'rgb(229,229,229)'}}>
                          {e.vidoutputs}
                        </p>
                        <hr style={{width:'180px',height:'2px',border:'0',borderTop:'1px solid black',lineHeight:'1px',marginTop:'-5px'}}/>
                      <span onClick={()=>this.saveItem(e.vid_id)}><i className="fa fa-plus" aria-hidden="true"></i>
                      </span>
                      {
                        this.state.itemToggle === true
                        ? <p>item Added</p>
                        : null
                      }
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