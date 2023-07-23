function toggleText() {
  let pizzaPlaces = [
    {
      name: "Amrut Cafe",
      address: "near Java Showroom",
      rating: "Google Rating: 4.3 / 5"
    },
    {
      name: "The Cafe divine",
      address: "Bhagya Nagar Road",
      rating: "Google Rating: 4.5 / 5"
    },
    {
      name: "The Cafe Expresoo",
      address: "Stadium Rd, opposite visawa garden",
      rating: "Google Rating: 4.3 / 5"
    },
    {
      name: "Vintage Coffee Co",
      address: "19, Tilak Nagar",
      rating: "Google Rating: 4.3 / 5"
    },
    {
      name: "BOMBAY CAFE NANDED",
      address: "Guru Gobind Singh Ji Rd",
      rating: "Google Rating: 3.8 / 5"
    },
    {
      name: "The Town Cafe & Waffle",
      address: "Shop no.1/1A Khandewal complex",
      rating: "Google Rating: 4.9 / 5"
    },
    {
      name: "Cafe Frespresso",
      address: "Signal Point,1,Bhagya Nagar",
      rating: "Google Rating: 4.3 / 5"
    },
    {
      name: "BREADBASH NANDED",
      address: "Sahyog Complex, near Old BK Hall, Shri Nagar",
      rating: "Google Rating: 4.9 / 5"
    },
    {
      name: "All Day Sandwiches",
      address: "Ug-7 Tarodekar Market, Vazirabad Rd",
      rating: "Google Rating: 3.9 / 5"
    },
    {
      name: "Friends Resto & Cafe",
      address: "Opp to SGGSIE&T",
      rating: "Google Rating: 4.1 / 5"
    }
  ];

  let randomPizzeria =
    pizzaPlaces[Math.floor(Math.random() * pizzaPlaces.length)];

  document.getElementById("name").innerHTML = randomPizzeria.name;
  document.getElementById("address").innerHTML = randomPizzeria.address;
  document.getElementById("rating").innerHTML = randomPizzeria.rating;

  var text = document.getElementById("pizza-info");
  var decideBtn = document.getElementById("btn-id");

  if (text.style.display === "") {
    text.style.display = "block";
    decideBtn.innerHTML = "Decide<br>Again";
  }
}
