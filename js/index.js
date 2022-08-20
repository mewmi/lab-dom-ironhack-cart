// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;

  const subTotal = price * quantity;

  const subTotalElement = product.querySelector('.subtotal span');
  subTotalElement.innerText = subTotal;

  return subTotal;
}

// ITERATION 2 AND 3

function calculateAll() {
  const productList = document.querySelectorAll('.product');
  let total = 0;
  productList.forEach(function (singleProduct) {
    const subtotal = updateSubtotal(singleProduct);
    total += subtotal;
  });
  const totalPriceElement = document.querySelector('#total-value span');
  totalPriceElement.textContent = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
