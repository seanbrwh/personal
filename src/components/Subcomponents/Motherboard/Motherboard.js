import React, { Component } from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {addMb} from '../../../ducks/reducer'

import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion';


class Motherboard extends Component {
  constructor(){
    super()
    this.state={
      motherboard:[],
      itemToggle:false
    }
  }
  componentDidMount(){
    axios.get('/api/getdatabase').then(res=>{
      this.setState({motherboard:res.data[4]})
    })
  }
  saveItem(product){
    this.props.addMb(product)
    this.setState({itemToggle:true})    
  }
  render() {
    return (
      <div style={{width:'100%',height:'100vh',background:'rgb(127,127,127)'}}>
        {
          this.state.motherboard.map(e=>{
            return(
              <div className='motherboard' key={e.id}>            
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
                        <p>{e.mbmodel}</p>

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
                        <p  style={{textAlign:'center',color:'rgb(229,229,229)'}}>
                          {e.mbmanufacturer}
                        </p>
                        <hr style={{width:'180px',height:'2px',border:'0',borderTop:'1px solid black',lineHeight:'1px',marginTop:'-5px'}}/>
                        Part Number
                        <p  style={{textAlign:'center',color:'rgb(229,229,229)'}}>
                          {e.mbpartnum}
                        </p>
                        <hr style={{width:'180px',height:'2px',border:'0',borderTop:'1px solid black',lineHeight:'1px',marginTop:'-5px'}}/>
                        Form Factor
                        <p  style={{textAlign:'center',color:'rgb(229,229,229)'}}>
                          {e.mbform_factor}
                        </p>
                        <hr style={{width:'180px',height:'2px',border:'0',borderTop:'1px solid black',lineHeight:'1px',marginTop:'-5px'}}/>
                        Socket
                        <p  style={{textAlign:'center',color:'rgb(229,229,229)'}}>
                          {e.mbcpu_socket}
                        </p>
                        <hr style={{width:'180px',height:'2px',border:'0',borderTop:'1px solid black',lineHeight:'1px',marginTop:'-5px'}}/>
                        Memory slots
                        <p  style={{textAlign:'center',color:'rgb(229,229,229)'}}>
                          {e.mbmem_slot}
                        </p>
                        <hr style={{width:'180px',height:'2px',border:'0',borderTop:'1px solid black',lineHeight:'1px',marginTop:'-5px'}}/>
                        Memory Type
                        <p  style={{textAlign:'center',color:'rgb(229,229,229)'}}>
                          {e.mbmem_type}
                        </p>
                        <hr style={{width:'180px',height:'2px',border:'0',borderTop:'1px solid black',lineHeight:'1px',marginTop:'-5px'}}/>
                        Maximum Memory
                        <p  style={{textAlign:'center',color:'rgb(229,229,229)'}}>
                          {e.mbmax_mem}
                        </p>
                        <hr style={{width:'180px',height:'2px',border:'0',borderTop:'1px solid black',lineHeight:'1px',marginTop:'-5px'}}/>
                        Sata Connections
                        <p  style={{textAlign:'center',color:'rgb(229,229,229)'}}>
                          {e.mbsata}
                        </p>
                        <hr style={{width:'180px',height:'2px',border:'0',borderTop:'1px solid black',lineHeight:'1px',marginTop:'-5px'}}/>                        
                      <span onClick={()=>this.saveItem(e.mb_id)}><i className="fa fa-plus" aria-hidden="true"></i></span>
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
  let {motherboard} = state
  return{
    motherboard
  }
}
export default withRouter(connect(mapState, {addMb})(Motherboard))