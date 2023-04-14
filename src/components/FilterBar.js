import { Component } from "react";

export default class FilterBar extends Component {

    constructor(props) {
        super(props);
    }

    inputHandler(){
        this.setState({
            
        });
    }


    render() {
        return (
            <form>
                <label>
                    Name 
                    <input value={this.props.displayValue} onChange = {this.props.inputHandler} type="text" />
                </label>
            </form>
    )
    }

}