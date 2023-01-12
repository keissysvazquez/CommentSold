export class Password {
    password = function generateRandomPassword() {
        const MIN_LENGTH = 8;
        const uppercaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowercaseChar = 'abcdefghijklmnopqrstuvwxyz';
        const numericChar = '0123456789';

        let password = '';
        while (password.length < MIN_LENGTH) {
            password += getRandomChar(uppercaseChar);
            password += getRandomChar(lowercaseChar);
            password += getRandomChar(numericChar);
        }
        return password;

        function getRandomChar(characters) {
            return characters.charAt(Math.floor(Math.random() * characters.length));
        }
    }
}
