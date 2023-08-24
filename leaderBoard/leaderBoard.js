const scoreMainContainer = document.getElementById("scoreMainContainer");
const AddDetailsButton = document.getElementById("AddDetailsButton");
console.log(AddDetailsButton);
AddDetailsButton.addEventListener("click", () => {
  const fName = document.getElementById("fName");
  const lName = document.getElementById("lName");
  const country = document.getElementById("country");
  const score = document.getElementById("score");

  const scoreBoard = document.createElement("div");
  scoreBoard.classList.add("scoreBoard");

  scoreBoard.innerHTML = `
    <p class="playerName">${fName.value} ${lName.value}</p>
    <p class="country">${country.value}</p>
    <p class="score">${score.value}</p>
    <p class="deleteIcon">&#x1f5d1;</p>
  `;

  scoreMainContainer.appendChild(scoreBoard);
  fName.value = "";
  lName.value = "";
  country.value = "";
  score.value = "";
  sortBoard();
  deleteElemnt();
});

function sortBoard() {
  const ScoreBoard = document.querySelectorAll(".scoreBoard");
  const arr = [];
  ScoreBoard.forEach((ele) => arr.push(ele));
  const sortedArray = arr
    .map((ele) => {
      return ele;
    })
    .sort((a, b) => {
      let runOfManOne = parseInt(a.children[2].textContent);
      let runOfManTwo = parseInt(b.children[2].textContent);
      // B = CURRENT
      // A = PREV
      // MAN 1 = PREV
      // MAN 2 = CURRENT

      // PREV IS COMMING UPAR
      // PREV > CURRENT
      if (runOfManOne > runOfManTwo) {
        return -1;
      }
      // PREV < CURRENT
      if (runOfManOne < runOfManTwo) {
        return 1;
      }
    });

  sortedArray.forEach((ele) => {
    scoreMainContainer.append(ele);
  });
}

function deleteElemnt() {
  const deleteIcon = document.querySelectorAll(".deleteIcon");
  deleteIcon.forEach((ele)=>{
    ele.addEventListener("click", (e)=>{
        return e.target.parentElement.remove()
    })
  })
}
