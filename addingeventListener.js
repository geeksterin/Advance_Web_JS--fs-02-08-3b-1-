// const div = document.querySelector("#div")
// console.log(div);
// div.addEventListener("click", ()=>{
//     console.log("div is clicked !!!");
// })

// const grandParent = document.querySelector("#grandParent")
// grandParent.addEventListener("click", (event)=>{
//     console.log("grandParent clicked");
//     event.stopPropagation()
// }, true) // bubbling
// const parent = document.querySelector("#parent")
// parent.addEventListener("click", (event)=>{
//     console.log("parent clicked");
// }, true) // capturing
// const child = document.querySelector("#child")
// child.addEventListener("click", (event)=>{
//     console.log("child clicked");
// }, true) // bubbling

const parent = document.querySelector("#parentDiv");
parent.addEventListener("click", (event) => {
    console.log(event.target.id);
    window.location.href = "/" + event.target.id
});
