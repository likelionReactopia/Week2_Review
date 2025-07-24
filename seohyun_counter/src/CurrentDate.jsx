import {useEffect, useState} from "react";

const CurrentDate = () => {
    const [now, setNow] = useState(new Date());

    useEffect(()=>{
        const interval = setInterval(()=>{
            setNow(new Date());
        },1000); // 1초 마다 now 상태 업데이트
    return () => clearInterval(interval); // 컴포넌트가 언마운트될 때 정리
    }, []);

    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const hour = now.getHours();
    const dayornight = hour < 12 ? "오전" : "오후";
    const minute = now.getMinutes();
    const seconds = now.getSeconds();
    return (
        <div>
            <h2>오늘은 {year}년 {month}월 {date}일입니다.</h2>
            <h3>지금 시간은 {dayornight} {hour}시 {minute}분 {seconds}초 입니다.</h3>
        </div>
    );
}
export default CurrentDate;