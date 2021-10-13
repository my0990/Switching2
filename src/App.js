import logo from './logo.svg';
import './App.css';
import Test from './components/test.js'
import Test2 from './components/test2.js'
import Test3 from './components/test3.js'
import {Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Route path='/' exact>
        <Test/>
    </Route>
      <Route path='/test2'>
        <Test2 />
    </Route>
    <Route path='/test3'>
        <Test3/>
    </Route>
    </div>
    

  );
}

export default App;
