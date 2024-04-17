function getReporteData(done) {
    fetch("http://localhost:8080/api/control/v1/reporte")
        .then(response => response.json())
        .then(data => {
            done(data);
        })
        .catch(error => {
            console.error('Error fetching reporte data:', error);
        });
}

function displayReporteData(data) {
    const main = document.querySelector("main");
    data.forEach(reporte => {
        const article = document.createElement("article");
        article.innerHTML = `
            <div class="reporte-card">
                <h2>ID: ${reporte.id_reporte}</h2>
                <p>Fecha: ${reporte.fecha}</p>
                <p>Hora: ${reporte.hora}</p>
                <p>ID de Usuario: ${reporte.id_usuario}</p>
                <p>Nombre: ${reporte.nombre}</p>
                <p>Observaciones: ${reporte.observaciones}</p>
            </div>
        `;
        main.appendChild(article);
    });
}

getReporteData(displayReporteData);
