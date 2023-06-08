import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import IsamiGiken from './components/IsamiGiken';
import Footer from './components/Footer'
import TopSimulation from './components/TopSimulation'
import TopRenovation from './components/TopRenovation'
import TopCompany from './components/TopCompany'
import ContactForm from './components/Contact'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <IsamiGiken/>
      <TopSimulation/>
      <TopRenovation/>
      <TopCompany/>
     <ContactForm/>
      <Footer></Footer>
    </div>
  );
}

export default App;
