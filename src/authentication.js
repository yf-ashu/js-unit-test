import {Profile} from "./profile";
import {Otp} from "./otp";

export class Authentication {
    is_valid(account, password) {
        const password_from_profile = this.get_password(account);
        const token = this.get_token();
        console.log(`password:${password_from_profile}, token:${token}`);

        const valid_password = password_from_profile + token;
        if (valid_password === password) {
            return true;
        } else {
            return false;
        }
    }

    get_token() {
        const otp = new Otp();
        const token = otp.get_token();
        return token;
    }

    get_password(account) {
        const profile = new Profile();
        const password_from_profile = profile.get_password(account);
        return password_from_profile;
    }
}