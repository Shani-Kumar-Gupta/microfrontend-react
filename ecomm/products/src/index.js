import faker from 'faker';

let products = '';

for (let i = 0; i < 10; i++) {
  const name = faker.commerce.productName();
  products += `<div>${name}</div>`;
}

document.getElementById('products').innerHTML = products;
console.log(products);