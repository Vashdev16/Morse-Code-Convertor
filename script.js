function convertToMorse() {
    const textInput = document.getElementById("textInput").value.toUpperCase();
    const morseOutput = document.getElementById("morseOutput");

    const morseCode = {
        'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
        'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.',
        'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
        'Y': '-.--', 'Z': '--..',
        '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...',
        '8': '---..', '9': '----.', '0': '-----',
        ' ': '/'
    };

    let morseResult = "";
    for (let i = 0; i < textInput.length; i++) {
        const char = textInput[i];
        if (morseCode[char]) {
            morseResult += morseCode[char] + " ";
        } else if (char === '\n') {
            morseResult += '\n'; // Preserve newline characters
        } else {
            morseResult += char + " "; // If character is not in the Morse code dictionary, keep it unchanged
        }
    }

    morseOutput.value = morseResult.trim();
}

function convertToText() {
    const morseInput = document.getElementById("morseOutput").value;
    const textOutput = document.getElementById("textInput");

    const morseToText = {
        '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E', '..-.': 'F', '--.': 'G', '....': 'H',
        '..': 'I', '.---': 'J', '-.-': 'K', '.-..': 'L', '--': 'M', '-.': 'N', '---': 'O', '.--.': 'P',
        '--.-': 'Q', '.-.': 'R', '...': 'S', '-': 'T', '..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X',
        '-.--': 'Y', '--..': 'Z',
        '.----': '1', '..---': '2', '...--': '3', '....-': '4', '.....': '5', '-....': '6', '--...': '7',
        '---..': '8', '----.': '9', '-----': '0',
        '/': ' ',
    };

    const morseWords = morseInput.split('   '); // Split Morse code into words
    let textResult = "";
    for (let i = 0; i < morseWords.length; i++) {
        const morseWord = morseWords[i];
        const morseChars = morseWord.split(' ');
        for (let j = 0; j < morseChars.length; j++) {
            const morseChar = morseChars[j];
            if (morseToText[morseChar]) {
                textResult += morseToText[morseChar];
            } else {
                textResult += morseChar; // If Morse code is not in the dictionary, keep it unchanged
            }
        }
        textResult += ' ';
    }

    textOutput.value = textResult.trim();
}

  // Toggle dark mode
  function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}
