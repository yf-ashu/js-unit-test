export class Holiday {
    say_hello() {
        const today = this.get_today();
        if (today.getMonth() === 11 && today.getDate() === 25) {
            return 'Merry Xmas';
        }
        return 'Today is not Xmas';
    }

    get_today() {
        const today = new Date();
        return today;
    }
}