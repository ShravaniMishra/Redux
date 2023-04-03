import {createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger'

const store = createStore(reducer,applyMiddleware(logger.default))
const history = []
function reducer(state={amount:100},action){
    if(action.type === "increment"){
        return {amount: state.amount+100}
    }
    if(action.type === "decrement"){
        return {amount: state.amount-100}
    }
    if(action.type === "incrementByAction"){
        return {amount: state.amount+action.payload}
    }
    return state
}

    // history.push(store.getState())
    // console.log(history)


setInterval(()=>{
store.dispatch({type: "incrementByAction",payload: 2})
},5000)

