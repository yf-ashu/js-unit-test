import {Authentication} from "../src/authentication";

describe('authenticate account is valid', function () {
    let authentication = new Authentication();
    let fake_get_password;
    let fake_get_token;
    let fake_send;
    beforeEach(() => {
        authentication = new Authentication();
        fake_get_password = jest.fn();
        authentication.get_password = fake_get_password;
        fake_get_token = jest.fn();
        authentication.get_token = fake_get_token;
        fake_send = jest.fn();
        authentication.send = fake_send;
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

    it('should send notification with account and status when invalid', () => {
        when_invalid('joey');
        should_send_notification("joey", "login failed");
    });

    function should_send_notification(account, status) {
        expect(fake_send.mock.calls[0][0]).toEqual(
            expect.stringContaining(account) && expect.stringContaining(status)
        );
    }

    function when_invalid(account) {
        given_password("91");
        given_token('000000');
        authentication.is_valid(account, 'wrong password');
    }

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