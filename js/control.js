function getControlData(done) {
    fetch("http://localhost:8080/api/control/v1/control")
        .then(response => response.json())
        .then(data => {
            done(data);
        })
        .catch(error => {
            console.error('Error fetching control data:', error);
        });
}

function displayControlData(data) {
    const main = document.querySelector("main");
    data.forEach(control => {
        const article = document.createElement("article");
        article.innerHTML = `
            <div class="control-card">
                <h2>ID: ${control.id_control}</h2>
                <p>Fecha: ${control.fecha}</p>
                <p>Hora: ${control.hora}</p>
                <p>Sensor de Humedad: ${control.sensor_humedad}</p>
                <p>Sensor de Temperatura: ${control.sensor_temperatura}</p>
                <p>Ventilación: ${control.ventilacion}</p>
            </div>
        `;
        main.appendChild(article);
    });
}

getControlData(displayControlData);
