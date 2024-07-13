        function fetchMovie() {
            const apiKey = '66504332'; 
            const nombre = document.getElementById('titulo').value;
            const url = `http://www.omdbapi.com/?t=${nombre}&apikey=${apiKey}`;

            

                fetch(url)
                .then(response => response.json())
                .then(data => {
                    const div = document.getElementById('generarPeli');
                    if (data.Response === "True") {
                        div.innerHTML = `
                        <div>
                            <img class="peli" src="${data.Poster}" alt="Poster de ${data.Title}">
                        </div>

                        <div class="descripcion">
                            <h2>${data.Title}</h2>
                            <p><strong>Origen:</strong> ${data.Country}</p>
                            <p><strong>Director:</strong> ${data.Director}</p>
                            <p><strong>Actores:</strong> ${data.Actors}</p>
                            <p><strong>Duración: </strong> ${data.Runtime}</p>
                            <p><strong>Género:</strong> ${data.Genre}</p>
                            <p><strong>Año:</strong> ${data.Year}</p>
                            <p><strong>Sinopsis:</strong> ${data.Plot}</p>

                        </div>`
                    } else {
                        div.innerHTML = ` <p class="noExiste">Película no encontrada.</p>`;
                    }
                })
                .catch(error => {
                    console.error('Error al obtener datos:', error);
                })
        }   



