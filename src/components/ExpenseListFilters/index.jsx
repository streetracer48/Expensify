import React from 'react'
import {connect} from 'react-redux'
const ExpenseListFilters = (props) => (
    <input type="texts" value={props.filters.text} onChange = {(e) => {
         console.log(e.target.value)
    }}/>
)

const mapStateToProps = (state) => {
     return {
          filters:state.filters
     }
}

export default connect(mapStateToProps) (ExpenseListFilters)