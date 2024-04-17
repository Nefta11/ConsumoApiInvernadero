function getUsuarioData(done) {
    fetch("http://localhost:8080/api/control/v1/usuario")
        .then(response => response.json())
        .then(data => {
            done(data);
        })
        .catch(error => {
            console.error('Error fetching usuario data:', error);
        });
}

function displayUsuarioData(data) {
    const main = document.querySelector("main");
    data.forEach(usuario => {
        const article = document.createElement("article");
        article.innerHTML = `
            <div class="usuario-card">
                <h2>ID: ${usuario.id_usuario}</h2>
                <p>Nombre: ${usuario.nombre}</p>
                <p>Apellido Paterno: ${usuario.apellido_paterno}</p>
                <p>Apellido Materno: ${usuario.apellido_materno}</p>
                <p>Tipo: ${usuario.tipo}</p>
            </div>
        `;
        main.appendChild(article);
    });
}

getUsuarioData(displayUsuarioData);
