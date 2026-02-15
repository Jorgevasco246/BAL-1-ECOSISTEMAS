console.log("hello world");

const container = document.getElementById("anime");

//LOADING STATE
container.innerHTML = "<p>Cargando animes</p>";

const getAnime = async () => {
  try {
    const response = await fetch("https://api.jikan.moe/v4/anime");

    //ERROR STATE
    if (!response.ok) {
      throw new Error("Error");
    }

    const result = await response.json();
    const animes = result.data;

    container.innerHTML = "";

    //EMPTY STATE
    if (!animes || animes.length === 0) {
      container.innerHTML = "<p>Anime encontrado</p>";
      return;
    }

    //RESULTS STATE
    for (const anime of animes) {
      const animeElement = document.createElement("div");
      animeElement.classList.add("anime-card");

      animeElement.innerHTML = `
        <h3 id="anime-title-okay">${anime.title}</h3>
        <h5>${anime.synopsis ?? "No synopsis available."}</h5>
        <img src="${anime.images.jpg.image_url}" alt="${anime.title}" width="150" />
        <a href="details.html?id=${anime.mal_id}">
          <button>DETALLES</button>
        </a>
      `;

      container.appendChild(animeElement);
    }
  } catch (error) {
    //ERROR STATE
    container.innerHTML = "<p>Error cargando animes.</p>";
    console.error(error);
  }
};

getAnime();
