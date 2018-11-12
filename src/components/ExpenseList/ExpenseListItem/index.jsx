import React from 'react'

const ExpenseListItem =({description,amount, createdAt}) => (

    <div>
        <h3>{description}</h3>
        <h3>{amount} - {createdAt}</h3>

    </div>
) 

export default ExpenseListItem