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
                        <p>{e.psumodel}</p>

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
                          {e.psumanufacturer}
                        </p>
                         <hr style={{width:'180px',height:'2px',border:'0',borderTop:'1px solid black',lineHeight:'1px',marginTop:'-5px'}}/>
                      Part Number
                        <p style={{textAlign:'center',color:'rgb(229,229,229)'}}>
                          {e.psupartnum}
                        </p>
                         <hr style={{width:'180px',height:'2px',border:'0',borderTop:'1px solid black',lineHeight:'1px',marginTop:'-5px'}}/>
                      PSU type
                        <p style={{textAlign:'center',color:'rgb(229,229,229)'}}>
                          {e.psuform_type}
                        </p>
                         <hr style={{width:'180px',height:'2px',border:'0',borderTop:'1px solid black',lineHeight:'1px',marginTop:'-5px'}}/>
                      Wattage
                        <p style={{textAlign:'center',color:'rgb(229,229,229)'}}>
                          {e.psuwattage}
                        </p>
                         <hr style={{width:'180px',height:'2px',border:'0',borderTop:'1px solid black',lineHeight:'1px',marginTop:'-5px'}}/>
                      Modular
                        <p style={{textAlign:'center',color:'rgb(229,229,229)'}}>
                          {e.psumodular}
                        </p>
                         <hr style={{width:'180px',height:'2px',border:'0',borderTop:'1px solid black',lineHeight:'1px',marginTop:'-5px'}}/>
                      Pci express 6 + 2
                        <p style={{textAlign:'center',color:'rgb(229,229,229)'}}>
                          {e.psupci_6_2}
                        </p>
                         <hr style={{width:'180px',height:'2px',border:'0',borderTop:'1px solid black',lineHeight:'1px',marginTop:'-5px'}}/>
                      <span onClick={()=>this.saveItem(e.psu_id)}><i className="fa fa-plus" aria-hidden="true"></i></span>
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
  let {psu} = state
  return{
    psu
  }
}
export default withRouter(connect(mapState,{addPsu})(PowerSupply))