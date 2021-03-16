import './App.css';
import ToDoHeader from './Components/ToDoHeader';
import ToDoInput from './Components/ToDoInput';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ToDoHeader/>
        <ToDoInput/>
      </header>
    </div>
  );
}

export default App;
