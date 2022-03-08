import React, { useState, memo } from 'react';

const TryHooks = memo(({ tryInfo }) => { // 구조분해 해준거임
// const Try = (props) => {
//     return (
//         <li>
//             <div>{props.tryInfo.try}</div>
//             <div>{props.tryInfo.result}</div>
//         </li>
//     )
// }
//자식은 props를 바꾸지 않고 state로 만들어서 바꾼다.
    const [result, setResult] = useState(tryInfo.result);
    const onClick = () => {
        setResult('1');
    }
    return (
        <li>
            <div>{tryInfo.try}</div>
            <div onClick={onClick}>{tryInfo.result}</div>
        </li>
    )
});

export default TryHooks;