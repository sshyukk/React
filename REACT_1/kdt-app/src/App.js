import './App.css';
import Logo from './components/Logo';
function App() {
  return (
    //이러한 부분을 JSX라고 한다.
    // class가 이미 javascript 내에서 예약어이다.
    <div className="App">
      <header className="App-header">
        <Logo size={300} />
        <Logo />
        <Logo />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
            Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
