export class Password {
        password = function generateRandomPassword(){
            const MIN_LENGTH = 8; 
            const uppercaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; 
            const lowercaseChar = 'abcdefghijklmnopqrstuvwxyz';
            const numericChar = '0123456789'; 

            const charPool = uppercaseChar + lowercaseChar + numericChar; 
            let password = ''
            while (password.length < MIN_LENGTH){ 
                const index = Math.floor(Math.random() * charPool.length)
                password += charPool[index]
            }
            return password;
        }
}
