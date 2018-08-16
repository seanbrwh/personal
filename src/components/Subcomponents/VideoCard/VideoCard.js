import React, { Component } from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {addVideoCard} from '../../../ducks/reducer'

import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion';

class VideoCard extends Component {
  constructor(){
    super()
    this.state={
      videocard:[]
    }
  }
  componentDidMount(){
    axios.get('/api/getdatabase').then(res=>{
      this.setState({videocard:res.data[7]})
    })
  }
  render() {
    console.log(this.state);
    return (
      <div>
        {
          this.state.videocard.map(e=>{
            return(
              <div className='videocard' key={e.id}>            
                  <Accordion>
                    <AccordionItem>
                    <AccordionItemTitle>
                      <div style={{
                        display:'flex',
                        justifyContent:'space-evenly',
                        alignItems:'center',
                        flexDirection:'column',    
                      }}>
                        <p>{e.vidmodel}</p>

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
                          {e.vidmanufacturer}
                        </p>
                        <p>
                          {e.cvidcores}
                        </p>
                        <p>
                          {e.cvidsocket}
                        </p>
                      <button onClick={()=>this.props.addVideoCard(e.product_id)}>Add</button>
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
  let {videoCard} = state
  return{
    videoCard
  }
}
export default withRouter(connect(mapState,{addVideoCard})(VideoCard))