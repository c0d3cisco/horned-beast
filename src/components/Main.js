import {Component} from 'react';
import HornedBeast from './HornedBeast';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// {this.props.creator} <= this is a prop



class Main extends Component {
    render() {
        const hornedBeast = this.props.loadContent.map((imgObj) => 
        <HornedBeast imgObj = {imgObj} />
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


export default Main;


