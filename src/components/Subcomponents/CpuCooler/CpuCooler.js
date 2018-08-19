import React, { Component } from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {addCooler} from '../../../ducks/reducer'

import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion';

class CpuCooler extends Component {
  constructor(){
    super()
    this.state={
      cpucooler:[],
      itemToggle:false
    }
  }
  componentDidMount(){
    axios.get('/api/getdatabase').then(res=>{
      this.setState({cpucooler:res.data[2]})
    })
  }
  saveItem(product){
    this.props.addCooler(product)
    this.setState({itemToggle:true})
  }
  render() {
    return (
      <div>
        {
          this.state.cpucooler.map(e=>{
            return(
              <div className='cooler' key={e.id}>            
                  <Accordion style={{width:'100%',overflow:'hidden'}}>
                    <AccordionItem>
                    <AccordionItemTitle style={{background:'rgb(64,64,64)', color:'rgb(229,229,229)',fontWeight:'bold'}}>
                      <div style={{
                        display:'flex',
                        justifyContent:'space-evenly',
                        alignItems:'center',
                        flexDirection:'column',
                        textAlign:'centers'    
                      }}>
                        <p>{e.ccmodel}</p>

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
                          {e.ccmanufacturer}
                        </p>
                         <hr style={{width:'180px',height:'2px',border:'0',borderTop:'1px solid black',lineHeight:'1px',marginTop:'-5px'}}/>
                        Part Number
                        <p style={{textAlign:'center',color:'rgb(229,229,229)'}}>                        
                          {e.ccpartnum}
                        </p>
                         <hr style={{width:'180px',height:'2px',border:'0',borderTop:'1px solid black',lineHeight:'1px',marginTop:'-5px'}}/>                        
                         <hr style={{width:'180px',height:'2px',border:'0',borderTop:'1px solid black',lineHeight:'1px',marginTop:'-5px'}}/>
                         Supported Sockets
                        <p style={{textAlign:'center',color:'rgb(229,229,229)'}}>
                          {e.ccsupp_sockets}
                        </p>
                         <hr style={{width:'180px',height:'2px',border:'0',borderTop:'1px solid black',lineHeight:'1px',marginTop:'-5px'}}/>
                        Liquid Cooled
                        <p style={{textAlign:'center',color:'rgb(229,229,229)'}}>
                          {e.ccliquid}
                        </p>
                         <hr style={{width:'180px',height:'2px',border:'0',borderTop:'1px solid black',lineHeight:'1px',marginTop:'-5px'}}/>
                        height
                        <p style={{textAlign:'center',color:'rgb(229,229,229)'}}>
                          {e.ccc_height}
                        </p>
                         <hr style={{width:'180px',height:'2px',border:'0',borderTop:'1px solid black',lineHeight:'1px',marginTop:'-5px'}}/>
                      <span onClick={()=>this.saveItem(e.cooler_id)}><i className="fa fa-plus" aria-hidden="true"></i></span>
                      {
                        this.state.itemToggle === true
                        ? <p>Item added</p>
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
  let {cooler} = state
  return{
    cooler
  }
}
export default withRouter(connect(mapState,{addCooler})(CpuCooler))