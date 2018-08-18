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
                          {e.mempartnum}
                        </p>
                        <p>
                          {e.memspeed}
                        </p>
                        <p>
                          {e.memsize}
                        </p>
                        <p>
                          {e.memcas_latency}
                        </p>
                      <span onClick={()=>this.saveItem(e.id)}><i className="fa fa-plus" aria-hidden="true"></i></span>
                      </div>
                      {
                        this.state.itemToggle === true
                        ? <p>item Added</p>
                        :null
                      }
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