import logo from './logo.svg';
import './App.css';
//import Component from 'Path file'
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      {/* import component Hello */}
      <Hello></Hello>
    </div>
  );
}

export default App;
