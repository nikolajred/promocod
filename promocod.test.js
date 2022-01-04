const checkPromoCod = require('./task/promocod');

test(
    'check the function of checking the promo code',
    () => {
        expect(checkPromoCod(13668944)).toBe(100);
        expect(checkPromoCod(84533920)).toBe(0);
        expect(checkPromoCod(48183276)).toBe(100);
        expect(checkPromoCod(73289388)).toBe(1000);
        expect(checkPromoCod(37283988)).toBe(2000);
        expect(checkPromoCod('372839d8')).toBe(0);
    }
)