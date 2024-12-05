import '@testing-library/jest-dom';
// import {render, screen, fireEvent} from '@testing-library/react';
import {sumTwoNumber} from "@/Utils/helperFuncs";


// Test case 1 -- sum of two values (toBe && not.toBe)
test('sumTwoNumber', () => {
    expect(sumTwoNumber(1, 2)).toBe(3);
    expect(sumTwoNumber(1, 2)).not.toBe(4);
});

// Test case 2 -- objects are equal (toEqual && not.toEqual)
test('objects are equal', () => {
    const obj1 = {a: 1, b: 2};
    const obj2 = {a: 1, b: 2};
    expect(obj1).toEqual(obj2);
});
test('objects are not equal', () => {
    const obj1 = {a: 1, b: 2};
    const obj2 = {a: 1, b: 3};
    expect(obj1).not.toEqual(obj2);
});
test('data equal', () => {
    const data: { one: number; [key: string]: number } = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
});

// Test case 3 -- string match (toMatch && not.toMatch)
test('string match', () => {
    expect('Hello World').toMatch(/World/);
    expect('Hello World').not.toMatch(/Hellos/);
});


