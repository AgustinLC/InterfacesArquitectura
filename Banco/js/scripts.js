// Obtenemos el formulario y la tabla
const form = document.getElementById('userForm');
const userList = document.getElementById('userList');

// Creamos un arreglo para almacenar los usuarios
let users = [];

// Agregamos un evento submit al formulario
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Obtenemos los valores del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Creamos un nuevo usuario
    const user = {
        name,
        email
    };

    // Agregamos el usuario al arreglo
    users.push(user);

    // Limpiamos el formulario
    form.reset();

    // Actualizamos la tabla
    updateUserList();
});

// Función para actualizar la tabla
function updateUserList() {
    // Limpiamos la tabla
    userList.innerHTML = '';

    // Recorremos el arreglo de usuarios
    users.forEach((user, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="py-2 px-4 border-b">${user.name}</td>
            <td class="py-2 px-4 border-b">${user.email}</td>
            <td class="py-2 px-4 border-b">
                <button class="bg-red-500 text-white px-2 py-1 rounded-md" onclick="deleteUser(${index})">Eliminar</button>
            </td>
        `;
        userList.appendChild(row);
    });
}

// Función para eliminar un usuario
function deleteUser(index) {
    users.splice(index, 1);
    updateUserList();
}