import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Landing from './components/Landing/Landing'
import BigList from './components/BigList/BigList'
import List from './components/List/List'
import Profile from './components/Profile/Profile'
import Case from './components/Subcomponents/Case/Case'
import Cpu from './components/Subcomponents/Cpu/Cpu'
import CpuCooler from './components/Subcomponents/CpuCooler/CpuCooler'
import Memory from './components/Subcomponents/Memory/Memory'
import Motherboard from './components/Subcomponents/Motherboard/Motherboard'
import PowerSupply from './components/Subcomponents/PowerSupply/PowerSupply'
import Storage from './components/Subcomponents/Storage/Storage'
import VideoCard from './components/Subcomponents/VideoCard/VideoCard'

export default(
  <Switch>
    <Route exact path='/' component={Landing}/>
    <Route path='/biglist' component={BigList}/>
    <Route path='/list' component={List}/>
    <Route path='/profile' component={Profile}/>
    <Route path='/Case' component={Case}/>
    <Route path='/cpu' component={Cpu}/>
    <Route path='/cpucooler' component={CpuCooler}/>
    <Route path='/memory' component={Memory}/>
    <Route path='/motherboard' component={Motherboard}/>
    <Route path='/powersupply' component={PowerSupply}/>
    <Route path='/storage' component={Storage}/>
    <Route path='/videocard' component={VideoCard}/>
  </Switch>
)