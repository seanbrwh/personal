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
      motherboard:[]
    }
  }
  componentDidMount(){
    axios.get('/api/getdatabase').then(res=>{
      this.setState({motherboard:res.data[4]})
    })
  }
  render() {
    return (
      <div>
        {
          this.state.motherboard.map(e=>{
            return(
              <div className='motherboard' key={e.id}>            
                  <Accordion>
                    <AccordionItem>
                    <AccordionItemTitle>
                      <div style={{
                        display:'flex',
                        justifyContent:'space-evenly',
                        alignItems:'center',
                        flexDirection:'column',    
                      }}>
                        <p>{e.mbmodel}</p>

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
                          {e.mbmanufacturer}
                        </p>
                        <p>
                          {e.mbcores}
                        </p>
                        <p>
                          {e.mbsocket}
                        </p>
                      <button onClick={()=>this.props.addMb(e.product_id)}>Add</button>
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