const button = document.getElementById("button");
const buttonPressed = document.getElementById("buttonPressed");
const buttonTriggered = document.getElementById("buttonTriggered");

var pressedCount = 0;
var trigeredCount = 0;
// const variableToStoreDebounceFunction = _.debounce(() => {
//   buttonTriggered.innerText = ++trigeredCount;
// }, 800);
// const myDebounceFunction = (callbackFunction, delay) => {
//   let timer;
//   return function () {
//     if (timer) clearTimeout(timer);
//     timer = setTimeout(() => {
//       callbackFunction();
//     }, delay);
//   };
// };

// const variableToStoreDebounceFunction = myDebounceFunction(() => {
//   buttonTriggered.innerText = ++trigeredCount;
// }, 800);

// const variableToStoreThrottleFunction = _.throttle(() => {
//   buttonTriggered.innerText = ++trigeredCount;
// }, 800);



const myThrottleFunction = (callbackFunction, delay)=>{
    let lastTime = 0
    return function () {
        let currenttIME = new Date().getTime()
        console.log(lastTime , currenttIME);
        if(currenttIME - lastTime < delay) return
        lastTime = currenttIME
        return callbackFunction()
    }
}

const variableToStoreThrottleFunction = myThrottleFunction(() => {
  buttonTriggered.innerText = ++trigeredCount;
}, 800);



button.addEventListener("click", () => {
  buttonPressed.innerText = ++pressedCount;
//   variableToStoreDebounceFunction();
variableToStoreThrottleFunction()
});




