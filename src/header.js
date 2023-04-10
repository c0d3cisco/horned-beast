import React from 'react';


class Header extends React.Component {

    render() {
        return <p>HEADER COMING SOON by {this.props.creator} or {this.props.coCreator}</p>;        
    }

}

export default Header;