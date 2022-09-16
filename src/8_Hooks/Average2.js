import { useState, useMemo } from "react";

const getAverage = numbers => {
    console.log('평균값 계산 중...');
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a,b) => a+b);
    return sum / numbers.length;
};

const Average2 = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');

    const onChange = e => {
        setNumber(e.target.value);
    };
    const onInsert = e => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
    };

    // 변경된 부분 1
    const avg = useMemo(() => getAverage(list),[list]);

    // 변경된 부분 2 : 평균값을 avg로..
    return(
        <div>
            <input value={number} onChange={onChange}/>
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => (<li key={index}>{value}</li>))}
            </ul>
            <div>
                <b>평균값 : </b> {avg}
            </div>
        </div>
    );
};

export default Average2;