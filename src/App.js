import './App.css';
import HeaderLayout from './components/header/HeaderLayout';
import BodyLayout from './components/body/BodyLayout';
import FooterLayout from './components/footer/FooterLayout';

function App() {
  return (
    <div className="App">
      <HeaderLayout/>
      <BodyLayout />
      <FooterLayout />
    </div>
  );
}

export default App;
