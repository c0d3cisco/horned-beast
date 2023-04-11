import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer'
import imgArr from './data.json';

function App() {

  return (
    <div>
      <Header /> {/* <Header creator = {"Cisco"} /> */}
      <Main loadContent = {imgArr}/>
      <Footer />
    </div>
  );
}

export default App;
