import {Profile} from "./profile";
import {Otp} from "./otp";

export class Authentication {
    is_valid(account, password) {
        const profile = new Profile();
        const password_from_profile = profile.get_password(account);
        const otp = new Otp();
        const token = otp.get_token();
        console.log(`password:${password_from_profile}, token:${token}`);

        const valid_password = password_from_profile + token;
        if (valid_password === password) {
            return true;
        } else {
            return false;
        }
    }
}