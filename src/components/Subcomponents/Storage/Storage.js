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
      storage:[],
      itemToggle:false
    }
  }
  componentDidMount(){
    axios.get('/api/getdatabase').then(res=>{
      this.setState({storage:res.data[6]})
    })
  }
  saveItem(product){
    this.props.addStorage(product)
    this.setState({itemToggle:true})    
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
                          {e.stpartnum}
                        </p>
                        <p>
                          {e.stcapicity}
                        </p>
                        <p>
                          {e.stinterface}
                        </p>
                        <p>
                          {e.stform_factor}
                        </p>
                        
                      <span onClick={()=>this.saveItem(e.id)}><i className="fa fa-plus" aria-hidden="true"></i>
                      {
                        this.state.itemToggle === true
                        ? <p>item Added</p>
                        : null
                      }</span>
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