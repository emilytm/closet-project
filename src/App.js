import logo from './assets/logo.svg';
import './styles/App.css';
import Header from './components/Header'
import ThemeButton from './components/themeButton'

function App() {
  return (
    <div className="App">
      <Header />
      <ThemeButton />
    </div>
  );
}

export default App;
