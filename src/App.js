import React, { Component } from 'react';
import './App.css';

const FilterStates = (state) =>{
  const rows = state.showStates.map((row) => {
      return(
      <p>{row}</p>
      )
  });
  return {rows}
}

class App extends Component {

  constructor(props){
    super();
    this.state = {
      states: ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'],
      showStates: [],
      stateName: ''
    }
}

  
  
  onChangeState = (event) =>{
    const value = event.target.value;
    if(value === ''){
      this.setState({
        states: [...this.state.states],
        //[event.target.name]: event.target.value, // without Destructuring
        stateName: value,
        showStates: []
      })
    } else {
      this.setState({
        states: [...this.state.states],
        //[event.target.name]: event.target.value, // without Destructuring
        stateName: value,
        showStates: this.state.states.filter((s) => {
          return s.startsWith(value);
        })
      })
    }
    
  }

  render(){
    return (
      
      <div className="App">
        <header className="App-header">
          <div>
            <h3>Auto Complete</h3>
              <input autoComplete="off" type="text" name="name" id="name" className="state-class" value={this.state.stateName} onChange={this.onChangeState} />
            <hr/>
            <ul className="list-states">
                {this.state.showStates.map((value, index) => {
                return <li key={index}>{value}</li>
              })}
            </ul>
            <p>Suggestions: {this.state.showStates.length} </p>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
