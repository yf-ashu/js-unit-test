export class Holiday {
    sayHello() {
        const today = new Date();
        if (today.getMonth() === 11 && today.getDate() === 25) {
            return 'Merry Xmas';
        }
        return 'Today is not Xmas';
    }
}