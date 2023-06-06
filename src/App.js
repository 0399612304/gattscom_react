import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import IsamiGiken from './components/IsamiGiken';
import Fotter from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <IsamiGiken/>
      <Fotter></Fotter>
    </div>
  );
}

export default App;
