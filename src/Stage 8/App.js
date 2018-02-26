import React, { Component } from 'react';

import Employee from './models/Employee';

// components

class App extends Component {
constructor()
super()


this.selectEmployee=this.selectEmployee.bind(this);
this.refresh=this.refresh.bind(this);

  // selectEmployee

refresh(){
  this.setState({})
}

  render() {
    return (
      <div id="app">
        // render Header here
        <div className="main-container">
          // render EmployeeList here
          // render EmployeeEditor
        </div>
      </div>
    )
  }
}

export default App;
