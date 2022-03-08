import React, { PureComponent, createRef } from 'react';


class ResponseCheckClass extends PureComponent{
    state = {
        state : 'waiting',
        message: '클릭해서 시작하세요.',
        result:[],
    };

    timeout; 
    startTime;
    endTime;
    // state가 바뀌면 렌더링 되지만, timeout, startTime이 바뀌면 렌더링 되지 않는다.

    onClickScreen = () => {
        const { state, message, result } = this.state;
        if (state === 'waiting'){
            this.setState({
                state: 'ready',
                message: '초록색이 되면 클릭하세요',
            });
            this.timeout = setTimeout(() => {
                this.setState({
                    state: 'now',
                    message: '지금 클릭',
                });
                this.startTime = new Date();
            }, Math.floor(Math.random() * 1000) + 2000);
        } else if (state === 'ready'){ // 성급하게 클릭
            clearTimeout(this.timeout);
            this.setState({
                state: 'waiting',
                message: '너무 성급하시군요! 초록색이 된 후에 클릭하세요.',
            })
        } else if (state === 'now'){ // 반응 속도 체크 
            this.endTime = new Date();
            this.setState((prevState) => {
                return{
                    state: 'waiting',
                    message: '클릭해서 시작하세요.',
                    result: [...prevState.result, this.endTime - this.startTime],
                }
            })
        }
    }
    renderAverage = () => {
        const { result } = this.state;
        return (
        result.length === 0 
        ? null 
        : <div>
            평균 시간 : {result.reduce((a, c) => a + c) / result.length}ms
        </div>
        )
    };
    render(){
        const { state, message, result } = this.state;
        const { onClickScreen, renderAverage } = this;
        return (
            <>
                <div
                id='screen'
                className={state}
                onClick={onClickScreen}
                >
                    {message}
                </div>
                {renderAverage()}
            </>
        )
    }
}

export default ResponseCheckClass; 
