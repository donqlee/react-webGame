const React = require('react');
const { Component } = React; // 원래는 extends React.Component

class WordRelay extends Component{
    state = {
        text: 'Hello, webpack',
    };
    render(){
        return <h1>{this.state.text}</h1>;
    }
}

module.exports = WordRelay;