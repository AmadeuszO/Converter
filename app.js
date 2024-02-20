const textArea = document.querySelector('textarea');
const btn = document.querySelector('button');

const textConverter = () =>{
    const synText = window.speechSynthesis;
    const text = textArea.value;

    const utternace = new SpeechSynthesisUtterance(text);
    synText.speak(utternace)
}

btn.addEventListener('click', textConverter);