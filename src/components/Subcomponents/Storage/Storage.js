import React, { Component } from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {addStorage} from '../../../ducks/reducer'

import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion';  

class Storage extends Component {
  constructor(){
    super()
    this.state={
      storage:[]
    }
  }
  componentDidMount(){
    axios.get('/api/getdatabase').then(res=>{
      this.setState({storage:res.data[6]})
    })
  }
  render() {
    return (
      <div>
        {
          this.state.storage.map(e=>{
            return(
              <div className='storage' key={e.id}>            
                  <Accordion>
                    <AccordionItem>
                    <AccordionItemTitle>
                      <div style={{
                        display:'flex',
                        justifyContent:'space-evenly',
                        alignItems:'center',
                        flexDirection:'column',    
                      }}>
                        <p>{e.stmodel}</p>

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
                          {e.stmanufacturer}
                        </p>
                        <p>
                          {e.stcores}
                        </p>
                        <p>
                          {e.stsocket}
                        </p>
                      <button onClick={()=>this.props.addStorage(e.product_id)}>Add</button>
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
  let {storage} = state
  return{
    storage
  }
}
export default withRouter(connect(mapState,{addStorage})(Storage))