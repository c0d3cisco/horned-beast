import React from 'react';

class Main extends React.Component {
    render() {
        return (
            <>
                <HornedBeast />
                <HornedBeast />
            </>
        )
    }
}

class HornedBeast extends React.Component {
    render() {
        return <p>Beast coming soon</p>
    }
}

export default Main;
