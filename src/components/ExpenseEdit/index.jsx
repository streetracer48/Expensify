import React from 'react'

const ExpenseEdit = (props) => {
  console.log(props);
  return (
    <div>
        <h1>ExpenseEdit</h1>
        <h2>id{props.match.params.id}</h2>
      
    </div>
  )
}
export default ExpenseEdit
