import React, { PureComponent, createRef } from 'react';


class ResponseCheckClass extends PureComponent{
    state = {
        state : 'waiting',
        message: '클릭해서 시작하세요.',
        result:[],
    };
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
