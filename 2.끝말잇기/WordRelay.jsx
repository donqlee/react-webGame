const React = require('react');
const { Component } = React; // 원래는 extends React.Component

class WordRelay extends Component{
    //바뀌는 부분은 state
    state = {
        word: '돈큐리',
        value: '',
        result: '',
    };
    onSubmitForm = (e) => {
        e.preventDefault();
        if (this.state.word[this.state.word.length - 1] === this.state.value[0]){
            this.setState((prevState) => { //이전 값을 쓸 경우에는 함수를 쓴다. 
                return {
                    word: prevState.value, 
                    value: '',
                    result: '딩동댕',
                };
            });
            this.input.focus();
        }else{
            this.setState({
                result: '땡',
                value: '',
            })
            this.input.focus();
        }
    };

    onChangeInput = (e) => {
        this.setState({ value : e.target.value });
    };

    input;
    onRefInput = (c) => {
        this.input = c;
    };

    render(){
        return (
            <>
                <div>{this.state.word}</div>
                <form onSubmit={this.onSubmitForm}>
                    <input ref={this.onRefInput} value={this.state.value} onChange={this.onChangeInput} />
                    <button>입력</button>
                </form>
                <div>{this.state.result}</div>
                <h1>핫로더짱짱 리어카?</h1>
            </>
        )
    }
}

module.exports = WordRelay;