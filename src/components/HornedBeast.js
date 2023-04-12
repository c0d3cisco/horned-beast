import { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// import { render } from 'react-dom';

const Emoji = props => (
    <span>
        {props.symbol}
    </span>
)



export default class HornedBeast extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,

        };
    }
    // NOTE: use arrow functions for event handlers to retain proper contextual "this"
    handleClick = () => {

        this.setState({
            count: this.state.count + 1 //WHY DOES THIS WORK
            // count: this.state.count++ //AND THIS DOESN'T?
        });
    }

    keepTrackOfCount = () => {
        // debugger
        console.log(this.props.imgObj);
        this.props.onSelection(this.props.imgObj);
    }
    

    render() {
        return (

            <Card border="primary" style={{ minWidth: '9em' }}>

                <Card.Img onClick={this.keepTrackOfCount} variant="top" src={this.props.imgObj.image_url} alt={this.props.imgObj.description} title={this.props.imgObj.title} />
                <Card.Body>
                    <Card.Title>{this.props.imgObj.title}</Card.Title>
                    <Card.Text>
                        {this.props.imgObj.description}
                        <br />
                        <span><Emoji symbol="🫀" /></span> {this.state.count}
                    </Card.Text>
                        <div className="d-grid gap-2">
                            <Button onClick={this.handleClick} variant="primary" size="lg">
                                Like
                            </Button>
                        </div>
                </Card.Body>
            </Card>

        )
    }
}


// class HornedBeast extends Component {

//     constructor(props) { onClick={this.props.onSelection()}
//         super(props);
//         this.primary = {
//             count: 0,
//         };
//         this.secondary = { //WHY DOES THIS WORK?
//             count: 3,
//         }
//     }
//     handleClick = () => {

//         this.setState({
//             count: this.secondary.count++ //WHY DOES THIS WORKS?
//             //count: this.secondary.count + 1 //AND THIS DOESN'T?
//         });
//     }

//     render() {
//         return (

//             <Card onClick={this.handleClick} border="primary" style={{ minWidth: '9em'}}>
//                 <Card.Img variant="top" src={this.props.imgObj.image_url} alt={this.props.imgObj.description} title={this.props.imgObj.title} />
//                 <Card.Body>
//                     <Card.Title>{this.props.imgObj.title}</Card.Title>
//                     <Card.Text>
//                         {this.props.imgObj.description}
//                         <br />
//                         <span><Emoji symbol="🫀" /></span> {this.secondary.count}
//                     </Card.Text>
//                 </Card.Body>
//             </Card>

//         )
//     }
// }

// export default HornedBeast;
