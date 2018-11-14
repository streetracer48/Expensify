import React, {Component} from 'react'
import moment from 'moment'
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize'


const now = moment();

console.log(now.format())

class InputForm extends Component {

    state = {
        descriptions:'',
        note:'',
        number:'',
        createdAt:moment(),
        calendarFocused: false
    };
 


    onChangeDiscriptions = (e) => {
        const descriptions = e.target.value;
        this.setState ({
            descriptions
        })

    }
    
    onChangeNumber = (e) => {
        const number = e.target.value;
        this.setState ({
            number
        })

    }

    onChangeNote = (e) => {
        const note = e.target.value;
        this.setState ({
            note
        })

    }

    onChangeAmount = (e) => {
        const amount = e.target.value;
        if (amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState ({
            amount
            })

        }
      

    }


    onDateChange = (createdAt) => {
         this.setState({
             createdAt
         }) 
    }


    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
      };  // PropTypes.func.isRequired


     render () {
          return ( 
              <div> 
                  <h4>Input form</h4>
                  <input
                  type="text"
                  placeholder="Dscriptions"
                  value={this.state.descriptions}
                  onChange={this.onChangeDiscriptions}
                  autoFocus
                  />
                  <br/>
                  <br/>
                  <input
                  type="number"
                  placeholder="Amount"
                  value={this.state.amount}
                  onChange={this.onChangeAmount}
                  />
                  <br/>
                  <br/>
                  <SingleDatePicker
  date={this.state.createdAt} // momentPropTypes.momentObj or null
  onDateChange={this.onDateChange} // PropTypes.func.isRequired
  focused={this.state.calendarFocused} // PropTypes.bool
  onFocusChange={this.onFocusChange}// PropTypes.func.isRequired
  numberOfMonths={1}
  isOutsideRange={() => false}

/>
<br/>
<br/>
                <textarea
                  placeholder="Add a note for your expense"
                  value={this.state.note}
                  onChange={this.onChangeNote}
                  />
                  <br/>
                  <br/>
                  <button>Add Expense</button>
                  

              </div>
          )

          
     }

}

export default InputForm