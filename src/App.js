import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import IsamiGiken from './components/IsamiGiken';
import Footer from './components/Footer'
import TopSimulation from './components/TopSimulation'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <IsamiGiken/>
      <TopSimulation/>
      <Footer></Footer>
    </div>
  );
}

export default App;
