import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Component } from "react";
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer'
import imgArr from './data.json';
import SelectedBeast from './components/SelectedBeast';
// import FilterBar from './components/FilterBar';
import HornedFilter from './components/HornFilter';

class App extends Component {

  constructor(props) {

    super(props);
    this.state = {
      targeted: false,
      imgObj: {},
      filterDisplay: 'Filter by Horns',
      imgArr: imgArr,
      // filterValue: 'Filter as Needed'
    };
  }

  onImageTargetHandler = (imgObjInput) => {
    // debugger;
    this.setState({
      targeted: true,
      imgObj: imgObjInput,
  });
  }

  onFilterHandler = (valueSelected) => {
    console.log(valueSelected);
    const filteredArr = imgArr.filter(imgItem => imgItem.horns === parseInt(valueSelected))
    console.log(filteredArr);
    this.setState({
      imgArr: filteredArr
    });
  }

  // inputHandler(ev) {
  //   ev.preventDefault();
  //   this.setState({ filterValue: ev.target.value })
  // }

  closeHandler = () => {
    this.setState({targeted: false});
  }

  render() {
    return (
      <div>
        <Header /> 
        <HornedFilter displayMsg = {this.state.filterDisplay} filterHandler = {this.onFilterHandler}/>
        {/* <FilterBar inputHandler={this.inputHandler} displayValue={this.state.filterValue}/> */}
        <Main onSelection={this.onImageTargetHandler} loadContent={this.state.imgArr} />
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
