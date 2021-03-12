import './App.css';

function App() {
  let dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const currentDate = new Date().toLocaleString('en-us', dateOptions)
  return (
    <div className="App">
      <header className="App-header">
        <p>
          To Do List: {currentDate}
        </p>
        
      </header>
    </div>
  );
}

export default App;
