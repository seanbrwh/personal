import React, { Component } from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {addPsu} from '../../../ducks/reducer'

import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion';


class PowerSupply extends Component {
  constructor(){
    super()
    this.state={
      powerSupply:[]
    }
  }
  componentDidMount(){
    axios.get('/api/getdatabase').then(res=>{
      this.setState({powerSupply:res.data[5]})
    })
  }
  render() {
    return (
      <div>
        {
          this.state.powerSupply.map(e=>{
            return(
              <div className='powersupply' key={e.id}>            
                  <Accordion>
                    <AccordionItem>
                    <AccordionItemTitle>
                      <div style={{
                        display:'flex',
                        justifyContent:'space-evenly',
                        alignItems:'center',
                        flexDirection:'column',    
                      }}>
                        <p>{e.psumodel}</p>

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
                          {e.psumanufacturer}
                        </p>
                        <p>
                          {e.casecores}
                        </p>
                        <p>
                          {e.casesocket}
                        </p>
                      <button onClick={()=>this.props.addPsu(e.product_id)}>Add</button>
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
  let {psu} = state
  return{
    psu
  }
}
export default withRouter(connect(mapState,{addPsu})(PowerSupply))