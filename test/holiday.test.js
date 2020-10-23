import {Holiday} from "../src/holiday";

describe('xmas', function () {
    let holiday = new Holiday();
    let fake_get_today = jest.fn();

    beforeEach(() => {
        holiday = new Holiday();
        fake_get_today = jest.fn();
        holiday.get_today = fake_get_today;
    });

    it('today is xmas', () => {
        given_today(11, 25);
        response_should_be('Merry Xmas');
    });

    it('today is not xmas', () => {
        given_today(11, 26);
        response_should_be('Today is not Xmas');
    });

    function given_today(month, date) {
        fake_get_today.mockReturnValueOnce(new Date(2000, month, date));
    }

    function response_should_be(expected) {
        expect(holiday.say_hello()).toBe(expected);
    }

});