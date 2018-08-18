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
      powerSupply:[],
      itemToggle:false
    }
  }
  componentDidMount(){
    axios.get('/api/getdatabase').then(res=>{
      this.setState({powerSupply:res.data[5]})
    })
  }
  saveItem(product){
    this.props.addPsu(product)
    this.setState({itemToggle:true})    
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
                          {e.psupartnum}
                        </p>
                        <p>
                          {e.psuform_type}
                        </p>
                        <p>
                          {e.psuwattage}
                        </p>
                        <p>
                          {e.psumodular}
                        </p>
                        <p>
                          {e.psupci_6_2}
                        </p>
                      <span onClick={()=>this.saveItem(e.id)}><i className="fa fa-plus" aria-hidden="true"></i></span>
                      </div>
                      {
                        this.state.itemToggle === true
                        ? <p>item Added</p>
                        : null
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
  let {psu} = state
  return{
    psu
  }
}
export default withRouter(connect(mapState,{addPsu})(PowerSupply))