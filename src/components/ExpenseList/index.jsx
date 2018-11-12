import React from 'react';
import {connect} from 'react-redux'
import ExpenseListItem from './ExpenseListItem/'

const ExpensesList =(props) =>  (
     <div>
          <h1>Expenses List</h1>
          {props.expenses.map((expense) => {
              return <ExpenseListItem {...expense}/>
          })}
     </div>
)

const mapStateToProps = (state) => {
     return {
         expenses:state.expenses,
         filters:state.filters
     }
}

export default connect(mapStateToProps) (ExpensesList)