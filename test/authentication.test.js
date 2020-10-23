import {Authentication} from "../src/authentication";

describe('authenticate account is valid', function () {
    let authentication = new Authentication();
    let fake_get_password;
    let fake_get_token;
    beforeEach(() => {
        authentication = new Authentication();

        fake_get_password = jest.fn();
        authentication.get_password = fake_get_password;

        fake_get_token = jest.fn();
        authentication.get_token = fake_get_token;
    });

    it('should be valid', () => {
        given_password("91");
        given_token('000000');
        should_be_valid('joey', '91000000');
    });

    it('should be invalid', () => {
        given_password("91");
        given_token('000000');
        should_be_invalid('joey', 'wrong password');
    });

    function should_be_invalid(account, password) {
        expect(authentication.is_valid(account, password)).toBe(false);
    }

    function given_password(password) {
        fake_get_password.mockReturnValueOnce(password);
    }

    function given_token(token) {
        fake_get_token.mockReturnValueOnce(token);
    }

    function should_be_valid(account, password) {
        expect(authentication.is_valid(account, password)).toBe(true);
    }

});