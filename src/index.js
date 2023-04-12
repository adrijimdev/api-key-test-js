function showSerieInfo() {
  console.log("estoy en src");
  const container = document.getElementById("container");
  container.className = "serie-info-container";
  container.innerHTML = "<h1 id='serie-title'></h1>\n<hr>";
  const serieTitle = document.getElementById("serie-title");
  const smallContainer = document.createElement("div");
  smallContainer.className = "small-container";
  // const idSerie = 100088;
  // ?idSerie=${idSerie}
  fetch("/.netlify/functions/getSerieData", {
    method: "POST",
    body: JSON.stringify({
      idSerie: 94605
    }),
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      container.innerHTML += `
        <div class="small-container">
          <img src="https://image.tmdb.org/t/p/w500${data.data.poster_path}" alt="Portada de la serie ${data.data.name}" id="serie-poster">
          <div id="info-body">
            <div class="additional-info">
              <p class="release-date">Primera emisión: ${data.data.first_air_date}</p>            
            </div>
          </div>
        </div>`;
      const additionalInfo = document.getElementsByClassName("additional-info");
      if (data.data.episode_run_time > 0) {
        additionalInfo[0].innerHTML += `<p class="runtime">Duración aproximada episodio: ${data.data.episode_run_time} minutos</p>`;
      }
      const genres = document.createElement("p");
      genres.className = "genres";
      genres.innerText = "Género/s: ";
      for (let i = 0; i < data.data.genres.length; i++) {
        if (i < data.data.genres.length - 1) {
          genres.innerText += `${data.data.genres[i].name}, `;
        } else {
          genres.innerText += `${data.data.genres[i].name}`;
        }
      }
      additionalInfo[0].appendChild(genres);
      const infoBody = document.getElementById("info-body");
      infoBody.innerHTML += `<div class="sinopsis">${data.data.overview}</div>`;
    })
    .catch(error => {
      console.error(error);
    });
}
