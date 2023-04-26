const kdramalist = [
  "1387213",
  "965848",
  "1256284",
  "996611",
  "4404651",
  "986594",
  "1267355",
  "4682783",
  "1259371",
  "888109",
  "944829",
];
const chinalist = [];
const animelist = [];
const gameslist = [];

const url = "https://kinopoiskapiunofficial.tech/";

const getKinoData = (id) => {
  fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, {
    method: "GET",
    headers: {
      "X-API-KEY": "04db936b-f5bf-4650-9b9a-ded4390aeea9",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((json) => {
      $("#mainimage").attr("src", json.posterUrl);
      $("#titleDescription").text(json.description);
      $("#titleYear").text(json.startYear);
      $("#titleName").text(json.nameRu);
      $("#titleGenre").text(genresToString(json.genres));
      $("#titleRating").text("Оценка: " + json.ratingImdb);
    })
    .catch((err) => console.log(err));
};

const genresToString = (arr) => {
  return arr.map((obj) => obj.genre).join(", ");
};

let currentTitle = 0;
$("#btnright").on("click", function () {
  if (kdramalist.length >= currentTitle) {
    currentTitle++;
  }
  getKinoData(kdramalist[currentTitle]);
});

$("#btnleft").on("click", function () {
  if (currentTitle > 0) {
    currentTitle--;
  }
  getKinoData(kdramalist[currentTitle]);
});

getKinoData(kdramalist[0]);
