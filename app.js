const textArea = document.querySelector('textarea');
const btn = document.querySelector('button');
let isSpeaking = true;

const textConverter = () => {
    const synText = window.speechSynthesis;
    const text = textArea.value;

    if (!synText.speaking && text) {
        const utternace = new SpeechSynthesisUtterance(text);
        synText.speak(utternace)
    }

    if (text.length > 50) {
        if (synText.speaking && isSpeaking) {
            btn.innerHTML = 'Stop';
            synText.resume();
            isSpeaking = false;
        }else {
            btn.innerHTML = 'Resume';
            synText.pause();
            isSpeaking = true;
        }
    }

    setInterval((() => {
        if (!synText.speaking && !isSpeaking) {
            isSpeaking = true;
            btn.innerHTML = 'Conver'
        }
    }))

}

btn.addEventListener('click', textConverter);