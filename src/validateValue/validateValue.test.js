const validateValue = require('./validateValue');


describe('validateValue', ()=>{
    test('Корректное значение', ()=>{
        expect(validateValue(50)).toBe(true);
    });
    test('Меньше корректного', ()=>{
        expect(validateValue(-5)).toBe(false);
    });
    test('Больше корректного', ()=>{
        expect(validateValue(1000)).toBe(false);
    });
    test('Пограничное значение', ()=>{
        expect(validateValue(100)).toBe(true);
    });
})