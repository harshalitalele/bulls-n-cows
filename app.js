var wordsList = ['Apple', 'Banana'],
    guessWord = '';

function displayWordInput(wordLen) {
    var container = document.getElementById('word-input'),
        i = 0;
    
    for(i = 0; i < wordLen; i++) {
        var elem = getCharacterElem();
        container.appendChild(elem);
    }
}

function getCharacterElem() {
    var charElem = document.createElement('input');
    
    charElem.setAttribute('type', 'text');
    charElem.setAttribute('maxLength', 1);
    
    return charElem;
}

displayWordInput(4);
