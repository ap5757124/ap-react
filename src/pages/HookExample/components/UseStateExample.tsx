import React, { useState } from "react";
import { Button } from 'antd';

/**
 * useState 接收一个参数，即状态的初始值，然后返回一个数组，其中包含两个元素：当前的状态值和一个更新该状态的函数
 * 在React中你需要将数组视为只读的，不可以直接修改原数组，例如：不可以调用 arr.push() arr.pop() 等方法。
 * React useState是异步更新的 多次以相同的操作更新状态时，React 会进行比较，如果值相同，则会屏蔽后续的更新行为。自带防抖的功能，防止频繁的更新。可以向set方法传递一个更新函数，而不是一个状态去解决这个问题
 */

const UseStateExample: React.FC = () => {
    const [count, setCount] = useState(0);

    const handleCount = () => {
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
    }
    const handleCount2 = () => {
        setCount(count => count + 1);
        setCount(count => count + 1);
        setCount(count => count + 1);
    }

    return (
        <div>
            <div>
                <div>{ count }</div>
                <Button type="primary" onClick={handleCount}>累加3错误</Button>
                <Button type="primary" onClick={handleCount2}>累加3正确</Button>
            </div>
        </div>
    )
}

export default UseStateExample;