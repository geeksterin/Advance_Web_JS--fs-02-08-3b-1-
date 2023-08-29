// function hello() {
//   console.log("hello");
// }

// hello();
// console.log("bye bye");
// window.console.log("hello")
// const heading  = window.document.getElementById("headimg")
// console.log(heading);
// const window = {
//   console: {
//     log: function (param) {
//       // print this ${param}
//     },
//     warn: function (param) {
//       // print this ${param} in yellow color
//     },
//     error: function (param) {
//       // print this ${param} in red color
//     },
//     table: function (param) {
//       // print this ${param} like a table
//     },
//   },
//   document: {
//     getElementById: function () {},
//     getElementsByClassNAme: function () {},
//     querySelector: function () {},
//     querySelectorAll: function () {},
//     addEventListener: function () {},
//   },
//   localStorage: {
//     getItem: function () {},
//     setItem: function () {},
//   },
//   setTimeout: function () {},
//   intervalTimeout: function () {},
// };

// console.log("hello");

// setTimeout(function () {
//     console.log("cb1");
// }, 1000)
// setTimeout(function () {
//     console.log("cb2");
// }, 0)
// setTimeout(function () {
//     console.log("cb3");
// }, 20000)
// setTimeout(function () {
//     console.log("cb4");
// }, 10000)

// console.log("bye bye");

// const cart = ["shoes", "pants", "shirt", "watch"];

// function createOrder(cart) {
//   // take cart item as a parameter and will return a order id
//   return orderId;
// }
// function proceedToPayment(orderId) {
//   // take the order id and will check ki my orderId is valid or not if my ordetrID is valid
//   // it will proceed to paythe ammout and will generate an invoice
//   return invoice;
// }
// function showOrderSummary(invoice) {
//   //  it will shoe the invoce and wait for user's confirmation and once confirmed will
//   // make payemtent and will return the updated balancae
//   return updatedBal;
// }
// function updateVallet(updatedBal) {
//   // /will update my accnt's bal
//   return 1000;
// }
// inversion of control
// createOrder(cart, function () {
//   proceedToPayment(orderId, function () {
//     showOrderSummary(invoice, function () {
//       updateVallet(function () {
//         createOrder(cart, function () {
//           proceedToPayment(orderId, function () {
//             showOrderSummary(invoice, function () {
//               updateVallet(updatedBal);
//             });
//           });
//         });
//       });
//     });
//   });
// });
// callback hell
// inversion of control
// pyramid of doom

// promises
    // fullfilled
    // failed
    // pending


    // const promise = createOrder(cart)
    // promise.then((orderId)=>{
    //     proceedToPayment(orderId)
    // })

    const users = fetch("https://api.github.com/users")
    console.log(users);
    users.then((fgvdgfdh)=>{
        console.log(fgvdgfdh);
    })