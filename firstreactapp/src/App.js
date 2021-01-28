
import './App.css';
import Header from "./Header/Header";
import Body from './Body/Body';
import Footer from './Footer/Footer';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header/>
      </header>
      <div className="App-body">
      <Body/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
