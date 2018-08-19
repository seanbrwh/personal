import React, { Component } from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {addMemory} from '../../../ducks/reducer'

import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion';

class Memory extends Component {
  constructor(){
    super()
    this.state={
      memory:[],
      itemToggle:false
    }
  }
  componentDidMount(){
    axios.get('/api/getdatabase').then(res=>{
      this.setState({memory:res.data[3]})
    })
  }
  saveItem(product){
    this.props.addMemory(product)
    this.setState({itemToggle:true})    
  }
  render() {
    return (
      <div>
        {
          this.state.memory.map(e=>{
            return(
              <div className='memory' key={e.id}>            
                  <Accordion style={{width:'100%',overflow:'hidden'}}>
                    <AccordionItem>
                    <AccordionItemTitle style={{background:'rgb(64,64,64)', color:'rgb(229,229,229)',fontWeight:'bold'}}>
                      <div style={{
                        display:'flex',
                        justifyContent:'space-evenly',
                        alignItems:'center',
                        flexDirection:'column',
                        textAlign:'center'    
                      }}>
                        <p>{e.memmodel}</p>

                      </div>
                    </AccordionItemTitle>
                    <AccordionItemBody style={{background:'rgb(127,127,127)'}}>
                      <div style={{
                        display:'flex',
                        justifyContent:'space-evenly',
                        alignItems:'center',
                        flexDirection:'column',                      
                      }}>
                        Manufacturer
                        <p style={{textAlign:'center',color:'rgb(229,229,229)'}}>
                          {e.memmanufacturer}
                        </p>
                        <hr style={{width:'180px',height:'2px',border:'0',borderTop:'1px solid black',lineHeight:'1px',marginTop:'-5px'}}/>    
                        Part Number                    
                        <p style={{textAlign:'center',color:'rgb(229,229,229)'}}>
                          {e.mempartnum}
                        </p>
                        <hr style={{width:'180px',height:'2px',border:'0',borderTop:'1px solid black',lineHeight:'1px',marginTop:'-5px'}}/>
                        Memory speed
                        <p style={{textAlign:'center',color:'rgb(229,229,229)'}}>
                          {e.memspeed}
                        </p>
                        <hr style={{width:'180px',height:'2px',border:'0',borderTop:'1px solid black',lineHeight:'1px',marginTop:'-5px'}}/>
                        Memory size
                        <p style={{textAlign:'center',color:'rgb(229,229,229)'}}>
                          {e.memsize}
                        </p>
                        <hr style={{width:'180px',height:'2px',border:'0',borderTop:'1px solid black',lineHeight:'1px',marginTop:'-5px'}}/>
                        Cas Latency
                        <p style={{textAlign:'center',color:'rgb(229,229,229)'}}>
                          {e.memcas_latency}
                        </p>
                        <hr style={{width:'180px',height:'2px',border:'0',borderTop:'1px solid black',lineHeight:'1px',marginTop:'-5px'}}/>
                      <span onClick={()=>this.saveItem(e.mem_id)}><i className="fa fa-plus" aria-hidden="true"></i></span>
                      {
                        this.state.itemToggle === true
                        ? <p>item Added</p>
                        :null
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
  let {memory} = state
  return{
    memory
  }
}
export default withRouter(connect(mapState,{addMemory})(Memory))