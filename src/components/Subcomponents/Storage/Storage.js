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
                  <Accordion style={{width:'100%',overflow:'hidden'}}>
                    <AccordionItem>
                    <AccordionItemTitle style={{background:'rgb(64,64,64)', color:'rgb(229,229,229)',fontWeight:'bold'}}>
                      <div style={{
                        display:'flex',
                        justifyContent:'space-evenly',
                        alignItems:'center',
                        flexDirection:'column',
                        textAlign:'center'    
                      }}>
                        <p>{e.stmodel}</p>

                      </div>
                    </AccordionItemTitle>
                    <AccordionItemBody style={{background:'rgb(127,127,127)'}}>
                      <div style={{
                        display:'flex',
                        justifyContent:'space-evenly',
                        alignItems:'center',
                        flexDirection:'column',                      
                      }}>              
                      Manufacturer         
                        <p  style={{textAlign:'center',color:'rgb(229,229,229)'}}>
                          {e.stmanufacturer}
                        </p>
                         <hr style={{width:'180px',height:'2px',border:'0',borderTop:'1px solid black',lineHeight:'1px',marginTop:'-5px'}}/>
                        Part Number
                        <p  style={{textAlign:'center',color:'rgb(229,229,229)'}}>
                          {e.stpartnum}
                        </p>
                         <hr style={{width:'180px',height:'2px',border:'0',borderTop:'1px solid black',lineHeight:'1px',marginTop:'-5px'}}/>
                          Capicity
                        <p  style={{textAlign:'center',color:'rgb(229,229,229)'}}>
                          {e.stcapicity}
                        </p>
                         <hr style={{width:'180px',height:'2px',border:'0',borderTop:'1px solid black',lineHeight:'1px',marginTop:'-5px'}}/>
                        Interface
                        <p  style={{textAlign:'center',color:'rgb(229,229,229)'}}>
                          {e.stinterface}
                        </p>
                         <hr style={{width:'180px',height:'2px',border:'0',borderTop:'1px solid black',lineHeight:'1px',marginTop:'-5px'}}/>
                        Form Factor
                        <p  style={{textAlign:'center',color:'rgb(229,229,229)'}}>
                          {e.stform_factor}
                        </p>
                         <hr style={{width:'180px',height:'2px',border:'0',borderTop:'1px solid black',lineHeight:'1px',marginTop:'-5px'}}/>
                        
                      <span onClick={()=>this.saveItem(e.storage_id)}><i className="fa fa-plus" aria-hidden="true"></i>
                      </span>
                      {
                        this.state.itemToggle === true
                        ? <p>item Added</p>
                        : null
                      }
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