import { quotes } from './quotes'
import './App.css';

function App() {
  return (
    <div className="App">
      <ul>
        {quotes.map((q) =>
          <li>{q}</li>
        )}
      </ul>
    </div>
  );
}

export default App;
