import React from "react";

class HornedBeast extends React.Component {
    render() {
        return (
            <>
                <h2>{this.props.imgObj.title}</h2>
                <img src={this.props.imgObj.image_url} alt={this.props.imgObj.description} title={this.props.imgObj.title} />
                <p> {this.props.imgObj.description} </p>
            </>
        )
    }
}

export default HornedBeast;
