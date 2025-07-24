import {useState} from "react";
import './Counter.css'

const Counter = () => {
    const [cnt, setCount] = useState(0);
    console.log(cnt);
    return (
        <>
        <div id="div_cnt1">
            <h1 id="counter_header">현재 카운터는 {cnt}입니다.</h1>
            <h3>아래 버튼을 누르면 수만큼 숫자가 올라가고 내려가요!</h3>
        </div>
        <div id="div_cnt2">
            <button onClick={()=>{
                setCount(cnt-100)
            }}>-100</button>
            <button onClick={()=>{
                setCount(cnt-10)
            }}>-10</button>
            <button onClick={()=>{
                setCount(cnt-1)
            }}>-1</button>
            <button onClick={()=>{
                setCount(cnt+1)
            }}>+1</button>
            <button onClick={()=>{
                setCount(cnt+10)
            }}>+10</button>
            <button onClick={()=>{
                setCount(cnt+100)
            }}>+100</button>
        </div>
        </>
    );
}

export default Counter