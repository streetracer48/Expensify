import React from 'react'
import {createStore} from  'redux'
const store = createStore((state = {count:45}, action) => {

    if(action.type ==='INCREMENT')
    {
        return {
            count:state.count +1
        };
    }
     else {

          return state;
     }
});

console.log(store.getState())

//actions - than an object that gets sent to the store

//increment, decrement, reset
//walk, stop_walking, sit, work, stop_working
//I'd like to increment the count
store.dispatch({
    type:'INCREMENT'
})

store.dispatch({
    type:'INCREMENT'
})

console.log(store.getState())
//I'd like reset the count to zero


const Reduxtest = () => (
  

    <h1>hello this is redux test</h1>    
    
  )

export default Reduxtest




