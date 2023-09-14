const getCurrentConversionRate = async () => {
  const data = await fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr"
  );
  const res = await data.json();
  loadTopCoins(res);
};

const loadTopCoins = async (data) => {
  const conversionRate = data.bitcoin.inr;
  const trendingCoins = await fetch(
    "https://api.coingecko.com/api/v3/search/trending"
  );
  const res = await trendingCoins.json();
  renderTopCoinsOnScreen(conversionRate, res);
};

const renderTopCoinsOnScreen = (conversionRate, topCoins) => {
  console.log(conversionRate, topCoins);
  for (let i = 0; i < topCoins.coins.length; i++) {
    const coinData = topCoins.coins[i].item;
    const logo = coinData.thumb;
    const name = `${coinData.name} (${coinData.symbol})`;
    const price =
      Math.round(coinData.price_btc * conversionRate * 10000) / 10000;
    createCard(logo, name, price);
  }
};

const createCard = (logo, name, price) => {
  console.log(logo, name, price);
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("topcoinsCardContainer");

  const img = document.createElement("img");
  img.src = logo;
  img.classList.add("topCoinsLogoImg");

  const div = document.createElement("div");
  div.classList.add("nameAndPriceContainerTopCoins");

  const name2 = document.createElement("h2");
  name2.innerText = name;

  const price2 = document.createElement("p");
  price2.innerText = price;

  div.appendChild(name2);
  div.appendChild(price2);

  cardContainer.appendChild(img)
  cardContainer.appendChild(div)
  document.getElementById("TopCoinsDiv").appendChild(cardContainer)
};

window.onload = function () {
  getCurrentConversionRate();
};
