const textArea = document.querySelector('textarea');
const btn = document.querySelector('button');

const textConverter = () => {
    const synText = window.speechSynthesis;
    const text = textArea.value;

    if (!synText.speaking && text) {
        const utternace = new SpeechSynthesisUtterance(text);
        synText.speak(utternace)
    }

    if (text.length > 50){
        console.log('Działa')
    }

}

btn.addEventListener('click', textConverter);