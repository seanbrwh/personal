import React, { Component } from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {addCase} from '../../../ducks/reducer'

import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion';

class Case extends Component {
  constructor(){
    super()
    this.state={
      case:[]
    }
  }
  componentDidMount(){
    axios.get('/api/getdatabase').then(res=>{
      this.setState({case:res.data[0]})
    })
  }
  saveItem(product){
    this.props.addCase(product)
    window.location = `http://localhost:3000/#/biglist`
  }
  render() {
    return (
      <div>
        {
          this.state.case.map(e=>{
            return(
              <div className='case' key={e.id}>            
                  <Accordion>
                    <AccordionItem>
                    <AccordionItemTitle>
                      <div style={{
                        display:'flex',
                        justifyContent:'space-evenly',
                        alignItems:'center',
                        flexDirection:'column',    
                      }}>
                        <p>{e.casemodel}</p>

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
                          {e.casemanufacturer}
                        </p>
                        <p>
                          {e.casecores}
                        </p>
                        <p>
                          {e.casesocket}
                        </p>
                      <button onClick={()=>this.saveItem(e.product_id)}>Add</button>
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
  let {compcase} = state
  return{
    compcase
  }
}
export default withRouter(connect(mapState,{addCase})(Case))