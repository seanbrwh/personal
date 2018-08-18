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
      cpucooler:[],
      itemToggle:false
    }
  }
  componentDidMount(){
    axios.get('/api/getdatabase').then(res=>{
      this.setState({cpucooler:res.data[2]})
    })
  }
  saveItem(product){
    this.props.addCooler(product)
    this.setState({itemToggle:true})
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
                          {e.ccpartnum}
                        </p>
                        <p>
                          {e.ccmodel}
                        </p>
                        <p>
                          {e.ccsupp_sockets}
                        </p>
                        <p>
                          {e.ccliquid}
                        </p>
                        <p>
                          {e.ccc_height}
                        </p>
                      <span onClick={()=>this.saveItem(e.id)}><i className="fa fa-plus" aria-hidden="true"></i></span>
                      </div>
                      {
                        this.state.itemToggle === true
                        ? <p>Item added</p>
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
  let {cooler} = state
  return{
    cooler
  }
}
export default withRouter(connect(mapState,{addCooler})(CpuCooler))