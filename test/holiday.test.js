import {Holiday} from "../src/holiday";

describe('xmas', function () {
    it('today is xmas', () => {
        let holiday = new Holiday();
        expect(holiday.sayHello()).toBe('Merry Xmas');
    });
});