//import logo from './logo.svg';
import './App.css';
//import Functional Component from 'Path file'
//import Hello from './components/Hello';
//import Message from './components/Message';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">

      {/* import functional component Hello
      <Hello />

      import a class component Message
      <Message /> */}

      {/* import props functional component Profile */}
      <Profile name="Xoejang" />
      <Profile name="Xoejang" lastname="Bedog"/>

      {/* import props functional component with Children Hello */}
      <Profile name="Xoejang" lastname="Bedog">
        <h3>This is Children of Profile Component.</h3>
      </Profile>
    </div>
  );
}

export default App;
