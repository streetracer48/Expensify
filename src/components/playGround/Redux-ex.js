import React from 'react'
import {createStore} from  'redux'
const store = createStore((state = {count:45}) => {

    return state;
})


const Reduxtest = () => (
    console.log(store.getState()),
    <h1>hello this is redux test</h1>    
    
  )

export default Reduxtest




