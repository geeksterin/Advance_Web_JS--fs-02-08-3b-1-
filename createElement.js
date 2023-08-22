// const root = document.getElementById("root");

// const button = document.createElement("button");
// button.innerText = "click me !!!";
// root.appendChild(button);

// const grandParentDiv = document.createElement("div");
// const parentDiv1 = document.createElement("div");
// const parentDiv2 = document.createElement("div");
// const heading = document.createElement("h1");
// const paragraph = document.createElement("p");

// heading.innerText = "this is heading";
// paragraph.innerText = "this is paragraph";
// parentDiv1.appendChild(heading);
// parentDiv2.appendChild(paragraph);
// grandParentDiv.appendChild(parentDiv1);
// grandParentDiv.appendChild(parentDiv2);

// button.addEventListener("click", () => {
//   root.appendChild(grandParentDiv);
// });

const inputField = document.getElementById("inputText");
console.log(inputField.value);

const root = document.getElementById("root");

root.innerHTML = `
    <span style="color: red;" >Hiii </span> <span style="color: green;" > Hello</span>
`

const clickMEToChangeMyCOLOR = document.getElementById(
  "clickMEToChangeMyCOLOR"
);
clickMEToChangeMyCOLOR.style.color = "red";

clickMEToChangeMyCOLOR.addEventListener("click", (e) => {
  e.target.style.color = "green"
  e.target.style.fontSize = "100px"
});

// function showValue() {
//   const inputFieldValue = inputField.value;
//   const h1 = document.createElement("h1");
//   h1.innerText = inputFieldValue;
//   root.append(h1);
// }


