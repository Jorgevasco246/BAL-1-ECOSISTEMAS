const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const getAnimeDetails = async () => {
  const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);

  if (!response.ok) {
    console.log("Error loading anime");
    return;
  }

  const result = await response.json();
  const anime = result.data;

  const container = document.getElementById("details");

  container.innerHTML = `
    <div class="anime-detail-card">
      <h2>${anime.title}</h2>
      <img src="${anime.images.jpg.image_url}" alt="${anime.title}" />

      <p><strong>Synopsis:</strong> ${anime.synopsis}</p>
      <p><strong>Episodes:</strong> ${anime.episodes ?? "Unknown"}</p>
      <p><strong>Started Date:</strong> ${anime.started_date ?? "Unknown"}</p>
      <p><strong>Ended Date:</strong> ${anime.ended_date ?? "Unknown"}</p>

      <a href="index.html">
        <button class="back-button">Volver</button>
      </a>
    </div>
  `;
};

getAnimeDetails();
