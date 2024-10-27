let selectedChatUser = null;
let selectedChatPic = null;
let lastSeenInfo = null;
let chatNumber = null;


function selectChat(name, pic, lastSeen, number) {
    selectedChatUser = name;
    selectedChatPic = pic;
    lastSeenInfo = lastSeen;
    chatNumber = number;

    document.getElementById('chatUser').textContent = name;
    document.getElementById('chatProfilePic').src = pic;
    document.getElementById('lastSeen').textContent = lastSeen;
}


function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value.trim();

    if (message !== "") {
        const messagesContainer = document.getElementById('messages');
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', 'sent-message');
        messageElement.innerHTML = `<span>${message}</span><span class="message-time">${new Date().toLocaleTimeString()}</span>`;
        messagesContainer.appendChild(messageElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight; // Desplazar hacia abajo
        messageInput.value = ''; // Limpiar el campo de entrada
    }
}


function toggleEmojiPicker() {
    const emojiPicker = document.getElementById('emojiPicker');
    emojiPicker.style.display = emojiPicker.style.display === 'none' ? 'block' : 'none';
}

function insertEmoji(emoji) {
    const messageInput = document.getElementById('messageInput');
    messageInput.value += emoji;
}
function getFormattedTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0'); 
    const minutes = now.getMinutes().toString().padStart(2, '0'); 
    const seconds = now.getSeconds().toString().padStart(2, '0'); 
    return `${hours}:${minutes}:${seconds}`; 
}


function enviarMensaje() {
    const messageText = document.getElementById('messageInput').value;
    const messageTime = getFormattedTime();  

    
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', 'sent-message');
    messageElement.innerHTML = `
        <div>${messageText}</div>
        <div class="message-time">${messageTime}</div>
    `;

    
    document.getElementById('chatContainer').appendChild(messageElement);
    document.getElementById('messageInput').value = '';  
}

function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value.trim();

    if (message !== "") {
        const messagesContainer = document.getElementById('messages');
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', 'sent-message');
        
       
        const messageTime = new Date().toLocaleTimeString();
        messageElement.innerHTML = `
            <div>${message}</div>
            <div class="message-time">${messageTime}</div>
        `;
        
        messagesContainer.appendChild(messageElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight; // Desplazar hacia abajo
        messageInput.value = ''; 
    }
}

function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value.trim();

    if (message !== "") {
        const messagesContainer = document.getElementById('messages');
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', 'sent-message');
        
        
        messageElement.innerHTML = `<div>${message}</div>`;
        
        messagesContainer.appendChild(messageElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight; 
        messageInput.value = '';
    }
}
function openAddContactModal() {
    document.getElementById('addContactModal').style.display = 'block';
}

function closeAddContactModal() {
    document.getElementById('addContactModal').style.display = 'none';
}

function addContact() {
    const name = document.getElementById('contactName').value;
    const number = document.getElementById('contactNumber').value;
    closeAddContactModal();
}

function openProfileModal() {
    const selectedUserName = document.getElementById('chatUser').innerText; 
    const selectedUserNumber = 'Número del usuario'; 
    
    document.getElementById('profileName').innerText = selectedUserName;
    document.getElementById('profileNumber').innerText = selectedUserNumber;
    document.getElementById('profileModal').style.display = 'block';
}

function closeProfileModal() {
    document.getElementById('profileModal').style.display = 'none';
}

function openEditProfileModal() {
    document.getElementById('editProfileName').value = document.getElementById('profileName').innerText;
    document.getElementById('editProfileNumber').value = document.getElementById('profileNumber').innerText;
    document.getElementById('editProfileModal').style.display = 'block';
}

function closeEditProfileModal() {
    document.getElementById('editProfileModal').style.display = 'none';
}

function saveProfileChanges() {
    closeEditProfileModal();
}
function selectChat(userName, profilePic, lastSeen, phoneNumber) {
    currentChatUser = userName; 
    document.getElementById('chatUser').innerText = userName;
    document.getElementById('chatProfilePic').src = profilePic;
    document.getElementById('lastSeen').innerText = lastSeen;

    
    loadChatMessages();
}

function loadChatMessages() {
    const messagesDiv = document.getElementById('messages');
    messagesDiv.innerHTML = ''; 
    
   
    if (chatMessages[currentChatUser].length === 0) {
        messagesDiv.innerHTML = `<div class="message system">Inicia una conversación con ${currentChatUser}...</div>`;
    } else {
       
        chatMessages[currentChatUser].forEach(message => {
            messagesDiv.innerHTML += `<div class="message sent">${message}</div>`;
        });
    }
}
