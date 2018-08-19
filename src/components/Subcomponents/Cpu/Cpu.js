import React, { Component } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {addCpu} from '../../../ducks/reducer'

import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion';


import 'react-accessible-accordion/dist/fancy-example.css';

class Cpu extends Component {
  constructor(){
    super()
    this.state={
      cpu:[],
      itemToggle:false
    }    
  }
  componentDidMount(){
    axios.get('/api/getdatabase').then(res=>{
      this.setState({cpu:res.data[1]})
    })
  }
  saveItem(product){
    this.props.addCpu(product)
    this.setState({itemToggle:true})    
  }
  render() {
    // console.log(this.state.cpu)
    return (
      <div style={{width:'100%',overflow:'hidden'}}>
        {
          this.state.cpu.map(e=>{
            return(
              <div className='Cpu' key={e.id}>            
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
                        <p>{e.cpumodel}</p>

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
                          {e.cpumanufacturer}
                        </p> 
                        
                        <hr style={{width:'180px',height:'2px',border:'0',borderTop:'1px solid black',lineHeight:'1px',}}/>
                        Core count
                        <p style={{textAlign:'center',color:'rgb(229,229,229)'}}>
                          {e.cpucores}
                        </p> 
                        <hr style={{width:'180px',height:'2px',border:'0',borderTop:'1px solid black',lineHeight:'1px',}}/>
                        Cpu Socket
                        <p style={{textAlign:'center',color:'rgb(229,229,229)'}}>
                          {e.cpusocket}
                        </p> 
                        <hr style={{width:'180px',height:'2px',border:'0',borderTop:'1px solid black',lineHeight:'1px',}}/>
                        Part number
                        <p style={{textAlign:'center',color:'rgb(229,229,229)'}}>
                          {e.cpupartnum}
                        </p> 
                        <hr style={{width:'180px',height:'2px',border:'0',borderTop:'1px solid black',lineHeight:'1px',}}/>
                        Core frequency
                        <p style={{textAlign:'center',color:'rgb(229,229,229)'}}>
                          {e.cpufrenquency}
                        </p> 
                        <hr style={{width:'180px',height:'2px',border:'0',borderTop:'1px solid black',lineHeight:'1px',}}/>
                        Turbo frequency
                        <p style={{textAlign:'center',color:'rgb(229,229,229)'}}>
                          {e.cputurbo}
                        </p> 
                        <hr style={{width:'180px',height:'2px',border:'0',borderTop:'1px solid black',lineHeight:'1px',}}/>
                         Thermal design Power
                        <p style={{textAlign:'center',color:'rgb(229,229,229)'}}>
                          {e.cputdp}
                        </p> 
                         <hr style={{width:'180px',height:'2px',border:'0',borderTop:'1px solid black',lineHeight:'1px',}}/>
                         Multithreaded
                        <p style={{textAlign:'center',color:'rgb(229,229,229)'}}>
                          {e.cpumultithread}
                        </p> 
                         <hr style={{width:'180px',height:'2px',border:'0',borderTop:'1px solid black',lineHeight:'1px',}}/>
                         Maximum Memory
                        <p style={{textAlign:'center',color:'rgb(229,229,229)'}}>
                          {e.cpumaxmem}
                        </p> 
                         <hr style={{width:'180px',height:'2px',border:'0',borderTop:'1px solid black',lineHeight:'1px',}}/>
                         Integrated Graphics
                        <p style={{textAlign:'center',color:'rgb(229,229,229)'}}>
                          {e.cpuintgraphics}
                        </p> 
                         <hr style={{width:'180px',height:'2px',border:'0',borderTop:'1px solid black',lineHeight:'1px',}}/>
                         Includes cooler
                        <p style={{textAlign:'center',color:'rgb(229,229,229)'}}>
                          {e.cpuincluded_cooler}
                        </p> 
                         <hr style={{width:'180px',height:'2px',border:'0',borderTop:'1px solid black',lineHeight:'1px',}}/>
                      <span onClick={()=>this.saveItem(e.cpu_id)}> 
                      <i style={{width:'10px',height:'10px', color:'rgb(225,225,225)'}} className="fa fa-plus" aria-hidden="true"></i>
                      </span>
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
  let {cpu} = state
  return{
    cpu
  }
}
export default withRouter(connect(mapState,{addCpu})(Cpu))