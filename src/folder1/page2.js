import React from 'react';

export function findSum(a, b) {
    return a + b;
}

function Page2() {
    const num1 = 15;
    const num2 = 25;
    const sum = findSum(num1, num2);

    return (
        <div>
            <h1>Page 2: Find the Sum of Two Numbers</h1>
            <p>Number 1: {num1}</p>
            <p>Number 2: {num2}</p>
            <p>The sum of the numbers is: {sum}</p>
        </div>
    );
}

export default Page2;
