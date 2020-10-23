import {Authentication} from "../src/authentication";

describe('authenticate account is valid', function () {
    it('should be valid', () => {
        let authentication = new Authentication();
        expect(authentication.is_valid('joey', '91000000')).toBe(true);
    });
});