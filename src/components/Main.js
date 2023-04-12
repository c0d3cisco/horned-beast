import {Component} from 'react';
import HornedBeast from './HornedBeast';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// {this.props.creator} <= this is a prop

// this.props.onSelection()
// this.props.onTargetHandler
export default class Main extends Component {
    render() {
        const hornedBeast = this.props.loadContent.map((imgObj) => 
        <HornedBeast onSelection={this.props.onSelection} imgObj = {imgObj} />
        );
        console.log(hornedBeast);
        const colBeasts = hornedBeast.map(eachBeast =>
            <Col>
              {eachBeast}
            </Col>
            );
        return (
            <Row xs={2} sm={3} md={4} lg={5} className="g-3">
                {colBeasts}
            </Row>
        )
    }
}


