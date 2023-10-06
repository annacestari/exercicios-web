let cart = [];
let products = document.getElementsByTagName('button');
let cartProducts = '';

function displayItems() {
  for (let i = 0; i < products.length; i++) {
    products[i].addEventListener('click', function (event) {
      let product = event.target.parentNode.getAttribute('data-product');

      let parents = [];
      let el = event.target;
      while (el.parentNode && el.parentNode.nodeName.toLowerCase() != 'body') {
        el = el.parentNode;
        parents.push(el);
      }
      product = parents[2].getAttribute('data-product');

      if (!isExist(cart, product)) {
        cart.push(product);
      }

      updateCart();
    });
  }
}

displayItems();

function updateCart() {
  listProductsInCart();
  document.getElementById('products').innerHTML = cartProducts;
  document.getElementById('productsInCart').innerHTML = cart.length;
  ShowDeleteButton();
}

function listProductsInCart() {
  cartProducts = '';
  for (let i = 0; i < cart.length; i++) {
    cartProducts +=
      '<li><p data-items = "' +
      cart[i] +
      '"> &#128465; </p>' +
      cart[i] +
      '</li>';
  }
}

document.getElementById('open-cart').addEventListener('click', function () {
  document.getElementById('cart').classList.toggle('hide');
});

function ShowDeleteButton() {
  let items = document.querySelectorAll('#products > li');
  if (items !== undefined && items !== null) {
    items.forEach((element) => {
      let figure = element.childNodes[0];
      let text = element.childNodes[0].getAttribute('data-items');

      figure.addEventListener('click', () => {
        let articles = document.querySelectorAll('.cards > .card');
        deleteListing(cart, text);

        articles.forEach((article) => {
          if (
            article.getAttribute('data-product') === text &&
            cart.includes(text) == false
          ) {
            article.querySelector('button').innerHTML = ' Add to cart ';
          }
        });
        listProductsInCart();
        updateCart();
      });
    });
  }
}

function deleteListing(arr, item) {
  if (arr.includes(item)) {
    let itemsIndex = arr.indexOf(item);
    arr.splice(itemsIndex, 1);
  }
}

function isExist(arr, object) {
  let obj = arr.includes(object) ? true : false;
  return obj;
}
