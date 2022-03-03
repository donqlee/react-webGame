// const React = require('react');
// const { Component } = React; // 원래는 extends React.Component

import React, { Component } from 'react';
import Try from './Try'

function getNumbers(){ // 숫자 네 개를 겹치지 않고 랜덤하게 뽑는 함수
    const candidate = [1,2,3,4,5,6,7,8,9];
    const array = [];
    for(let i = 0; i < 4; i++){
        const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chosen);
    }
    return array;
}

class NumberBaseballClass extends Component{
    state = {
        result: '',
        value: '',
        answer: getNumbers(),
        tries: [],
    }
    onSubmitForm = (e) => {
        const { result, value, answer, tries } = this.state;
        e.preventDefault();
        if (value === answer.join('')){
            this.setState({
                result: '홈런',
                tries: [...tries, {try: value, result: '홈런!'}],
            })
            alert('홈런! 게임을 다시 시작합니다!');
            this.setState({
                value: '',
                answer: getNumbers(),
                tries: []
            })
        }else {
            const answerArray = value.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;
            if(tries.length >= 9){
                this.setState({
                    result : `10번 넘게 틀려서 실패! 답은 ${answer.join(',')} 였습니다!`
                });
                alert('게임을 다시 시작합니다!');
                this.setState({
                    value: '',
                    answer: getNumbers(),
                    tries: []
                })
            }else{
                for (let i = 0; i < 4; i++){
                    if(answerArray[i] === answer[i]){
                        strike += 1;
                    }else if (answer.includes(answerArray[i])){
                        ball += 1;
                    }
                }
                this.setState({
                    tries: [...tries, {try: value, result: `${strike} 스트라이크, ${ball} 볼 입니다.`}],
                    value: '',
                })
            }
        }
       
    }
    onChangeInput = (e) => {
        this.setState({value : e.target.value});
    }
    input;
    onRefInput = (c) => {
        this.input = c;
    }

    render(){
        const { result, value, tries } = this.state; // 구조분해를 통해 this.state를 지울수 있음
        return (
            <>
              <h1>{result}</h1>
              <form onSubmit={this.onSubmitForm}>
                  <input ref={this.onRefInput} maxLength={4} value={value} onChange={this.onChangeInput} />
              </form>
              <div>시도 : {tries.length}</div>
              <ul>
                  {tries.map((v, i) => {
                      return (
                        <Try key={`${i + 1}차 시도`} tryInfo={v} index={i}/> 
                        //component 빼는 이유 1. 가독성, 2. 재사용성, 3. 성능 최적화
                      )
                  })}
              </ul>
            </>
        )
    }
}

// module.exports = NumberBaseballClass;

export default NumberBaseballClass; 
