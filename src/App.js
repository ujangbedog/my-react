import logo from './logo.svg';
import './App.css';
//import Functional Component from 'Path file'
import Hello from './components/Hello';
import Message from './components/Message';

function App() {
  return (
    <div className="App">

      {/* import functional component Hello */}
      <Hello />

      {/* import a class component Message */}
      <Message />
      
    </div>
  );
}

export default App;
