let mediaRecorder;
let audioChunks = [];
let isRecording = false;


function toggleRecording() {
    if (!isRecording) {
        startRecording();
    } else {
        stopRecording();
    }
}


function startRecording() {
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
            mediaRecorder = new MediaRecorder(stream);
            mediaRecorder.start();
            isRecording = true;
            audioChunks = [];

            mediaRecorder.addEventListener("dataavailable", event => {
                audioChunks.push(event.data);
            });

            mediaRecorder.addEventListener("stop", () => {
                const audioBlob = new Blob(audioChunks, { type: 'audio/mpeg' });
                const audioUrl = URL.createObjectURL(audioBlob);
                
                
                const audioElement = document.createElement('audio');
                audioElement.src = audioUrl;
                audioElement.controls = true;
                audioElement.style.display = 'block'; 

                
                const messageElement = document.createElement('div');
                messageElement.className = 'message sent';
                messageElement.appendChild(audioElement);

                const chatBox = document.getElementById('messages');
                chatBox.appendChild(messageElement);
                chatBox.scrollTop = chatBox.scrollHeight;

                sendAudioToAPI(audioBlob);
            });
        })
        .catch(error => {
            console.error('Error al acceder al micrófono:', error);
        });
}

function stopRecording() {
    if (mediaRecorder) {
        mediaRecorder.stop();
        isRecording = false;
    }
}

function sendAudioToAPI(audioBlob) {
    const formData = new FormData();
    formData.append('audio', audioBlob, 'audio_message.mp3');

    fetch('http://127.0.0.1:5000/upload_audio', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log('Audio enviado:', data);
    })
    .catch(error => {
        console.error('Error al enviar el audio:', error);
    });
}
// chat.js (en el cliente)
const socket = new WebSocket('ws://localhost:8080');

// Enviar un mensaje
function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value;
    socket.send(message);
    messageInput.value = ''; // Limpiar el campo de entrada
}

// Manejar mensajes recibidos
socket.onmessage = (event) => {
    const messages = document.getElementById('messages');
    const newMessage = document.createElement('div');
    newMessage.textContent = event.data; // Mensaje recibido
    messages.appendChild(newMessage);
    messages.scrollTop = messages.scrollHeight; // Desplazarse al final
};
