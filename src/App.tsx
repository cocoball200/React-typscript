import React, { Component } from 'react';
import Number from './Number';
import { Input } from "./Input";


interface IState {
  counter: number;
  value: string;
}
class App extends Component<{}, IState>{
  state = {
    counter: 0,
    value: ""
  };

  render() {
    const { counter, value } = this.state;
    return (
      <div>
        <Input value={value} onChange={this.onChange}></Input>
        <Number count={counter} /><button onClick={this.add}>Add</button>
      </div>
    );
  }

  onChange = (event: React.SyntheticEvent<HTMLInputElement>) => { console.log(event.target) }

  add = () => {
    this.setState(prev => {
      return {
        counter: prev.counter + 1
      }
    })
  }

}

export default App;
