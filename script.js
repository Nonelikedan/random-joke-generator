const jokeBtn = document.getElementById("jokeBtn");
const joke = document.getElementById("joke");
const punchline = document.getElementById("punchline");
const revealBtn = document.getElementById("revealBtn");

jokeBtn.addEventListener("click", async function () {
  joke.textContent = "Getting your joke...";
  punchline.textContent = "";
  punchline.classList.add("hidden");
  revealBtn.classList.add("hidden");

  const category = "Dark";

  const url = `https://v2.jokeapi.dev/joke/${category}`;

  try {
    const response = await fetch(url);

    const data = await response.json();

    if (data.type === "single") {
      joke.textContent = data.joke;
    } else {
      joke.textContent = data.setup;
      punchline.textContent = data.delivery;

      revealBtn.classList.remove("hidden");
    }
  } catch (error) {
    joke.textContent = "Oops! Couldn't fetch a joke. Check your connection.";

    console.error("The API request failed:", error);
  }
});

revealBtn.addEventListener("click", function () {
  punchline.classList.remove("hidden");
  revealBtn.classList.add("hidden");
});
