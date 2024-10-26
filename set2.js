function shiftLetter(letter, shift) {
    let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let result = text.indexOf(letter)
    let newResult = (result+shift)%26
    if (result === -1) {
        return " "
    }
    return text[newResult]
}

function caesarCipher(message, shift) {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const map = {}
    let result = ''
  
    shift = shift % 26
  
    for (let i = 0; i < alphabet.length; i++) {
        map[alphabet[i]] = (i + shift) % 26
    }
  
    for (let i = 0; i < message.length; i++) {
        let char = message[i];
        if (char >= 'A' && char <= 'Z') { 
            result += alphabet[map[char]]
        } else if (char === ' ') { 
            result += ' '
        }
    }
  
    return result;
  }

function shiftByLetter(letter, letterShift) {
    if (letter === ' ') {
      return ' '
  }
  const shiftValue = letterShift.charCodeAt(0) - 'A'.charCodeAt(0)
  const originalValue = letter.charCodeAt(0) - 'A'.charCodeAt(0) 
  const newValue = (originalValue + shiftValue) % 26
  return String.fromCharCode(newValue + 'A'.charCodeAt(0))
}

function vigenereCipher(message, key) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    function shiftChar(char, keyChar) {
        const charIndex = alphabet.indexOf(char)
        const keyIndex = alphabet.indexOf(keyChar)
        return alphabet [(charIndex + keyIndex) % 26]
    }

    let encryptedMessage = ""
    let keyIndex = 0

    for (let i = 0; i < message.length; i++){
        if (message[i] === " "){
            encryptedMessage += " " 
            keyIndex++
        } else {

            encryptedMessage += shiftChar(message[i], key[keyIndex % key.length])
            keyIndex++
        }
    }

    return encryptedMessage
}

function scytaleCipher(message, shift) {
    while (message.length % shift !== 0) {
        message += '_'
    } 
    let result = ''
    
    const numRows = message.length / shift
    
    for (let i = 0; i < message.length; i++) {
        const originalIndex = Math.floor(i / shift) + numRows * (i % shift)
        result += message[originalIndex]
    }
    
    return result; 
}

function scytaleDecipher(message, shift) {
    const numRows = Math.ceil(message.length / shift)
    let result = ''
    for (let i = 0; i < message.length; i++) {
        const originalIndex = Math.floor(i % numRows) * shift + Math.floor(i / numRows)
        result += message[originalIndex]
    }

    return result
}