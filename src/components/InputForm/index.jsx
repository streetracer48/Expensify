import React, {Component} from 'react'

class InputForm extends Component {

    state = {
        descriptions:''
    }


    onChangeData = (e) => {
        const descriptions = e.target.value;
        this.setState ({
            descriptions
        })

    }


     render () {
          return ( 
              <div> 
                  <h4>Input form</h4>
                  <input
                  type="text"
                  placeholder="Dscriptions"
                  value={this.state.descriptions}
                  onChange={this.onChangeData}
                  autoFocus
                  />
                  <br/>
                  <br/>
                  <input
                  type="number"
                  placeholder="Amount"
                  />
                  <br/>
                  <br/>
                <textarea
                  placeholder="Add a note for your expense"
                  />
                  <br/>
                  <br/>
                  <button>Add Expense</button>
                  

              </div>
          )

          
     }

}

export default InputForm