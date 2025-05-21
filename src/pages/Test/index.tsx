import React, {useState, useRef} from "react";


const Test: React.FC = () => {
    let [arr, setArr] = useState([1, 2, 3])
    const handleClick = () => {
        setArr(arr.filter((item) => item !== 1)) //删除指定元素
    }
    return (
        <>
            <button onClick={handleClick}>更改值</button>
            <div id="aaa">{arr}</div>
        </>
    )
}

export default Test;