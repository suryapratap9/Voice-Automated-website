import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
// import navbar from '../navbar/Navbar'
import './speech.css'

var flag=1;
const Speech = () => {
    SpeechRecognition.startListening({continuous: true, language: 'en-IN'});
    const commands = [
        {
            command: 'start',
            callback:() => {
                flag = 1;
                document.getElementById("myVideo").play();
            }
        },
        {
            command: 'stop',
            callback:() => {
                flag = 0;
                document.getElementById("myVideo").pause();
            }
        },
        {
            command: 'reset',
            callback:({resetTranscript}) => resetTranscript()
        },
        {
            command: 'open *',
            callback: (site) => {
                if(flag == 1)
                window.open('http://'+site);
            }
        },,
        {
            command: 'search *',
            callback: (site) => {
                if(flag == 1)
                window.open('http://google.com/search?q='+site);
            }
        },
        {
            command: 'home',
            callback: () => {
                if(flag == 1)
                window.location.href = 'http://localhost:3000/';
            }
        },
        {
            command: 'contact page',
            callback: () => {
                if(flag == 1)
                window.location.href = 'http://localhost:3000/contact';
            }
        },
        {
            command: 'design page',
            callback: () => {
                if(flag == 1)
                window.location.href = 'http://localhost:3000/arch';
            }
        },
        {
            command: 'problems page',
            callback: () => {
                if(flag == 1)
                window.location.href = 'http://localhost:3000/problem';
            }
        },
        {
            command: 'crack and dent',
            callback: () => {
                if(flag == 1){
                    window.open('https://huggingface.co/spaces/remotewith/dented_final');
                    // window.location.href = 'https://huggingface.co/spaces/remotewith/    dented_final';
                }
            }
        }
    ]

    const {transcript, resetTranscript} = useSpeechRecognition({commands});

    if(!SpeechRecognition.browserSupportsSpeechRecognition()){
        return null;
    }

  return (
    <div className='speechDiv'>
        {/* <button onClick={SpeechRecognition.startListening({continuous: true, language: 'en-IN'})}>Start</button>
        <button onClick={SpeechRecognition.stopListening}>Stop</button>
        <button onClick={resetTranscript}>Reset</button> */}
        <p>{transcript}</p>
    </div>
  )
}

export default Speech