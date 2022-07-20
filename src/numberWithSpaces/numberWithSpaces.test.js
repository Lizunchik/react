const numberWithSpaces = require('./numberWithSpaces');

describe('numberWithSpaces', ()=>{
    test('million', ()=>{
        expect(numberWithSpaces(1000000)).toEqual('1 000 000');
    });
    test('one', ()=>{
        expect(numberWithSpaces(1)).toEqual('1');
    });
    test('thousands', ()=>{
        expect(numberWithSpaces(123000)).toEqual('123 000');
    });
})