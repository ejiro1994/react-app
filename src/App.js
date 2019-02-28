import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img width="100px "src="netflix.png" alt="company-logo"></img>
              </td>
              <td>
                <h1>MoviesDB Search </h1>
              </td>
            </tr>
          </tbody>
        </table>

        <input style={{
          fontSize: 24,
          display: 'block',
          width: '99%',
          paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16,
        }} placeholder="Enter search term"/>
       </div>
    );
  }
}

export default App;
