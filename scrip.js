console.log("hello world");

const getAnime = async () => {
  const response = await fetch("https://api.jikan.moe/v4/anime");

  if (response.ok) {
    const result = await response.json();
    const animes = result.data;

    const container = document.getElementById("anime");
    container.innerHTML = "";

    for (const anime of animes) {
      const animeElement = document.createElement("div");
      animeElement.classList.add("anime-card");

      animeElement.innerHTML = `
        <h3>${anime.title}</h3>
        <h5>${anime.synopsis}</h5>
        <img src="${anime.images.jpg.image_url}" alt="${anime.title}" width="150" />
        <a href="details.html?id=${anime.mal_id}">
    <button>DETALLES</button>
  </a>
      `;

      container.appendChild(animeElement);
    }
    console.log(animes);
  } else {
    console.log("FALLO EL FETCH");
  }
};

getAnime();
