import React from 'react';

export function findLargest(a, b) {
    return a > b ? a : b;
}

function Page1() {
    const num1 = 10;
    const num2 = 20;
    const largest = findLargest(num1, num2);

    return (
        <div>
            <h1>Page 1: Find the Largest Number</h1>
            <p>Number 1: {num1}</p>
            <p>Number 2: {num2}</p>
            <p>The largest number is: {largest}</p>
        </div>
    );
}

export default Page1;
