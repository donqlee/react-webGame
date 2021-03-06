import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import BallClass from './BallClass';

function getWinNumbers(){
    console.log('getWinNumbers');
    const candidate = Array(45).fill().map((v, i) => i + 1);
    const shuffle = [];
    while(candidate.length > 0){
        shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);   
    }
    const bonusNumber = shuffle[shuffle.length - 1];
    const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
    return [...winNumbers, bonusNumber];
}


const LottoHooks = () => {
    //useMemo : 복잡한 함수 결과값을 기억
    //useRef : 일반 값을 기억
    const lottoNumbers = useMemo(() => getWinNumbers(), []);
    const [winNumbers, setWinNumbers] = useState(lottoNumbers);
    const [winBalls, setWinBalls] = useState([]);
    const [bonus, setBonus] = useState(null);
    const [redo, setRedo] = useState(false);
    const timeouts = useRef([]);
    
    useEffect(() => {
        console.log('useEffect');
        for(let i = 0; i < winNumbers.length - 1; i++){
            timeouts.current[i] = setTimeout(() => {
                setWinBalls((prevBalls) => [...prevBalls, winNumbers[i]]);
            }, (i + 1) * 1000);
        }
        
        timeouts.current[6] = setTimeout(() => {
            setBonus(winNumbers[6]);
            setRedo(true);
        },7000);

        return () => { // componentWillUnmount 
            timeouts.current.forEach((v) => {
                clearTimeout(v);
            })
        }
    }, [timeouts.current]); // 빈 배열이면 componentDidMount와 동일
    // 배열에 요소가 있는 componentDidMount 와 componentDidUpdate 둘 다 수행

    //componentDidUpdate만 실행하고 싶을때 
    const mounted = useRef(false);
    useEffect(() => {
        if(!mounted.current){
            mounted.current = true;
        }else{
            //실행
        }
    }, [바뀌는값])

    const onClickRedo = useCallback( () => {
        console.log(winNumbers);
        setWinNumbers(getWinNumbers());
        setWinBalls([]);
        setBonus(null);
        setRedo(false);
        timeouts.current = [];
    }, [winNumbers]);
    // useCallback은 함수를 기억하는거
    // 자식 컴포넌트에 props로 함수를 넘길때 useCallback을 꼭 써야함

    return (
        <>
            <div>당첨 숫자</div>
            <div id="결과창">
                {winBalls.map((v) => <BallClass key = {v} number ={v} />)}    
            </div>
            <div>보너스!</div>
            {bonus && <BallClass number={bonus} />}
            {redo && <button onClick={onClickRedo}>한번 더!</button>}
        </>
    )
}


export default LottoHooks; 