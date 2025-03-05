const root = document.getElementById("root");
const results = document.getElementById("search-results");
let data;

fetch(
  "https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMSkillsNetwork-JS0101EN-SkillsNetwork/travel1.json"
)
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    data = response;
    data.beaches[0].image = "./beach-one.jpeg";
    data.beaches[1].image = "./beach-two.jpg";
    data.temples[0].image = "./temple-one.jpg";
    data.temples[1].image = "./temple-two.jpg";
    data.countries[0].cities[0].image = "./country-one.jpg";
    data.countries[1].cities[0].image = "./country-two.jpg";
    data.countries[2].cities[0].image = "./country-three.jpg";
    console.log(data);
  });
root.innerHTML =
  "<h1>Explore Dream Desitnation</h1><p>It encourages exploration of unfamiliar territories, embracing diverse cultures and landscapes, while pursuing the desired destination that captivates the heart and ignites the sense of wonder.</p><br><button>Book Now</button>";
document.getElementById("home").addEventListener("click", (event) => {
  event.preventDefault();
  root.innerHTML =
    "<h1>Explore Dream Desitnation</h1><p>It encourages exploration of unfamiliar territories, embracing diverse cultures and landscapes, while pursuing the desired destination that captivates the heart and ignites the sense of wonder.</p><br><button>Book Now</button>";
});
document.getElementById("about").addEventListener("click", (event) => {
  event.preventDefault();
  root.innerHTML =
    "<h1>About Us</h1><p>Welcome to our company! We are a team of passionate individuals dedicated to provide excellent service / products to our customers. Our mission is to <b>provide the best experience </b> for people traveling to different desitnations around the world.</p>";
});
document.getElementById("contact").addEventListener("click", (event) => {
  event.preventDefault();
  root.innerHTML = `<h1>Contact Us</h1>
    <p>Get In Touch</p>
    <label for="name">Name</label><br>
    <input type="text" name="" id=""><br>
    <label for="email">email</label><br>
    <input type="email" name="email" id="email"><br>
    <label for="message">Message</label><br>
    <textarea type="text" name="message" id=""></textarea><br>
    <button>Submit</button><br></br>`;
});
document.getElementById("search-btn").addEventListener("click", (event) => {
  event.preventDefault();
  const searchElement = document.getElementById("search-input");

  const searchQuery = searchElement.value;

  console.log("hello");

  results.classList.toggle("overlay");
  if (["beach", "beaches"].includes(searchQuery.toLowerCase())) {
    let searchHtml = ``;
    for (var i = 0; i < data.beaches.length; i++) {
      searchHtml =
        searchHtml +
        `
        <div>
        <p>${data.beaches[i].name}</p>
        <p>${data.beaches[i].description}</p>
        <img src=${data.beaches[i].image} style="width:300px; height:300px;" alt="image of beach">
        <hr>
        </div>
        `;
    }
    results.innerHTML = searchHtml;
  } else if (["country", "countries"].includes(searchQuery.toLowerCase())) {
    console.log(data.countries);
    let searchHtml = ``;
    for (var i = 0; i < data.countries.length; i++) {
      searchHtml =
        searchHtml +
        `
        <div>
        <p>${data.countries[i].cities[0].name}</p>
        <p>${data.countries[i].cities[0].description}</p>
        <img src=${data.countries[i].cities[0].image} style="width:300px; height:300px;" alt="image of country">
        <hr>
        </div>
        `;
    }
    results.innerHTML = searchHtml;
  } else if (["temple", "temples"].includes(searchQuery.toLowerCase())) {
    console.log(data.temples);
    let searchHtml = ``;
    for (var i = 0; i < data.temples.length; i++) {
      searchHtml =
        searchHtml +
        `
        <div>
        <p>${data.temples[i].name}</p>
        <p>${data.temples[i].description}</p>
        <img src=${data.temples[i].image} style="width:300px; height:300px;" alt="image of temple">
        <hr>
        </div>
        `;
    }
    results.innerHTML = searchHtml;
  }
});

document.getElementById("clear-btn").addEventListener("click", (event) => {
  event.preventDefault();
  results.innerHTML = "";
  results.classList.remove("overlay");
});
