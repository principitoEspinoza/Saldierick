// Función para abrir el modal de perfil
function openProfileModal() {
    const userName = "Tu Nombre"; // Cambia esto a la variable real
    const userNumber = "Tu Número de Teléfono"; // Cambia esto a la variable real

    // Asigna los valores al modal
    document.getElementById('profileName').innerText = userName;
    document.getElementById('profileNumber').innerText = userNumber;

    // Muestra el modal
    document.getElementById('profileModal').style.display = 'block';
}

// Función para cerrar el modal de perfil
function closeProfileModal() {
    document.getElementById('profileModal').style.display = 'none';
}

// Agregar un evento para cerrar el modal al hacer clic fuera de él
window.onclick = function(event) {
    const modal = document.getElementById('profileModal');
    if (event.target === modal) {
        closeProfileModal();
    }
}

// Función para abrir el modal de editar perfil
function openEditProfileModal() {
    const userName = document.getElementById('profileName').innerText;
    const userNumber = document.getElementById('profileNumber').innerText;

    // Llena los campos del modal de edición con los datos actuales
    document.getElementById('editProfileName').value = userName;
    document.getElementById('editProfileNumber').value = userNumber;

    // Muestra el modal de edición
    document.getElementById('editProfileModal').style.display = 'block';
}

// Función para cerrar el modal de editar perfil
function closeEditProfileModal() {
    document.getElementById('editProfileModal').style.display = 'none';
}

// Función para guardar los cambios del perfil editado
function saveProfileChanges() {
    const newName = document.getElementById('editProfileName').value;
    const newNumber = document.getElementById('editProfileNumber').value;

    // Actualiza los datos en el modal de perfil
    document.getElementById('profileName').innerText = newName;
    document.getElementById('profileNumber').innerText = newNumber;

    // Cierra el modal de edición
    closeEditProfileModal();
}
