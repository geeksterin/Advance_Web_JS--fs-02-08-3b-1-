const cart = ["shoes", "shirt", "pamts", "socks"];

const promise = createOrder(cart);
promise
  .then((result) => {
    return result;
  })
  .then((orderId) => {
    return proceedToPayment(orderId);
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
    console.log(err.message);
  });

function validCart() {
  return true;
}

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    if (validCart(cart)) {
      const orderId = "12437348623178464876723144876";
      if (orderId) {
        resolve(orderId);
      }
    } else {
      const err = new Error("cart is not valid");
      reject(err);
    }
  });
  return pr;
}

function checkOrderId() {
  return true;
}

function proceedToPayment(orderId) {
  console.log(orderId);
  return new Promise((resolve, reject) => {
    if (checkOrderId()) {
      resolve("payment successfull");
    } else {
      const er = new Error("payment unsuccessful");
      reject(er);
    }
  });
}
