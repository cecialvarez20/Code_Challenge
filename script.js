document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();

        const datos = {
            nombre: document.getElementById('nombre').value,
            apellido: document.getElementById('apellido').value,
            fechaNacimiento: document.getElementById('fechaNacimiento').value,
        }
        
        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datos),
        })
            .then(response => response.json())
            .then(datos => {
                console.log("Respuesta del servidor:", datos);
            })
            .catch(error => {
                console.error("Error:", error);
            });
    });
});