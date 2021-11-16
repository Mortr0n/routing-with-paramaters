import './App.css';
import { Router, Link } from '@reach/router';
import Home from './component/Home';
import Number from './component/Number';
import Multi from './component/Multi';

function App() {
  return (
    <div className="App">
      <Link to="/home">Home</Link>

      <Router>
        <Home path="/home" />
        <Number path="/:id" />
        <Multi path="/:word/:textColor/:backgroundColor" />
        

      </Router>
      
    </div>
  );
}

export default App;
