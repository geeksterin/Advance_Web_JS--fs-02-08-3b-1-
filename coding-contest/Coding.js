const container = document.getElementById("container");

const url = "https://kontests.net/api/v1/all";

const response = fetch(url);
response
  .then((data) => {
    return data.json();
  })
  .then((res) => {
    console.log(res);
    res.map((ele) => {
      const contestCard = document.createElement("div");
      contestCard.classList.add("contestCard");

      const name = document.createElement("h2");
      name.classList.add("name");
      name.innerText = ele.name;

      const hostingPlatform = document.createElement("p")
      hostingPlatform.classList.add = "hostingPlatform"
      hostingPlatform.innerText = ele.site

      const cardDetails = document.createElement("div");
      cardDetails.classList.add("cardDetails");
      cardDetails.innerHTML = `
                <p class="startTime">Start Time : ${formattedDate(
                  ele.start_time
                )}</p>
                <p class="endTime">End Time : ${formattedDate(ele.end_time)}</p>
        `;

      const contestLink = document.createElement("a");
      contestLink.href = ele.url;
      contestLink.target = "_blank";
      contestLink.innerText = "Take me to the contest...";
      contestLink.classList.add("contestLink");

      contestCard.appendChild(name);
      contestCard.appendChild(hostingPlatform);
      contestCard.appendChild(cardDetails);
      contestCard.appendChild(contestLink);

      container.appendChild(contestCard);
    });
  });

function formattedDate(inputDate) {
  //   const slicedDate = inputDate.slice(11, 19)
  //   return slicedDate
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  };

  const formattedDate = new Intl.DateTimeFormat("en-us", options).format(new Date(inputDate))
  return formattedDate
}
