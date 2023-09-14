const url =
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json";

function fetchdata1() {
  const data = fetch(url);
  data
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log("data from .then function", data);
    });
}
fetchdata1();

async function fetchdata() {
  try {
    const data = await fetch(url);
    const res = await data.json();
    console.log("data from async await", res);
  } catch (err) {
    console.log(err);
  }
}

fetchdata();
