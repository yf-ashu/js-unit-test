export class Otp {
    get_token() {
        return Math.floor(Math.random() * Math.floor(1000000));
    }
}