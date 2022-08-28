import './App.css';
import Hello from './Components/Hello';
import City from './Components/City';

function App() {
  return (
    <div className="App">
      <p>Hello, I am in London. It is Beautiful.</p>
      <p>Hello, I am in New York. It is Fantastic.</p>
      <p>Hello, I am in kathmandu. It is Majestic.</p>
      <p>Hello, I am in Beijing. It is Movelone.</p>
      <Hello/>
      <City/>
    </div>
  );
}

export default App;
