import React, { useState, useEffect } from "react";


const useEffectExample: React.FC = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        console.log('组件挂载或更新');

        // 相当于 componentDidMount 和 componentDidUpdate
        const timerID = setInterval(() => {
            setDate(new Date());
        }, 1000);

        // 相当于 componentWillUnmount
        return () => {
            console.log('清理副作用或组件卸载');
            clearInterval(timerID);
        };
    }, []); // 空依赖数组等同于仅在挂载时执行

    useEffect(() => {
        console.log('仅在date变化时执行');
        document.title = `当前时间: ${date.toLocaleTimeString()}`;
    }, [date]); // 仅在date变化时执行

    return <div>当前时间: {date.toLocaleTimeString()}</div>;
}

export default useEffectExample;