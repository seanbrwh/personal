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
      motherboard:[],
      itemToggle:false
    }
  }
  componentDidMount(){
    axios.get('/api/getdatabase').then(res=>{
      this.setState({motherboard:res.data[4]})
    })
  }
  saveItem(product){
    this.props.addMb(product)
    this.setState({itemToggle:true})    
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
                          {e.mbpartnum}
                        </p>
                        <p>
                          {e.mbform_factor}
                        </p>
                        <p>
                          {e.mbcpu_socket}
                        </p>
                        <p>
                          {e.mbmem_slot}
                        </p>
                        <p>
                          {e.mbmem_type}
                        </p>
                        <p>
                          {e.mbmax_mem}
                        </p>
                        <p>
                          {e.mbsata}
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
  let {motherboard} = state
  return{
    motherboard
  }
}
export default withRouter(connect(mapState, {addMb})(Motherboard))