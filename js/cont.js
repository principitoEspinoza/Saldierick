// Función para abrir el modal de agregar contacto
function openAddContactModal() {
    document.getElementById('addContactModal').style.display = 'block';
}

// Función para cerrar el modal de agregar contacto
function closeAddContactModal() {
    document.getElementById('addContactModal').style.display = 'none';
}

// Función para agregar contacto
function addContact() {
    const contactName = document.getElementById('contactName').value.trim();
    const contactNumber = document.getElementById('contactNumber').value.trim();
    const contactImage = document.getElementById('contactImage').files[0]; // Obtener la imagen

    if (contactName && contactNumber) {
        const userList = document.getElementById('userList');
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');
        userDiv.onclick = function() {
            selectChat(contactName, URL.createObjectURL(contactImage), 'Última vez hace 10 minutos', contactNumber); // Ajusta según tu lógica
        };
        
        const img = document.createElement('img');
        img.src = contactImage ? URL.createObjectURL(contactImage) : 'img/default.jpg'; // Imagen por defecto si no se selecciona
        img.alt = contactName;
        img.classList.add('profile-pic');

        const userInfoDiv = document.createElement('div');
        userInfoDiv.classList.add('user-info');
        userInfoDiv.innerHTML = `<span>${contactName}</span><span class="last-seen">Última vez hace 10 minutos</span>`;

        userDiv.appendChild(img);
        userDiv.appendChild(userInfoDiv);
        userList.appendChild(userDiv);

        // Cerrar el modal y limpiar los campos
        closeAddContactModal();
        document.getElementById('contactName').value = '';
        document.getElementById('contactNumber').value = '';
        document.getElementById('contactImage').value = '';
    } else {
        alert('Por favor completa todos los campos.');
    }
}
