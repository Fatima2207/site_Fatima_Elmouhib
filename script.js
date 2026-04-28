function showMessage() {
  alert("Message envoyé !");
}


async function loadGames() {
  const res = await fetch("https://api.sampleapis.com/switch/games");
  const data = await res.json();
  console.log(data);
}


try {
  // fetch
} catch (error) {
  console.log("Erreur");
}
