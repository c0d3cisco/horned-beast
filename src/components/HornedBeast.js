import { Component } from "react";

import Card from 'react-bootstrap/Card';

// import { render } from 'react-dom';

const Emoji = props => (
    <span>
        {props.symbol}
    </span>
)


class HornedBeast extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            
        };
    }
    // NOTE: use arrow functions for event handlers to retain proper contextual "this"
    handleClick = () => {

        // const newStatus = this.state.status === 'Nay' ? 'Yay' : 'Nay';

        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        return (

            <Card onClick={this.handleClick} border="primary" style={{ minWidth: '9em'}}>
                <Card.Img variant="top" src={this.props.imgObj.image_url} alt={this.props.imgObj.description} title={this.props.imgObj.title} />
                <Card.Body>
                    <Card.Title>{this.props.imgObj.title}</Card.Title>
                    <Card.Text>
                        {this.props.imgObj.description}
                        <br />
                        <span><Emoji symbol="🫀" /></span> {this.state.count}
                    </Card.Text>
                </Card.Body>
            </Card>

        )
    }
}

export default HornedBeast;
