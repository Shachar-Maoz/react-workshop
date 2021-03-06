import { useState } from 'react';

export function UseMemo() {
    const [number, setNumber] = useState(1);
    const [inc, setInc] = useState(0);
    const factorial = factorialOf(number);
    
    const onChange = event => {
        setNumber(Number(event.target.value));
    };
    
    const onClick = () => setInc(i => i + 1);
    
    console.log("new render!");
    return (
        <div>
            Factorial of
            <input type="number" value={number} onChange={onChange} />
            is {factorial}
            <button onClick={onClick}>Re-render</button>
        </div>
    );
}

const factorialOf = (n) => {
    console.log('factorialOf(n) called!');
    return n <= 0 ? 1 : n * factorialOf(n - 1);
}
