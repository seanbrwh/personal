let initialState = {
  session:{},
  compcase:[],
  cpu:[],
  cpucooler:[],
  memory:[],
  motherboard:[],
  psu:[],
  storage:[],
  videoCard:[]
}
let UPDATE_USER = 'UPDATE_USER'
let LOGOUT_USER = 'LOGOUT_USER'
let ADD_CASE = 'ADD_CASE'
let ADD_CPU = 'ADD_CPU'
let ADD_COOLER = 'ADD_COOLER'
let ADD_MEMORY = 'ADD_MEMORY'
let ADD_MB = 'ADD_MB'
let ADD_PSU = 'ADD_PSU'
let ADD_STORAGE = 'ADD_STORAGE'
let ADD_VIDCARD = 'ADD_VIDCARD'

export function getUser(request){
  return{
    type:UPDATE_USER,
    payload:request
  }
}
export function logOut(request){
  return{
    type:LOGOUT_USER,
    payload:request
  }
}
export function addCase(compcase){
  return{
    type:ADD_CASE,
    payload:compcase
  }
}
export function addCpu(cpu){
  return{
    type:ADD_CPU,
    payload:cpu
  }
}
export function addCooler(cooler){
  return{
    type:ADD_COOLER,
    payload:cooler
  }
}
export function addMemory(memory){
  return{
    type:ADD_MEMORY,
    payload:memory
  }
}
export function addMb(motherboard){
  return{
    type:ADD_MB,
    payload:motherboard
  }
}
export function addPsu(psu){
  return{
    type:ADD_PSU,
    payload:psu
  }
}
export function addStorage(storage){
  return{
    type:ADD_STORAGE,
    payload:storage
  }
}
export function addVideoCard(videoCard){
  return{
    type:ADD_VIDCARD,
    payload:videoCard
  }
}
export default function reducer(state=initialState, action){
  switch (action.type) {
    case  UPDATE_USER:
    return {...state,...state.session, session:action.payload}
    case LOGOUT_USER:
    return {...state,session:action.payload}
    case ADD_CASE:
    return {...state, ...state.session, compcase:[action.payload]}
    case ADD_CPU:
    return {...state, ...state.session, cpu:[action.payload]}
    case ADD_COOLER:
    return {...state, ...state.session, cpucooler:[action.payload]}
    case ADD_MEMORY:
    return {...state, ...state.session, memory:[action.payload]}
    case ADD_MB:
    return {...state, ...state.session, motherboard:[action.payload]}
    case ADD_PSU:
    return {...state, ...state.session, psu:[action.payload]}
    case ADD_STORAGE:
    return {...state, ...state.session, storage:[action.payload]}
    case ADD_VIDCARD:
    return {...state, ...state.session, videoCard:[action.payload]}
    default:
      return state  
  }
}