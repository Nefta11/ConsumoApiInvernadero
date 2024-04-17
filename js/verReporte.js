function getVerReporteData(done) {
    fetch("http://localhost:8080/api/control/v1/vereporte")
        .then(response => response.json())
        .then(data => {
            done(data);
        })
        .catch(error => {
            console.error('Error fetching ver reporte data:', error);
        });
}

function displayVerReporteData(data) {
    const main = document.querySelector("main");
    data.forEach(verReporte => {
        const article = document.createElement("article");
        article.innerHTML = `
            <div class="ver-reporte-card">
                <h2>ID de Reporte: ${verReporte.id_reporte}</h2>
                <p>Fecha: ${verReporte.fecha}</p>
                <p>Hora: ${verReporte.hora}</p>
                <p>Observaciones: ${verReporte.observaciones}</p>
            </div>
        `;
        main.appendChild(article);
    });
}

getVerReporteData(displayVerReporteData);
