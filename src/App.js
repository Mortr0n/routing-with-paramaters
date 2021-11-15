import './App.css';
import { Router, Link } from '@reach/router';
import Home from './component/Home';
import Number from './component/Number';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Home path="/home" />
        <Number path="/:id" />
        

      </Router>
      
    </div>
  );
}

export default App;
