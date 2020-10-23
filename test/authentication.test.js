import {Authentication} from "../src/authentication";

describe('authenticate account is valid', function () {
    it('should be valid', () => {
        let authentication = new Authentication();
        const fake_get_password = jest.fn();
        fake_get_password.mockReturnValueOnce("91");
        authentication.get_password = fake_get_password;

        const fake_get_token = jest.fn();
        fake_get_token.mockReturnValueOnce('000000');
        authentication.get_token = fake_get_token;

        expect(authentication.is_valid('joey', '91000000')).toBe(true);
    });
});