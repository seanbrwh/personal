let initialState = {
  session:{},
  cpu:[]
}
let UPDATE_USER = 'UPDATE_USER'
let LOGOUT_USER = 'LOGOUT_USER'
let ADD_CPU = 'ADD_CPU'

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
export function addCpu(cpu){
  return{
    type:ADD_CPU,
    payload:cpu
  }
}
export default function reducer(state=initialState, action){
  switch (action.type) {
    case  UPDATE_USER:
    return {...state,...state.session, session:action.payload}
    case LOGOUT_USER:
    return {...state,session:action.payload}
    case ADD_CPU:
    return {...state, ...state.session, cpu:[action.payload]}
    default:
      return state  
  }
}