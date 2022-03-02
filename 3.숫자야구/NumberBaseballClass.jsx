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
                  {[
                      {fruit : '사과', taste: '맛있다'},
                      {fruit : '바나나', taste: '맛없다'},
                      {fruit : '포도', taste: '시다'} 
                    ].map((v, i) => {
                      return (
                          <li key={v.fruit + v.taste}><b>{v.fruit}</b> - {i}</li>
                      )
                  })}
              </ul>
            </>
        )
    }
}

// module.exports = NumberBaseballClass;

export default NumberBaseballClass; 
