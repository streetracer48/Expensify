import React from 'react'
import {removeExpense} from '../../../actions/expenses'
import {connect} from 'react-redux'

const ExpenseListItem =({dispatch,description,amount, id, createdAt}) => (

    <div>
        <h3>{description}</h3>
        <h3>{amount} - {createdAt}</h3>
        <button onClick={()=>dispatch(removeExpense({id})) }>Remove</button>

    </div>
) 

export default connect() (ExpenseListItem)