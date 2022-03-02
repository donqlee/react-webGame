// const React = require('react');
// const { Component } = React; // 원래는 extends React.Component

import React, { Component } from 'react';

function getNumbers(){ // 숫자 네 개를 겹치지 않고 랜덤하게 뽑는 함수

}

class NumberBaseballClass extends React.Component{
    state = {
        result: '',
        value: '',
        answer: getNumbers(),
        tries: [],
    }
    onSubmitForm = (e) => {
        e.preventDefault();
       
    }
    onChangeInput = (e) => {
        this.setState({value : e.target.value});
    }
    input;

    render(){
        return (
            <>
              <h1>{this.state.result}</h1>
              <form onSubmit={this.onSubmitForm}>
                  <input maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
                  <button>제출</button>
              </form>
              <div>시도 : {this.state.tries.length}</div>
              <ul>
                  {['사과', '바나나', '포도'].map((v) => {
                      return (
                          <li>{v}</li>
                      )
                  })}
              </ul>
            </>
        )
    }
}

// module.exports = NumberBaseballClass;

export default NumberBaseballClass; 
