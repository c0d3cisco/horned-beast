import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Component } from "react";
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer'
import imgArr from './data.json';
import SelectedBeast from './components/SelectedBeast';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      targeted: false,
      imgObj: {},
    };
  }

  onImageTargetHandler = (imgObjInput) => {
    // debugger;
    this.setState({
      targeted: true,
      imgObj: imgObjInput,
  });
  }

  closeHandler = () => {
    this.setState({targeted: false});
  }

  render() {
    return (
      <div>
        <Header /> 
        <Main onSelection={this.onImageTargetHandler} loadContent={imgArr} />
        <SelectedBeast show={this.state.targeted} onClose={this.closeHandler} imgObj={this.state.imgObj}/>
        <Footer />
      </div>
    )
  }


}

export default App;

// class App extends Component {

  

//   render() {
//     return (
//       <div>
//         <Header /> {/* <Header creator = {"Cisco"} /> */}
//         <Main loadContent={imgArr} />
//         <Footer />
//       </div>
//     )
//   }


// }

// export default App;
