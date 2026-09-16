// Coordinates always use [latitude, longitude].
const USC = [34.0224, -118.2851];
const HOME = [39.9042, 116.4074]; // Beijing, China

const map = L.map("map").setView(USC, 12);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap contributors</a>"
}).addTo(map);

L.circleMarker(USC, {
  radius: 9,
  color: "#990000",
  fillColor: "#ffcc00",
  fillOpacity: 1,
  weight: 3
})
  .addTo(map)
  .bindPopup("<strong>USC</strong><br>Where I study Geographic Information Science and Technology.")
  .openPopup();

L.circleMarker(HOME, {
  radius: 9,
  color: "#990000",
  fillColor: "#ffcc00",
  fillOpacity: 1,
  weight: 3
})
  .addTo(map)
  .bindPopup("<strong>Beijing, China</strong><br>My hometown.");

const homeButton = document.getElementById("home-button");
const uscButton = document.getElementById("usc-button");
const status = document.getElementById("status");
const questionButton = document.getElementById("question-button");
const classmateQuestion = document.getElementById("classmate-question");

homeButton.addEventListener("click", () => {
  map.flyTo(HOME, 11, { duration: 1.6 });
  status.textContent = "Flying home to Beijing, China.";
});

uscButton.addEventListener("click", () => {
  map.flyTo(USC, 12, { duration: 1.6 });
  status.textContent = "Back on the USC campus.";
});

// This function provides an interaction beyond the map buttons from the class demo.
function showClassmateQuestion() {
  const discussionQuestion = "What real-world problem would you most like to address using GIS, remote sensing, or AI, and why?";
  classmateQuestion.textContent = discussionQuestion;
  questionButton.textContent = "Show the question again";
}

questionButton.addEventListener("click", showClassmateQuestion);
