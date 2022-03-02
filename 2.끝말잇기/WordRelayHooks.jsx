const React = require('react');
const { useState, useRef } = React;

const WordRelayHooks = () => {
    //바뀌는 부분은 state
    const [word, setWord] = useState('돈큐리');
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputRef = useRef(null);

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (word[word.length - 1] === value[0]){
            setWord(value);
            setValue('');
            setResult('딩동댕');
            inputRef.current.focus();
        }else{
            setValue('');
            setResult('땡');
            inputRef.current.focus();
        }
    };

    const onChangeInput = (e) => {
        setValue(e.target.value );
    };

   

        return (
            <>
                <div>{word}</div>
                <form onSubmit={onSubmitForm}>
                    <label id="label" htmlFor="wordInput"></label>
                    <input id="wordInput" className="wordInput" ref={inputRef} value={value} onChange={onChangeInput} />
                    <button>입력</button>
                </form>
                <div>{result}</div>
            </>
        )
    
}

module.exports = WordRelayHooks;