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
    console.log(this.state.cpu)
    return (
      <div>
        {
          this.state.cpu.map(e=>{
            return(
              <div className='Cpu' key={e.id}>            
                  <Accordion>
                    <AccordionItem>
                    <AccordionItemTitle>
                      <div style={{
                        display:'flex',
                        justifyContent:'space-evenly',
                        alignItems:'center',
                        flexDirection:'column',    
                      }}>
                        <p>{e.cpumodel}</p>

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
                          {e.cpumanufacturer}
                        </p>
                        <p>
                          {e.cpucores}
                        </p>
                        <p>
                          {e.cpusocket}
                        </p>
                        <p>
                          {e.cpupartnum}
                        </p>
                        <p>
                          {e.cpufrenquency}
                        </p>
                        <p>
                          {e.cputurbo}
                        </p>
                        <p>
                          {e.cputdp}
                        </p>
                        <p>
                          {e.cpumultithread}
                        </p>
                        <p>
                          {e.cpumaxmem}
                        </p>
                        <p>
                          {e.cpuintgraphics}
                        </p>
                        <p>
                          {e.cpuincludedcpu_cooler}
                        </p>
                      <span onClick={()=>this.saveItem(e.id)}> 
                      <i className="fa fa-plus" aria-hidden="true"></i>
                      {
                        this.state.itemToggle === true
                        ? <p>Item added</p>
                        :null
                      } 
                      </span>
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