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
      memory:[]
    }
  }
  componentDidMount(){
    axios.get('/api/getdatabase').then(res=>{
      this.setState({memory:res.data[3]})
    })
  }
  render() {
    return (
      <div>
        {
          this.state.memory.map(e=>{
            return(
              <div className='memory' key={e.id}>            
                  <Accordion>
                    <AccordionItem>
                    <AccordionItemTitle>
                      <div style={{
                        display:'flex',
                        justifyContent:'space-evenly',
                        alignItems:'center',
                        flexDirection:'column',    
                      }}>
                        <p>{e.memmodel}</p>

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
                          {e.memmanufacturer}
                        </p>
                        <p>
                          {e.memcores}
                        </p>
                        <p>
                          {e.memsocket}
                        </p>
                      <button onClick={()=>this.props.addMemory(e.product_id)}>Add</button>
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