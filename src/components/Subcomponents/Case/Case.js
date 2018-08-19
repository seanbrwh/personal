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
      case:[],
      itemToggle:false
    }
  }
  componentDidMount(){
    axios.get('/api/getdatabase').then(res=>{
      this.setState({case:res.data[0]})
    })
  }
  saveItem(product){
    this.props.addCase(product)
    this.setState({itemToggle:true})    
  }
  render() {
    console.log(this.state.itemToggle)
    return (
      <div style={{width:'100%',overflow:'hidden'}}>
        {
          this.state.case.map(e=>{
            return(
              <div className='case' key={e.id}>            
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
                        <p>{e.casemodel}</p>

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
                        <p style={{textAlign:'center',color:'rgb(229,229,229)'}}>
                          {e.casemanufacturer}
                        </p>
                          <hr style={{width:'180px',height:'2px',border:'0',borderTop:'1px solid black',lineHeight:'1px',marginTop:'-5px'}}/>
                        Part Number
                        <p style={{textAlign:'center',color:'rgb(229,229,229)'}}>
                          {e.casepartnum}
                        </p>
                          <hr style={{width:'180px',height:'2px',border:'0',borderTop:'1px solid black',lineHeight:'1px'}}/>
                        Case Type
                        <p style={{textAlign:'center',color:'rgb(229,229,229)'}}>
                          {e.caseform_type}
                        </p>
                          <hr style={{width:'180px',height:'2px',border:'0',borderTop:'1px solid black',lineHeight:'1px'}}/>
                        Included PSU
                        <p style={{textAlign:'center',color:'rgb(229,229,229)'}}>
                          {e.casepsu}
                        </p>
                          <hr style={{width:'180px',height:'2px',border:'0',borderTop:'1px solid black',lineHeight:'1px'}}/>
                        2.5" drive bays
                        <p style={{textAlign:'center',color:'rgb(229,229,229)'}}>
                          {e.caseinttwofive}
                        </p>
                          <hr style={{width:'180px',height:'2px',border:'0',borderTop:'1px solid black',lineHeight:'1px'}}/>
                        3.5" Drive Bays
                        <p style={{textAlign:'center',color:'rgb(229,229,229)'}}>
                        {e.caseintthreefive}
                        </p>
                          <hr style={{width:'180px',height:'2px',border:'0',borderTop:'1px solid black',lineHeight:'1px'}}/>
                        Compatible Motherboards
                        <p style={{textAlign:'center',color:'rgb(229,229,229)'}}>
                          {e.casembcompatible}
                        </p>
                          <hr style={{width:'180px',height:'2px',border:'0',borderTop:'1px solid black',lineHeight:'1px'}}/>
                        Maximum Video card Length
                        <p style={{textAlign:'center',color:'rgb(229,229,229)'}}>
                          {e.casemaxvidcardlength}
                        </p>
                          <hr style={{width:'180px',height:'2px',border:'0',borderTop:'1px solid black',lineHeight:'1px'}}/>
                      <span onClick={()=>this.saveItem(e.case_id)}>
                      <i className="fa fa-plus" aria-hidden="true"></i>
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
  let {compcase} = state
  return{
    compcase
  }
}
export default withRouter(connect(mapState,{addCase})(Case))