import {Holiday} from "../src/holiday";

describe('xmas', function () {
    it('today is xmas', () => {
        let holiday = new Holiday();
        const fake_get_today = jest.fn();
        fake_get_today.mockReturnValueOnce(new Date(2000, 11, 25));
        holiday.get_today = fake_get_today;

        expect(holiday.say_hello()).toBe('Merry Xmas');
    });
});