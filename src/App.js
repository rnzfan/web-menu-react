import Menu from './Menu';
import Main from './Main';
import { ValueProvider } from './MenuContext';
import './style.css';


function App() {
  return (
    <ValueProvider>
      <header>
        <Menu />
      </header>
      <Main />
      <footer>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="//reactquickly.dev">React Quickly 2E</a>
      </footer>
    </ValueProvider>
  );
}

export default App;
