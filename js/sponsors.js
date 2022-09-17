const container = document.querySelector(".container")
const programme = [
	{ name: "Kelray Ltd.", image: "images/Sponsors/kelray.jpg" },
	{ name: "The National Lottery", image: "images/Sponsors/lottery.jpeg" },
	{ name: "Pen Y Cymoedd", image: "images/Sponsors/windfarm.jpeg" },
]
const showProgramme = () => {
  let output = ""
  programme.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="${image}">Large Version</a>
              </div>
              `)
  )
  container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showProgramme)

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/Cwmfest/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}