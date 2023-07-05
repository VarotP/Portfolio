import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ResponsiveAppBar></ResponsiveAppBar>
      </header>
      <body>
      <p>
          CONTENT
        </p>
      </body>
    </div>
  );
}

export default App;
