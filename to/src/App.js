import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Example from './components/Addtask';
import Tasklist from './components/Tasklist';

function App() {
  return (
    <div className="App">
    <Example/>
    <Tasklist/>
    </div>
  );
}

export default App;
