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
      cpu:[]
    }    
  }
  componentDidMount(){
    axios.get('/api/getdatabase').then(res=>{
      this.setState({cpu:res.data[1]})
    })
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
                      <button onClick={()=>this.props.addCpu(e.product_id)}>Add</button>
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