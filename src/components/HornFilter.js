import { Component } from "react";
import Form from 'react-bootstrap/Form';

class HornedFilter extends Component {  

    handleChange = (ev) => {
        ev.preventDefault();
        this.props.filterHandler(ev.target.value);
    }

  render() {
    return (
    <Form.Select 
    value={this.props.displayMsg}
    onChange={this.handleChange}
    >
      <option value ="0">Filter by Horn</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="100">3+</option>
    </Form.Select>
  )};
}

export default HornedFilter;