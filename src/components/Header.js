import {Component} from 'react';


class Header extends Component {
    // {this.props.creator} <= this is a prop

    constructor(props) {
        super(props);
        this.state ={
            phrase: ' but not where to find them',
        } 
    }

    handleMouseHover = () => {

        const newPhrase = this.state.phrase === ' - let me know if you find one!' ? ' but not where to find them.' : ' - let me know if you find one!';

        this.setState({
            phrase: newPhrase
        });
    }

    render() {
        return <h1 onMouseOver={this.handleMouseHover} onMouseLeave={this.handleMouseHover} >Horned Beasts{this.state.phrase}</h1>;        
    }

}

export default Header;