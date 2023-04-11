import React from 'react';
import { imgArr } from '../data';
import HornedBeast from './HornedBeast';

// {this.props.creator} <= this is a prop



class Main extends React.Component {
    render() {
        const hornedBeast = imgArr.map((imgObj) => 
        <HornedBeast imgObj = {imgObj} />
        );
        return (
            <>
                {hornedBeast}
            </>
        )
    }
}


export default Main;


