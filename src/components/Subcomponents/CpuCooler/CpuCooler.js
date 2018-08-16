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
      cpucooler:[]
    }
  }
  componentDidMount(){
    axios.get('/api/getdatabase').then(res=>{
      this.setState({cpucooler:res.data[2]})
    })
  }
  render() {
    return (
      <div>
        {
          this.state.cpucooler.map(e=>{
            return(
              <div className='cooler' key={e.id}>            
                  <Accordion>
                    <AccordionItem>
                    <AccordionItemTitle>
                      <div style={{
                        display:'flex',
                        justifyContent:'space-evenly',
                        alignItems:'center',
                        flexDirection:'column',    
                      }}>
                        <p>{e.ccmodel}</p>

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
                          {e.ccmanufacturer}
                        </p>
                        <p>
                          {e.cccores}
                        </p>
                        <p>
                          {e.ccsocket}
                        </p>
                      <button onClick={()=>this.props.addCooler(e.product_id)}>Add</button>
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