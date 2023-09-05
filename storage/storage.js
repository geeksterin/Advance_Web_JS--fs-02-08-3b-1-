const name2 = document.getElementById("name");
const age = document.getElementById("age");
const button = document.getElementById("Button");
const button2 = document.getElementById("Button2");
const obj = {
  name: "",
  age: "",
};
button.addEventListener("click", (e) => {
  e.preventDefault();
  obj.name = name2.value;
  obj.age = age.value;
  console.log(obj);
  localStorage.setItem("details", JSON.stringify(obj));
  localStorage.setItem("a", JSON.stringify(obj));
  localStorage.setItem("s", JSON.stringify(obj));
  localStorage.setItem("d", JSON.stringify(obj));
  localStorage.setItem("f", JSON.stringify(obj));
  sessionStorage.setItem("details", JSON.stringify(obj));
  document.cookie = "details = " + JSON.stringify(obj);
});
button2.addEventListener("click", (e) => {
  e.preventDefault();
  //   console.log(JSON.parse(localStorage.getItem("details")));
  //   localStorage.removeItem("details")
  localStorage.clear();
  //   console.log(JSON.parse(sessionStorage.getItem("details")));
  //   sessionStorage.removeItem("details")
  sessionStorage.clear();
    console.log(JSON.parse(document.cookie.split("=")[1]));
});
