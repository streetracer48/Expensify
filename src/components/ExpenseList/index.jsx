import React from 'react';
import {connect} from 'react-redux'

const ExpensesList =(props) =>  (
     <div>
          <h1>Expenses List</h1>
          {props.expenses.length}
     </div>
)

const ConnectedExpenseList = connect((state) => {
     return {
         expenses:state.expenses
     }
})(ExpensesList)

export default ConnectedExpenseList