import {Holiday} from "../src/holiday";

describe('xmas', function () {
    let holiday = new Holiday();

    beforeEach(() => {
        holiday = new Holiday();
    });

    it('today is xmas', () => {
        given_today(11, 25);
        response_should_be('Merry Xmas');
    });

    function given_today(month, date) {
        const fake_get_today = jest.fn();
        fake_get_today.mockReturnValueOnce(new Date(2000, month, date));
        holiday.get_today = fake_get_today;
    }

    function response_should_be(expected) {
        expect(holiday.say_hello()).toBe(expected);
    }

});