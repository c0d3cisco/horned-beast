import {Component} from 'react';

export default class Footer extends Component{

    constructor(props) {
        super(props);
        this.state={
            preText: 'Author'
        }
    }

    handleClick = () => {

        const newPreText = this.state.preText === 'Content Creator' ? 'Author' : 'Content Creator';

        this.setState({
            preText: newPreText
        })
    }

    render() {
        return <p onClick={this.handleClick}>{this.state.preText}: Francisco Sanchez</p>
    }
}
