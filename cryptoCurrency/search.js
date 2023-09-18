const searchData = async () => {
  const currentPath = window.location.href;
  const urlObj = new URL(currentPath);
  const params = new URLSearchParams(urlObj.search);
  if (!params.has("q")) {
    return;
  }

  document.getElementsByName("q")[0].value = params.get("q");
  const res = await fetch(
    `https://api.coingecko.com/api/v3/search?query=${params.get("q")}`
  );
  const data = await res.json();
  renderCoinsOnScreen(data);
};

const renderCoinsOnScreen = (data) => {
  console.log(data.coins);
  for (let i = 0; i < data.coins.length; i++) {
    const coinData = data.coins[i];
    const index = i + 1;
    const logo = coinData.thumb;
    const name = `${coinData.name} (${coinData.symbol})`;
    const coinId = coinData.id;
    createCard(index, logo, name, coinId);
  }
};

const createCard = (index, logo, name, coinId) => {
  console.log(logo, name, coinId);
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("topcoinsCardContainer");
  cardContainer.classList.add("searchContainer22");

  const Index = document.createElement("h3");
  Index.innerText = index;

  const img = document.createElement("img");
  img.src = logo;
  img.classList.add("topCoinsLogoImg");

  const div = document.createElement("div");
  div.classList.add("nameAndPriceContainerTopCoins");

  const name2 = document.createElement("h2");
  name2.innerText = name;

  const price2 = document.createElement("p");
  price2.innerText = coinId;

  div.appendChild(name2);
  div.appendChild(price2);

  const moreDetails = document.createElement("a");
  moreDetails.innerText = "More Details";
  moreDetails.href = "./detail.html?id=" + coinId;

  cardContainer.appendChild(Index);
  cardContainer.appendChild(img);
  cardContainer.appendChild(div);
  cardContainer.appendChild(moreDetails);
  document.getElementById("searchResultContainer").appendChild(cardContainer);
};

window.onload = function () {
  searchData();
};
