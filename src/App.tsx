import React from 'react';
import ReactDOM from 'react-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <iframe  title="shift"  src="http://localhost:3000/Jqschedule.html" width="95%" height="700"></iframe>
      </header>
    </div>
  );
}


export default App;
ReactDOM.render(<App />, document.getElementById("shift"));