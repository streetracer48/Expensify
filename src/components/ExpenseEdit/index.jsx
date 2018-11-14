import React from 'react'
import{connect} from 'react-redux'
import ExpenseForm from '../InputForm/'
import {editExpense} from '../../actions/expenses/'


const ExpenseEdit = (props) => {
  console.log(props);
  return (
    <div>
      <ExpenseForm 
        expense={props.expense}
         onSubmit={(expense) => {
          props.dispatch(editExpense(props.match.params.id, expense))
          console.log('expense data',expense);
          props.history.push('/');
      }}/>
      
    </div>
  )
}

const mapStateToProps =(state, props) => {
 return {
  expense:state.expenses.find(expense => expense.id === props.match.params.id),
 
 }
 
}
export default connect(mapStateToProps, null) (ExpenseEdit)
