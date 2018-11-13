import React, {Component} from 'react'

class InputForm extends Component {

    state = {
        descriptions:'',
        note:'',
        number:''
    }


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