document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const length = parseInt(document.getElementById('length').value);
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSymbols = document.getElementById('symbols').checked;
    
    const password = generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols);
    
    document.getElementById('result').innerHTML = `<p>Contraseña generada: <strong>${password}</strong></p>`;
});

function generatePassword(length, uppercase, lowercase, numbers, symbols) {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    
    let charPool = '';
    if (uppercase) charPool += uppercaseChars;
    if (lowercase) charPool += lowercaseChars;
    if (numbers) charPool += numberChars;
    if (symbols) charPool += symbolChars;
    
    if (charPool === '') {
        return 'Error: Selecciona al menos un tipo de carácter.';
    }
    
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charPool.length);
        password += charPool[randomIndex];
    }
    
    return password;
}
