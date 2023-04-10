import './App.css';
import Header from './header';
import Main from './main';

function App() {
  return (
    <div>
      <Header creator = {"Cisco"} />
      <Header creator = {"Cisco"} coCreator = {"Cisco24"}/>
      <Main />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
