const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const container = document.getElementById("details");

//LOADING STATE
container.innerHTML = "<p>Cargando</p>";

const getAnimeDetails = async () => {
  try {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);

    if (!response.ok) {
      throw new Error("Error cargando los details");
    }

    const result = await response.json();
    const anime = result.data;

    //EMPTY STATE
    if (!anime) {
      container.innerHTML = "<p>Anime no encontrado</p>";
      return;
    }

    //RESULTS STATE
    container.innerHTML = `
      <div class="anime-detail-card">
        <h2>${anime.title}</h2>
        <img src="${anime.images.jpg.image_url}" alt="${anime.title}" />

        <p><strong>Synopsis:</strong> ${anime.synopsis}</p>
        <p><strong>Episodes:</strong> ${anime.episodes}</p>
        <p><strong>Started Date:</strong> ${anime.aired.from}</p>
        <p><strong>Ended Date:</strong> ${anime.aired.to}</p>

        <a href="index.html">
          <button class="back-button">Volver</button>
        </a>
      </div>
    `;
  } catch (error) {
    //ERROR STATE
    container.innerHTML = "<p>Error cargando los details.</p>";
    console.error(error);
  }
};

getAnimeDetails();
