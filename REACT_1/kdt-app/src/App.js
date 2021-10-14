import './App.css';
import Logo from './components/Logo';
import Paragraph from './components/Paragraph';
function App() {
  return (
    //이러한 부분을 JSX라고 한다.
    // class가 이미 javascript 내에서 예약어이다.
    <div className="App">
      <header className="App-header">
        <Logo size={300} />
        <Logo />
        <Logo />
        <Paragraph>
          Edit <code>src/App.js</code> and save to reload.
        </Paragraph>
        <Paragraph size={14} color="blue">
          I'm blue data dee dada!
        </Paragraph>
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
