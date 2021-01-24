import {get_password} from "./profile";
import {get_token} from "./otp";

const send = (s) => {
    console.log(message);
}

export const is_valid = (account, password) => {
    const password_from_profile = get_password(account);
    const token = get_token();
    console.log(`password:${password_from_profile}, token:${token}`);

    const valid_password = password_from_profile + token;
    if (valid_password === password) {
        return true;
    } else {
        send(`account:${account} try to login failed.`);
        return false;
    }
}

