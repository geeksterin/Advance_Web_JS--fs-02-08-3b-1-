const container = document.getElementById("container");

const url =
  "https://api.unsplash.com/photos/random/?client_id=_DDIVJSgdK-GI1wA3aHOtxC9YTt8tCY6-4jMk7guznY&count=20";

const fetchImage = () => {
  const image = fetch(url);
  image
    .then((data) => {
      console.log(data);
      return data.json();
    })
    .then((data) => {
      console.log(data);
      data.map((ele) => {
        console.log(ele.urls.small);
        const img = document.createElement("img");
        img.src = ele.urls.small;
        container.appendChild(img);
      });
    });
  console.log(image);
};

window.addEventListener("scroll", () => {
  console.log(window.innerHeight);
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    fetchImage();
  }
});

fetchImage();
