const catElement = document.getElementById("cat");
const likeButton = document.getElementById("like-button");
const dislikeButton = document.getElementById("dislike-button");
const BASE_API = "https://api.thecatapi.com/v1/images/search";
const contenedor = document.getElementById("content");

const SPINNER = `<div  class="lds-ring" id="sp"><div></div><div></div><div></div><div></div></div>`;

async function getCats() {
  try {
    const response = await fetch(BASE_API);
    const cats = await response.json();
    contenedor.insertAdjacentHTML("afterBegin", SPINNER);
    catElement.style.display = "none";
    catElement.addEventListener("load", (e) => {
      const SP = document.getElementById("sp");
      if (cats) SP.remove();
      catElement.style.display = "block";
    });
    console.log(cats);
    return cats;
  } catch (error) {
    console.log(error);
  }
}

function printCat() {
  getCats().then((cats) => cats.map((cat) => (catElement.src = cat.url)));
}

likeButton.addEventListener("click", () => printCat());
dislikeButton.addEventListener("click", () => printCat());
