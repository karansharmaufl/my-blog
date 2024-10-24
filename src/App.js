import logo from './logo.svg';
import './App.css';
import cv from "./file.pdf"

const handleDownload = async () => {
  const link = document.createElement('a');
  link.href = cv;
  link.download = `karan_resume_${new Date()}.pdf`;
  link.click();
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-8xl font-mono subpixel-antialiased font-semibold">Karan Sharma</h1>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div className="flex flex-row mt-6 space-x-6 text-base font-mono font-medium underline">
          <a href="mailto:sharma.karan9341@gmail.com">sharma.karan9341@gmail.com</a>
          <a href="https://www.linkedin.com/in/ksh24" target="_blank">https://www.linkedin.com/in/ksh24</a>
          <a href="https://github.com/karansharmaufl" target="_blank">https://github.com/karansharmaufl</a>
        </div>
        <div className="mt-6 font-mono">
          <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" onClick={handleDownload}>
            <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
            <span>Resume</span>
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
