const cart = ["shoes", "shirt", "watch", "socks"];

// createOrder(cart) // return orderId

// proceedToPayment(orderId) // return transId

// updateVallet(transId)

// passing the callback function
// createOrder(cart, function () {
//   proceedToPayment(orderId, function () {
//     showOrderSummary(paymentInfo, function () {
//       updateVallet();
//     });
//   });
// });

// attaching the callback function
//  a common problem with .then chaining
// createOrder(cart)
//   .then((orderId) => {
//     return proceedToPayment(orderId);
//   })
//   .then((paymentInfo) => {
//     return showOrderSummary(paymentInfo);
//   })
//   .then(() => {
//     return updateVallet();
//   });

//   how to get rid of this common mistake
// createOrder(cart)
//   .then((orderId) => proceedToPayment(orderId))
//   .then((paymentInfo) => showOrderSummary(paymentInfo))
//   .then(() => updateVallet());

// we use promises
// const promise = createOrder(cart);
// promise.then(() => {
//   proceedToPayment();
// });
// { data : undef }

const user = fetch("https://api.github.com/users");
console.log(user);
user
  .then((result) => result.json())
  .then((data) => {
    console.log(data);
    return data;
  });
