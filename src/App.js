import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-6xl font-mono subpixel-antialiased font-semibold">Karan Sharma</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <div className="flex flex-row space-x-6 text-base font-mono font-medium underline">
          <a href="mailto:sharma.karan9341@gmail.com">sharma.karan9341@gmail.com</a>
          <a href="https://www.linkedin.com/in/ksh24" target="_blank">https://www.linkedin.com/in/ksh24</a>
          <a href="https://github.com/karansharmaufl" target="_blank">https://github.com/karansharmaufl</a>
        </div>
      </header>
    </div>
  );
}

export default App;
